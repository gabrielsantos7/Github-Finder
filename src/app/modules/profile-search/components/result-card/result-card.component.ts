import { Component, Input } from '@angular/core';
import { GithubProfile } from '../../../../core/models/github-profile.model';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [],
  templateUrl: './result-card.component.html',
})
export class ResultCardComponent {
  @Input({ required: true }) githubProfile: GithubProfile | null = null;

}
