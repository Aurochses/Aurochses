function fillProject(select) {
    var project = findProject(dotNetGroups, select.value);

    for (key in project) {
        $(`form #${key}`).val(project[key]);
    }
}

function generateOutput(form, scrollToElementId, outputElementId, outputPreviewElementId) {
    var template =
        `<Version>${form.nuGetPackageVersion.value}</Version>
`;

    $(`#${outputElementId}`).val(template);

    $(`#${scrollToElementId}`)[0].scrollIntoView(true);
}