export interface GithubProfile {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  company: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}
