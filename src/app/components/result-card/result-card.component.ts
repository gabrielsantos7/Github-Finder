import { Component, Input } from '@angular/core';
import { GithubProfile } from '@models/github-profile.model';
import { RouterLink } from '@angular/router';
import { ErrorComponent } from '@components/shared/error/error.component';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [RouterLink, ErrorComponent],
  templateUrl: './result-card.component.html',
})
export class ResultCardComponent {
  @Input({ required: true }) githubProfile: GithubProfile = {
    login: '',
    avatar_url: '',
    name: '',
    company: '',
    location: '',
    bio: '',
    html_url: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: new Date()
  };
  @Input({ required: true }) username: string = '';

}
