import { Routes } from '@angular/router';
import { HomePage } from './modules/profile-search/pages/home/home.page';
import { UserReposPage } from './modules/profile-search/pages/user-repos/user-repos.page';
import { UserProfilePage } from './modules/profile-search/pages/user-profile/user-profile.page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'users/:username', component: UserProfilePage },
  { path: 'users/:username/repos', component: UserReposPage }
];
