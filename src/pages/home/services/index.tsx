import { getProjectCommits, getProjectBranches } from 'api/gitHubApi';
import { ICommit } from 'types/commit';

export const getDataCommits = async (branchName: string): Promise<ICommit[]> => {
  const { data }: any = await getProjectCommits(branchName)
  if (!data) throw new Error('No response from GitHub')
  const commits = data.map((el: any) => ({
    hash: el.sha,
    name: el.commit.message,
    authorName: el.commit.author.name,
    authorEmail: el.commit.author.email,
    date: el.commit.author.date,
  }));
  return commits
}

export const getDataBranches = async (): Promise<string[]> => {
  const { data }: any = await getProjectBranches();
  if (!data) throw new Error('No response from GitHub')
  const branches = data.map((el: any) => (el.name));
  return branches;
};