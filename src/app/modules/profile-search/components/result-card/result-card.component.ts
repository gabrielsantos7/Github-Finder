import { Component, Input } from '@angular/core';
import { GithubProfile } from '../../../../core/models/github-profile.model';
import { RouterLink } from '@angular/router';
import { ErrorComponent } from '../../../../shared/components/error/error.component';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [RouterLink, ErrorComponent],
  templateUrl: './result-card.component.html',
})
export class ResultCardComponent {
  @Input({ required: true }) githubProfile: GithubProfile | null = null;
  @Input({ required: true }) username: string = '';

}
