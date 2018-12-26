var groups = angularGroups;

var total = 0;

for (i = 0; i < groups.length; i++) {
    total += groups[i].items.length;
}

$("#angularTotal").text(total);