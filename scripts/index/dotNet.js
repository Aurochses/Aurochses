var groups = dotNetGroups;

var total = 0;

for (i = 0; i < groups.length; i++) {
    total += groups[i].items.length;
}

$("#dotNetTotal").text(total);