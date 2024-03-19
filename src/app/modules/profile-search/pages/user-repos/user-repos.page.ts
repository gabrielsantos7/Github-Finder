import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubProfileService } from '../../../../core/services/github-profile.service';
import { GithubRepository } from '../../../../core/models/github-repository.model';
import { LoaderComponent } from '../../../../core/components/loader/loader.component';
import { ErrorComponent } from '../../../../core/components/error/error.component';
import { RepositoryComponent } from '../../components/repository/repository.component';

@Component({
  selector: 'app-user-repos',
  standalone: true,
  imports: [LoaderComponent, ErrorComponent, RepositoryComponent],
  templateUrl: './user-repos.page.html',
})
export class UserReposPage {
  private route = inject(ActivatedRoute);
  private service = inject(GithubProfileService);
  repos: GithubRepository[] = []
  filteredRepos: GithubRepository[] = []
  username: string = '';
  isLoading: boolean = true;
  errorMsg: string = ''
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.service.searchRepos(this.username).subscribe({
      next: (repos) => {
        this.repos = repos;
        this.isLoading = false;
        this.filteredRepos = this.repos.sort((a, b) => {
          return b.stargazers_count - a.stargazers_count;
        }).slice(0, 6);        
      },
      error: (err) => {
        if(err.status === 404) {
          this.errorMsg = 'Usuário não encontrado';
        } else {
          this.errorMsg = err.error.message;
        }
        this.isLoading = false
      },
    });
  }

}
