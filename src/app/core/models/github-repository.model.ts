export interface GithubRepository {
  name: string;
  html_url: string;
  description: string | null;
  language: string;
  stargazers_count: number;
  forks_count: number;
};
