import { Routes } from '@angular/router';
import { UserSearchPage } from './modules/profile-search/pages/user-search/user-search.page';
import { UserReposPage } from './modules/profile-search/pages/user-repos/user-repos.page';
import { UserProfilePage } from './modules/profile-search/pages/user-profile/user-profile.page';

export const routes: Routes = [
  { path: '', component: UserSearchPage },
  { path: 'users/:username', component: UserProfilePage },
  { path: 'users/:username/repos', component: UserReposPage }
];
