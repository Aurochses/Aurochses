var groups = [
    {
        "groupName": "Auth",
        "items": [
            {
                "name": "Aurochses.Angular.Auth",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Angular.Auth",
                "npmPackage": "@aurochses/angular-auth",
                "info": "OK"
            }
        ]
    },
    {
        "groupName": "Components",
        "items": [
            {
                "name": "Aurochses.Angular.Navigation",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Angular.Navigation",
                "npmPackage": "@aurochses/angular-navigation",
                "info": "IN PROGRESS"
            },
            {
                "name": "Aurochses.Angular.PerfectScrollbar",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Angular.PerfectScrollbar",
                "npmPackage": "@aurochses/angular-perfect-scrollbar",
                "info": "IN PROGRESS"
            },
            {
                "name": "Aurochses.Angular.ProgressBar",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Angular.ProgressBar",
                "npmPackage": "@aurochses/angular-progress-bar",
                "info": "IN PROGRESS"
            },
            {
                "name": "Aurochses.Angular.SplashScreen",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Angular.SplashScreen",
                "npmPackage": "@aurochses/angular-splash-screen",
                "info": "IN PROGRESS"
            },
        ]
    },
    {
        "groupName": "Templates",
        "items": [
            {
                "name": "Aurochses.Angular.Template",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Angular.Template",
                "npmPackage": "@aurochses/angular-template",
                "info": "remove this, now Aurochses.Angular.Template.Fuze is primary template"
            },
            {
                "name": "Aurochses.Angular.Template.Fuze",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Angular.Template.Fuze",
                "npmPackage": "@aurochses/angular-template-fuze",
                "info": "IN PROGRESS"
            },
        ]
    }
];

var transforms = {
    "group": {
        "<>": "tr",
        "html": [
            {
                "<>": "th",
                "scope": "rowgroup",
                "colspan": 6,
                "html": "${groupName}"
            },
            {
                "<>": "div",
                "html": function (obj, index) {
                    return json2html.transform(obj.items, transforms.project);
                }
            }
        ]
    },
    "project": {
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
                        "href": "https://github.com/${gitHubOwner}/${gitHubRepository}/issues",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/github/issues-raw/${gitHubOwner}/${gitHubRepository}.svg?style=flat-square"
                            }
                        ]
                    },
                    {
                        "<>": "div"
                    },
                    {
                        "<>": "a",
                        "target": "_blank",
                        "href": "https://github.com/${gitHubOwner}/${gitHubRepository}/pulls",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/github/issues-pr-raw/${gitHubOwner}/${gitHubRepository}.svg?style=flat-square"
                            }
                        ]
                    },
                    {
                        "<>": "div"
                    },
                    {
                        "<>": "a",
                        "target": "_blank",
                        "href": "https://github.com/${gitHubOwner}/${gitHubRepository}",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/github/last-commit/${gitHubOwner}/${gitHubRepository}.svg?style=flat-square"
                            }
                        ]
                    },
                    {
                        "<>": "div"
                    },
                    {
                        "<>": "a",
                        "target": "_blank",
                        "href": "https://github.com/${gitHubOwner}/${gitHubRepository}",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/github/license/${gitHubOwner}/${gitHubRepository}.svg?style=flat-square"
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
                        "href": "https://www.npmjs.com/package/${npmPackage}",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/npm/v/${npmPackage}.svg?style=flat-square"
                            }
                        ]
                    },
                    {
                        "<>": "div"
                    },
                    {
                        "<>": "a",
                        "target": "_blank",
                        "href": "https://david-dm.org/${gitHubOwner}/${gitHubRepository}",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/david/${gitHubOwner}/${gitHubRepository}.svg?style=flat-square"
                            }
                        ]
                    },
                    {
                        "<>": "div"
                    },
                    {
                        "<>": "a",
                        "target": "_blank",
                        "href": "https://david-dm.org/${gitHubOwner}/${gitHubRepository}?type=dev",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/david/dev/${gitHubOwner}/${gitHubRepository}.svg?style=flat-square"
                            }
                        ]
                    }
                ]
            },
            {
                "<>": "td",
                "html": "${info}"
            }
        ]
    }
};

$("#angularTable > tbody").append(json2html.transform(groups, transforms.group));

var total = 0;

for (i = 0; i < groups.length; i++) {
    total += groups[i].items.length;
}

$("#angularTableTotal").text(total);