function groupsToSelect(groups, selectElementId) {
    groups.forEach(
        group => {
            var select = document.getElementById(selectElementId);

            for (index in group.items) {
                select.options[select.options.length] = new Option(group.items[index].name, group.items[index].name);
            }
        }
    );
}