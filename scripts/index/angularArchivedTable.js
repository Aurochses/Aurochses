var projects = angularArchivedProjects;

var transforms = {
    "<>": "tr",
    "html": [
        {
            "<>": "th",
            "html": function (obj, index) {
                return index + 1;
            }
        },
        {
            "<>": "td",
            "html": "${name}"
        },
        {
            "<>": "td",
            "html": [
                {
                    "<>": "a",
                    "target": "_blank",
                    "href": "https://github.com/${gitHubOwner}/${gitHubRepository}",
                    "html": "GitHub"
                }
            ]
        },
        {
            "<>": "td",
            "html": "${info}"
        }
    ]
};

$("#angularArchivedTable > tbody").append(json2html.transform(projects, transforms));

$("#angularArchivedTableTotal").text(projects.length);