var projects = [
    {
        "groupName": "Aurochses",
        "items": [
            {
                "name": "Aurochses.Runtime",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Runtime",
                "nuGetPackage": "Aurochses.Runtime",
                "info": "OK"
            }
        ]
    },
    {
        "groupName": "Aurochses.Data",
        "items": [
            {
                "name": "Aurochses.Data",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Data",
                "nuGetPackage": "Aurochses.Data",
                "info": "OK"
            },
            {
                "name": "Aurochses.Data.Autofac.EntityFrameworkCore",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Data.Autofac.EntityFrameworkCore",
                "nuGetPackage": "Aurochses.Data.Autofac.EntityFrameworkCore",
                "info": "OK"
            },
            {
                "name": "Aurochses.Data.AutoMapper",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Data.AutoMapper",
                "nuGetPackage": "Aurochses.Data.AutoMapper",
                "info": "OK"
            },
            {
                "name": "Aurochses.Data.EntityFrameworkCore",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Data.EntityFrameworkCore",
                "nuGetPackage": "Aurochses.Data.EntityFrameworkCore",
                "info": "OK"
            },
            {
                "name": "Aurochses.Data.Extensions.MsSql",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Data.Extensions.MsSql",
                "nuGetPackage": "Aurochses.Data.Extensions.MsSql",
                "info": "OK"
            }
        ]
    },
    {
        "groupName": "Aurochses.Xunit",
        "items": [
            {
                "name": "Aurochses.Xunit",
                "gitHubOwner": "Aurochses",
                "gitHubRepository": "Aurochses.Xunit",
                "nuGetPackage": "Aurochses.Xunit",
                "info": "OK"
            }
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
                        "href": "https://www.nuget.org/packages/${nuGetPackage}",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/nuget/v/${nuGetPackage}.svg?style=flat-square"
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
                        "href": "http://nugetstatus.com/packages/${nuGetPackage}",
                        "html": [
                            {
                                "<>": "img",
                                "src": "http://nugetstatus.com/${nuGetPackage}.png"
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
    }
};

$("#dotNetTable > tbody").append(json2html.transform(projects, transforms.group));

var total = 0;

for (i = 0; i < projects.length; i++) {
    total += projects[i].items.length;
}

$("#dotNetTableTotal").text(total);