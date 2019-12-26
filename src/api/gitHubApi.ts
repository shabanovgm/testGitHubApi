import axios from 'axios';

export const getProjectCommits = (
  branchName: string,
  userName = process.env.REACT_APP_GIT_USERNAME,
  projectName = process.env.REACT_APP_GIT_PROJECT_NAME,
) => {
  return axios.get(`https://api.github.com/repos/${userName}/${projectName}/commits?sha=${branchName}`);
};

export const getProjectBranches = (
  userName = process.env.REACT_APP_GIT_USERNAME,
  projectName = process.env.REACT_APP_GIT_PROJECT_NAME,
) => {
  return axios.get(`https://api.github.com/repos/${userName}/${projectName}/branches`);
};
