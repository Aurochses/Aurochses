function fillProject(select) {
    var selectedValue = select.value;
    $('form')[0].reset();
    select.value = selectedValue;

    var project = findProject(dotNetGroups, selectedValue);

    for (key in project) {
        $(`form #${key}`).val(project[key]);
    }
}

function generateOutput(form, scrollToElementId, outputElementId, outputPreviewElementId) {
    var converter = new showdown.Converter(
        {
            tables: true
        }
    );

    var template =
        `# ${form.name.value}

${form.description.value}

## NuGet
[![NuGet Version](https://img.shields.io/nuget/v/${form.nuGetPackage.value}.svg?style=flat-square)](https://www.nuget.org/packages/${form.nuGetPackage.value})
[![NuGet Dependencies](https://img.shields.io/librariesio/release/nuget/${form.nuGetPackage.value}.svg?style=flat-square)](https://libraries.io/nuget/${form.nuGetPackage.value})
[![NuGet Downloads](https://img.shields.io/nuget/dt/${form.nuGetPackage.value}.svg?style=flat-square)](https://www.nuget.org/packages/${form.nuGetPackage.value})

## Azure DevOps

[![Build](https://img.shields.io/azure-devops/release/${form.azureDevOpsOrganization.value}/${form.azureDevOpsReleaseProjectId.value}/${form.azureDevOpsReleaseId.value}/${form.azureDevOpsReleaseEnvironmentId.value}.svg?style=flat-square)](https://${form.azureDevOpsOrganization.value}.visualstudio.com/${form.azureDevOpsProject.value}/_release?definitionId=${form.azureDevOpsReleaseId.value})

Branch     | Build | Tests | Coverage
-----------|-------|-------|----------
${getAzureDevOps(form, 'develop')}
${getAzureDevOps(form, 'pre-master')}
${getAzureDevOps(form, 'master')}
`;

    $(`#${outputElementId}`).val(template);
    $(`#${outputPreviewElementId}`).html(converter.makeHtml(template));

    $(`#${scrollToElementId}`)[0].scrollIntoView(true);
}

function getAzureDevOps(form, branch) {
    return `${branch}` +
        ' | ' +
        `[![Build](https://img.shields.io/azure-devops/build/${form.azureDevOpsOrganization.value}/${form.azureDevOpsProject.value}/${form.azureDevOpsBuildId.value}/${branch}.svg?style=flat-square)](https://${form.azureDevOpsOrganization.value}.visualstudio.com/${form.azureDevOpsProject.value}/_build/latest?definitionId=${form.azureDevOpsBuildId.value}&branchName=${branch})` +
        ' | ' +
        `[![Tests](https://img.shields.io/azure-devops/tests/${form.azureDevOpsOrganization.value}/${form.azureDevOpsProject.value}/${form.azureDevOpsBuildId.value}/${branch}.svg?style=flat-square)](https://${form.azureDevOpsOrganization.value}.visualstudio.com/${form.azureDevOpsProject.value}/_build/latest?definitionId=${form.azureDevOpsBuildId.value}&branchName=${branch})` +
        ' | ' +
        `[![Coverage](https://img.shields.io/azure-devops/coverage/${form.azureDevOpsOrganization.value}/${form.azureDevOpsProject.value}/${form.azureDevOpsBuildId.value}/${branch}.svg?style=flat-square)](https://${form.azureDevOpsOrganization.value}.visualstudio.com/${form.azureDevOpsProject.value}/_build/latest?definitionId=${form.azureDevOpsBuildId.value}&branchName=${branch})`;
}