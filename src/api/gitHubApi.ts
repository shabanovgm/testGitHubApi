import axios from 'axios';
import config from 'config'

export const getProjectCommits = (
    branchName: string,
    userName = config.GIT_USERNAME,
    projectName = config.GIT_PROJECT_NAME,
) => {
    // return axios({
    //   method: 'GET',
    //   url: `https://api.github.com/repos/${userName}/${projectName}/commits?sha=${branchName}`,
    // });
    return ({
        data: [
            {
                "sha": "d87184e698a69df4bb06c721075794ea45f2882f",
                "node_id": "MDY6Q29tbWl0MjMwMDk0Njk4OmQ4NzE4NGU2OThhNjlkZjRiYjA2YzcyMTA3NTc5NGVhNDVmMjg4MmY=",
                "commit": {
                    "author": {
                        "name": "Shabanov G.M",
                        "email": "gorg.shabanov@fusion-team.com",
                        "date": "2019-12-25T14:23:54Z"
                    },
                    "committer": {
                        "name": "Shabanov G.M",
                        "email": "gorg.shabanov@fusion-team.com",
                        "date": "2019-12-25T14:23:54Z"
                    },
                    "message": "Add getting commits data",
                    "tree": {
                        "sha": "6e6d916f244c1dd1f64bb709127b4e1fb0b77c9d",
                        "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/git/trees/6e6d916f244c1dd1f64bb709127b4e1fb0b77c9d"
                    },
                    "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/git/commits/d87184e698a69df4bb06c721075794ea45f2882f",
                    "comment_count": 0,
                    "verification": {
                        "verified": false,
                        "reason": "unsigned",
                        "signature": null,
                        "payload": null
                    }
                },
                "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/d87184e698a69df4bb06c721075794ea45f2882f",
                "html_url": "https://github.com/shabanovgm/testGitHubApi/commit/d87184e698a69df4bb06c721075794ea45f2882f",
                "comments_url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/d87184e698a69df4bb06c721075794ea45f2882f/comments",
                "author": {
                    "login": "shabanovgm",
                    "id": 32416910,
                    "node_id": "MDQ6VXNlcjMyNDE2OTEw",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/32416910?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/shabanovgm",
                    "html_url": "https://github.com/shabanovgm",
                    "followers_url": "https://api.github.com/users/shabanovgm/followers",
                    "following_url": "https://api.github.com/users/shabanovgm/following{/other_user}",
                    "gists_url": "https://api.github.com/users/shabanovgm/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/shabanovgm/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/shabanovgm/subscriptions",
                    "organizations_url": "https://api.github.com/users/shabanovgm/orgs",
                    "repos_url": "https://api.github.com/users/shabanovgm/repos",
                    "events_url": "https://api.github.com/users/shabanovgm/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/shabanovgm/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "shabanovgm",
                    "id": 32416910,
                    "node_id": "MDQ6VXNlcjMyNDE2OTEw",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/32416910?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/shabanovgm",
                    "html_url": "https://github.com/shabanovgm",
                    "followers_url": "https://api.github.com/users/shabanovgm/followers",
                    "following_url": "https://api.github.com/users/shabanovgm/following{/other_user}",
                    "gists_url": "https://api.github.com/users/shabanovgm/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/shabanovgm/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/shabanovgm/subscriptions",
                    "organizations_url": "https://api.github.com/users/shabanovgm/orgs",
                    "repos_url": "https://api.github.com/users/shabanovgm/repos",
                    "events_url": "https://api.github.com/users/shabanovgm/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/shabanovgm/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86",
                        "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86",
                        "html_url": "https://github.com/shabanovgm/testGitHubApi/commit/e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86"
                    }
                ]
            },
            {
                "sha": "e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86",
                "node_id": "MDY6Q29tbWl0MjMwMDk0Njk4OmUwOGViY2JlYTdhZWUxNzljZWEyYzA4ZWYyZjllNmEwMGMxMWJmODY=",
                "commit": {
                    "author": {
                        "name": "Shabanov G.M",
                        "email": "gorg.shabanov@fusion-team.com",
                        "date": "2019-12-25T11:38:52Z"
                    },
                    "committer": {
                        "name": "Shabanov G.M",
                        "email": "gorg.shabanov@fusion-team.com",
                        "date": "2019-12-25T11:56:48Z"
                    },
                    "message": "Create base layout",
                    "tree": {
                        "sha": "290ed746c7b3a0465c350d03959e9b711e7096bc",
                        "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/git/trees/290ed746c7b3a0465c350d03959e9b711e7096bc"
                    },
                    "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/git/commits/e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86",
                    "comment_count": 0,
                    "verification": {
                        "verified": false,
                        "reason": "unsigned",
                        "signature": null,
                        "payload": null
                    }
                },
                "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86",
                "html_url": "https://github.com/shabanovgm/testGitHubApi/commit/e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86",
                "comments_url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86/comments",
                "author": {
                    "login": "shabanovgm",
                    "id": 32416910,
                    "node_id": "MDQ6VXNlcjMyNDE2OTEw",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/32416910?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/shabanovgm",
                    "html_url": "https://github.com/shabanovgm",
                    "followers_url": "https://api.github.com/users/shabanovgm/followers",
                    "following_url": "https://api.github.com/users/shabanovgm/following{/other_user}",
                    "gists_url": "https://api.github.com/users/shabanovgm/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/shabanovgm/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/shabanovgm/subscriptions",
                    "organizations_url": "https://api.github.com/users/shabanovgm/orgs",
                    "repos_url": "https://api.github.com/users/shabanovgm/repos",
                    "events_url": "https://api.github.com/users/shabanovgm/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/shabanovgm/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "shabanovgm",
                    "id": 32416910,
                    "node_id": "MDQ6VXNlcjMyNDE2OTEw",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/32416910?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/shabanovgm",
                    "html_url": "https://github.com/shabanovgm",
                    "followers_url": "https://api.github.com/users/shabanovgm/followers",
                    "following_url": "https://api.github.com/users/shabanovgm/following{/other_user}",
                    "gists_url": "https://api.github.com/users/shabanovgm/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/shabanovgm/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/shabanovgm/subscriptions",
                    "organizations_url": "https://api.github.com/users/shabanovgm/orgs",
                    "repos_url": "https://api.github.com/users/shabanovgm/repos",
                    "events_url": "https://api.github.com/users/shabanovgm/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/shabanovgm/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": [
                    {
                        "sha": "52e62cae3680564e9bd6acbf1d35327ba3eaa18e",
                        "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/52e62cae3680564e9bd6acbf1d35327ba3eaa18e",
                        "html_url": "https://github.com/shabanovgm/testGitHubApi/commit/52e62cae3680564e9bd6acbf1d35327ba3eaa18e"
                    }
                ]
            },
            {
                "sha": "52e62cae3680564e9bd6acbf1d35327ba3eaa18e",
                "node_id": "MDY6Q29tbWl0MjMwMDk0Njk4OjUyZTYyY2FlMzY4MDU2NGU5YmQ2YWNiZjFkMzUzMjdiYTNlYWExOGU=",
                "commit": {
                    "author": {
                        "name": "Shabanov G.M",
                        "email": "gorg.shabanov@fusion-team.com",
                        "date": "2019-12-25T11:09:20Z"
                    },
                    "committer": {
                        "name": "Shabanov G.M",
                        "email": "gorg.shabanov@fusion-team.com",
                        "date": "2019-12-25T11:09:20Z"
                    },
                    "message": "Start project",
                    "tree": {
                        "sha": "eaa7254761a4d7ff5a800060cd26daad01a83db2",
                        "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/git/trees/eaa7254761a4d7ff5a800060cd26daad01a83db2"
                    },
                    "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/git/commits/52e62cae3680564e9bd6acbf1d35327ba3eaa18e",
                    "comment_count": 0,
                    "verification": {
                        "verified": false,
                        "reason": "unsigned",
                        "signature": null,
                        "payload": null
                    }
                },
                "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/52e62cae3680564e9bd6acbf1d35327ba3eaa18e",
                "html_url": "https://github.com/shabanovgm/testGitHubApi/commit/52e62cae3680564e9bd6acbf1d35327ba3eaa18e",
                "comments_url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/52e62cae3680564e9bd6acbf1d35327ba3eaa18e/comments",
                "author": {
                    "login": "shabanovgm",
                    "id": 32416910,
                    "node_id": "MDQ6VXNlcjMyNDE2OTEw",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/32416910?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/shabanovgm",
                    "html_url": "https://github.com/shabanovgm",
                    "followers_url": "https://api.github.com/users/shabanovgm/followers",
                    "following_url": "https://api.github.com/users/shabanovgm/following{/other_user}",
                    "gists_url": "https://api.github.com/users/shabanovgm/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/shabanovgm/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/shabanovgm/subscriptions",
                    "organizations_url": "https://api.github.com/users/shabanovgm/orgs",
                    "repos_url": "https://api.github.com/users/shabanovgm/repos",
                    "events_url": "https://api.github.com/users/shabanovgm/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/shabanovgm/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "committer": {
                    "login": "shabanovgm",
                    "id": 32416910,
                    "node_id": "MDQ6VXNlcjMyNDE2OTEw",
                    "avatar_url": "https://avatars1.githubusercontent.com/u/32416910?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/shabanovgm",
                    "html_url": "https://github.com/shabanovgm",
                    "followers_url": "https://api.github.com/users/shabanovgm/followers",
                    "following_url": "https://api.github.com/users/shabanovgm/following{/other_user}",
                    "gists_url": "https://api.github.com/users/shabanovgm/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/shabanovgm/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/shabanovgm/subscriptions",
                    "organizations_url": "https://api.github.com/users/shabanovgm/orgs",
                    "repos_url": "https://api.github.com/users/shabanovgm/repos",
                    "events_url": "https://api.github.com/users/shabanovgm/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/shabanovgm/received_events",
                    "type": "User",
                    "site_admin": false
                },
                "parents": []
            }
        ]
    }

    );
};

export const getProjectBranches = (
    userName = config.GIT_USERNAME,
    projectName = config.GIT_PROJECT_NAME,
) => {
    // return axios({
    //   method: 'GET',
    //   url: `https://api.github.com/repos/${userName}/${projectName}/branches`,
    // });
    return (
        {
            data: [
                {
                "name": "master",
                "commit": {
                    "sha": "e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86",
                    "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86"
                },
                "protected": false
            },
            {
                "name": "test-branch",
                "commit": {
                    "sha": "e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86",
                    "url": "https://api.github.com/repos/shabanovgm/testGitHubApi/commits/e08ebcbea7aee179cea2c08ef2f9e6a00c11bf86"
                },
                "protected": false
            }
            ]
        }
    )
};
