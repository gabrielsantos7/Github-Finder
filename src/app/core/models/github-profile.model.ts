export interface GithubProfile {
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  location: string;
  bio: string;
  html_url: string
  public_repos: number;
  followers: number;
  following: number;
  created_at: Date;
}
