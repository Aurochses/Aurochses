function fillProject(select) {
    var selectedValue = select.value;
    $('form')[0].reset();
    select.value = selectedValue;

    var project = findProject(dotNetGroups, selectedValue);

    for (key in project) {
        $(`form #${key}`).val(project[key]);
    }
}

function generateOutput(form, scrollToElementId, outputElementId) {
    var template =
        `<PackageId>${form.nuGetPackage.value}</PackageId>
<Version>${form.nuGetPackageVersion.value}</Version>
<Authors>${form.nuGetPackageAuthors.value}</Authors>
<Company>${form.nuGetPackageCompany.value}</Company>
<Description>${form.description.value}</Description>
<Copyright>${form.nuGetPackageCopyright.value}</Copyright>
<PackageLicenseUrl>https://github.com/${form.gitHubOwner.value}/${form.gitHubRepository.value}/blob/master/LICENSE</PackageLicenseUrl>
<PackageProjectUrl>https://github.com/${form.gitHubOwner.value}/${form.gitHubRepository.value}/wiki</PackageProjectUrl>
<PackageIconUrl>${form.nuGetPackageIconUrl.value}</PackageIconUrl>
<RepositoryUrl>https://github.com/${form.gitHubOwner.value}/${form.gitHubRepository.value}</RepositoryUrl>
<PackageTags>${form.nuGetPackageTags.value}</PackageTags>
`;

    $(`#${outputElementId}`).val(template);

    $(`#${scrollToElementId}`)[0].scrollIntoView(true);
}