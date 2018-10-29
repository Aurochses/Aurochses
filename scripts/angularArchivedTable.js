var projects = [
    {
        "name": "Aurochses.Angular.Forms",
        "gitHubOwner": "Aurochses",
        "gitHubRepository": "Aurochses.Angular.Forms",
        "info": "Please use this instead <a href=\"https://js.devexpress.com/\" target=\"_blank\">DevExtreme</a>"
    },
    {
        "name": "Aurochses.Angular.Table",
        "gitHubOwner": "Aurochses",
        "gitHubRepository": "Aurochses.Angular.Table",
        "info": "Please use this instead <a href=\"https://js.devexpress.com/\" target=\"_blank\">DevExtreme</a>"
    }
];

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
        },
    ]
};

$("#angularArchivedTable > tbody").append(json2html.transform(projects, transforms));