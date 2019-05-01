var groups = dotNetGroups;

var transforms = {
    "group": {
        "<>": "tr",
        "html": [
            {
                "<>": "th",
                "scope": "rowgroup",
                "colspan": 7,
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
                "html": [
                    {
                        "<>": "span",
                        "html": "${name} "
                    },
                    {
                        "<>": "a",
                        "target": "_blank",
                        "href": "https://github.com/${gitHubOwner}/${gitHubRepository}",
                        "html": [
                            {
                                "<>": "i",
                                "class": "fab fa-github fa-fw"
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
                        "href": "https://dev.azure.com/${azureDevOpsOrganization}/${azureDevOpsProject}/_build/latest?definitionId=${azureDevOpsBuildId}&branchName=master",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/azure-devops/build/${azureDevOpsOrganization}/${azureDevOpsProject}/${azureDevOpsBuildId}/master.svg?style=flat-square"
                            }
                        ]
                    },
                    {
                        "<>": "div"
                    },
                    {
                        "<>": "a",
                        "target": "_blank",
                        "href": "https://dev.azure.com/${azureDevOpsOrganization}/${azureDevOpsProject}/_build/latest?definitionId=${azureDevOpsBuildId}&branchName=master",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/azure-devops/tests/${azureDevOpsOrganization}/${azureDevOpsProject}/${azureDevOpsBuildId}/master.svg?style=flat-square"
                            }
                        ]
                    },
                    {
                        "<>": "div"
                    },
                    {
                        "<>": "a",
                        "target": "_blank",
                        "href": "https://dev.azure.com/${azureDevOpsOrganization}/${azureDevOpsProject}/_build/latest?definitionId=${azureDevOpsBuildId}&branchName=master",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/azure-devops/coverage/${azureDevOpsOrganization}/${azureDevOpsProject}/${azureDevOpsBuildId}/master.svg?style=flat-square"
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
                        "href": "https://dev.azure.com/${azureDevOpsOrganization}/${azureDevOpsProject}/_release?definitionId=${azureDevOpsReleaseId}",
                        "html": [
                            {
                                "<>": "img",
                                "src": "https://img.shields.io/azure-devops/release/${azureDevOpsOrganization}/${azureDevOpsReleaseProjectId}/${azureDevOpsReleaseId}/${azureDevOpsReleaseEnvironmentId}.svg?style=flat-square"
                            }
                        ]
                    },
                ]
            },
            {
                "<>": "div",
                "html": function (obj, index) {
                    if (obj.nuGetPackage === null) {
                        return "<td>-</td>";
                    }

                    return json2html.transform(obj, transforms.nuget);
                }
            },
            {
                "<>": "td",
                "html": "${info}"
            }
        ]
    },
    "nuget": {
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
            },
            {
                "<>": "div"
            },
            {
                "<>": "a",
                "target": "_blank",
                "href": "https://libraries.io/nuget/${nuGetPackage}",
                "html": [
                    {
                        "<>": "img",
                        "src": "https://img.shields.io/librariesio/release/nuget/${nuGetPackage}.svg?style=flat-square"
                    }
                ]
            }
        ]
    }
};

$("#table > tbody").append(json2html.transform(groups, transforms.group));

var total = 0;

for (i = 0; i < groups.length; i++) {
    total += groups[i].items.length;
}

$("#tableTotal").text(total);