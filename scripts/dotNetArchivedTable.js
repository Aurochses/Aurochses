var projects = [
    {
        "name": "Aurochses.Module.Autofac.EntityFramework",
        "gitHubOwner": "Aurochses",
        "gitHubRepository": "Aurochses.Module.Autofac.EntityFramework",
        "info": "Stopped support .NET Framework.<br />Moved to <a href=\"https://github.com/Aurochses/Aurochses.Data.Autofac.EntityFrameworkCore\" target=\"_blank\">Aurochses.Data.Autofac.EntityFrameworkCore</a>"
    },
    {
        "name": "Aurochses.Module.Autofac.EntityFrameworkCore",
        "gitHubOwner": "Aurochses",
        "gitHubRepository": "Aurochses.Module.Autofac.EntityFrameworkCore",
        "info": "Moved to <a href=\"https://github.com/Aurochses/Aurochses.Data.Autofac.EntityFrameworkCore\" target=\"_blank\">Aurochses.Data.Autofac.EntityFrameworkCore</a>"
    },
    {
        "name": "Aurochses.Module.Business.Autofac.EntityFramework",
        "gitHubOwner": "Aurochses",
        "gitHubRepository": "Aurochses.Module.Business.Autofac.EntityFramework",
        "info": "Stopped support .NET Framework.<br />Moved to <a href=\"https://github.com/Aurochses/Aurochses.Data.Autofac.EntityFrameworkCore\" target=\"_blank\">Aurochses.Data.Autofac.EntityFrameworkCore</a>"
    },
    {
        "name": "Aurochses.Module.Business.Autofac.EntityFrameworkCore",
        "gitHubOwner": "Aurochses",
        "gitHubRepository": "Aurochses.Module.Business.Autofac.EntityFrameworkCore",
        "info": "Moved to <a href=\"https://github.com/Aurochses/Aurochses.Data.Autofac.EntityFrameworkCore\" target=\"_blank\">Aurochses.Data.Autofac.EntityFrameworkCore</a>"
    },
    {
        "name": "Aurochses.Module.Data.Autofac",
        "gitHubOwner": "Aurochses",
        "gitHubRepository": "Aurochses.Module.Data.Autofac",
        "info": "Moved to <a href=\"https://github.com/Aurochses/Aurochses.Data.Autofac.EntityFrameworkCore\" target=\"_blank\">Aurochses.Data.Autofac.EntityFrameworkCore</a>"
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

$("#dotNetArchivedTable > tbody").append(json2html.transform(projects, transforms));