var projects = [
    {
        "name": "Aurochses.Angular.Auth",
        "gitHubOwner": "Aurochses",
        "gitHubRepository": "Aurochses.Angular.Auth",
        "npmPackage": "@aurochses/angular-auth",
        "info": "OK"
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
            "html": [
                {
                    "<>": "a",
                    "target": "_blank",
                    "href": "https://www.npmjs.com/package/${npmPackage}",
                    "html": [
                        {
                            "<>": "img",
                            "src": "https://img.shields.io/npm/v/${npmPackage}.svg?style=flat-square"
                        }
                    ]
                }
            ]
        },
        {
            "<>": "td",
            "html": [
                {
                    "<>": "a",
                    "target": "_blank",
                    "href": "https://david-dm.org/${gitHubOwner}/${gitHubRepository}",
                    "html": [
                        {
                            "<>": "img",
                            "src": "https://david-dm.org/${gitHubOwner}/${gitHubRepository}.svg"
                        }
                    ]
                },
                {
                    "<>": "span",
                    "html": " "
                },
                {
                    "<>": "a",
                    "target": "_blank",
                    "href": "https://david-dm.org/${gitHubOwner}/${gitHubRepository}?type=dev",
                    "html": [
                        {
                            "<>": "img",
                            "src": "https://david-dm.org/${gitHubOwner}/${gitHubRepository}/dev-status.svg"
                        }
                    ]
                }
            ]
        },
        {
            "<>": "td",
            "html": "${info}"
        },
    ]
};

$("#angularTable > tbody").append(json2html.transform(projects, transforms));

$("#angularTableTotal").text(projects.length);