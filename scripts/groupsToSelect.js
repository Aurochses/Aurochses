function groupsToSelect(groups, selectElementId) {
    var projects = [];

    groups.forEach(
        group => {
            group.items.forEach(
                item => {
                    projects.push(item.name);
                }
            );
        }
    );

    projects.sort();

    var select = document.getElementById(selectElementId);

    projects.forEach(
        project => {
            select.options[select.options.length] = new Option(project, project);
        }
    );
}

function findProject(groups, name) {
    for (const x in groups) {
        for (const y in groups[x].items) {
            if (groups[x].items[y].name === name) return groups[x].items[y];
        }
    }

    return null;
}