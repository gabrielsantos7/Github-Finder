import { Component, Input } from '@angular/core';
import { GithubRepository } from '@models/github-repository.model';
import { RepoStatsComponent } from '@components/shared/repo-stats/repo-stats.component';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [RepoStatsComponent],
  templateUrl: './repository.component.html',
})
export class RepositoryComponent {
  @Input({required: true}) repository: GithubRepository = {
    name: '',
    html_url: '',
    description: '',
    homepage: '',
    language: '',
    stargazers_count: 0,
    forks_count: 0,
  };
}
