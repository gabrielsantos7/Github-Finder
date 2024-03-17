export interface GithubProfile {
  id: number;
  login: string;
  avatarUrl: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  publicRepos: number;
  publicGists: number;
  followers: number;
  following: number;
  createdAt: Date;
  updatedAt: Date;
}
