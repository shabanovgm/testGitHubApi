import { getProjectCommits } from 'api/gitHubApi';

export default async () => {
  const { data } = await getProjectCommits()
  console.log('data', data)
  if (!data) return new Error('No response from GitHub')
  const commits = data.map((el: any) => ({
    hash: el.sha,
    name: el.commit.message,
    authorName: el.commit.author.name,
    authorEmail: el.commit.author.email,
    date: el.commit.author.date,
  }));
  return commits
} 