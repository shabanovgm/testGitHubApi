import axios from 'axios';
import config from 'config'

export const getProjectCommits = (
    branchName: string,
    userName = config.GIT_USERNAME,
    projectName = config.GIT_PROJECT_NAME,
) => {
    return axios({
      method: 'GET',
      url: `https://api.github.com/repos/${userName}/${projectName}/commits?sha=${branchName}`,
    });
};

export const getProjectBranches = (
    userName = config.GIT_USERNAME,
    projectName = config.GIT_PROJECT_NAME,
) => {
    return axios({
      method: 'GET',
      url: `https://api.github.com/repos/${userName}/${projectName}/branches`,
    });
};
