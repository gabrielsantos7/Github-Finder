import { Routes } from '@angular/router';
import { HomePage } from './modules/profile-search/pages/home/home.page';
import { UserProfileComponent } from './modules/profile-search/pages/user-profile/user-profile.component';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'users/:username', component: UserProfileComponent }
];
