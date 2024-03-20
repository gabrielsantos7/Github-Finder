import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GithubProfileService } from '../../../../core/services/github-profile.service';
import { GithubRepository } from '../../../../core/models/github-repository.model';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { ErrorComponent } from '../../../../shared/components/error/error.component';
import { RepositoryComponent } from '../../components/repository/repository.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-repos',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    RouterLink,
    RepositoryComponent,
    LoaderComponent,
    ErrorComponent
  ],
  templateUrl: './user-repos.page.html'
})
export class UserReposPage {
  private route = inject(ActivatedRoute);
  private service = inject(GithubProfileService);
  repos: GithubRepository[] = [];
  filteredRepos: GithubRepository[] = [];
  username: string = '';
  isLoading: boolean = true;
  errorTitle: string = '';
  errorDescription: string = '';
  numberOfRepos: number = 6;
  repoName: string = '';
  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.service.searchRepos(this.username).subscribe({
      next: (repos) => {
        this.repos = repos;
        this.isLoading = false;
        this.filteredRepos = this.repos
          .sort((a, b) => {
            return b.stargazers_count - a.stargazers_count;
          })
          .slice(0, this.numberOfRepos);
      },
      error: (err) => {
        if (err.status === 403) {
          this.errorTitle = 'Limite de requisições atingido';
          this.errorDescription =
            'Você atingiu o número máximo de requisições à API do GitHub. Por favor, tente novamente mais tarde.';
        } else if (err.status === 404) {
          this.errorTitle = 'Usuário não encontrado';
        } else {
          this.errorTitle = 'Erro desconhecido';
          this.errorDescription =
            err.error.message ||
            'Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.';
        }
        this.isLoading = false;
      }
    });
  }

  loadMoreRepos() {
    this.numberOfRepos += 6;
    this.filteredRepos = this.repos
      .sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      })
      .slice(0, this.numberOfRepos);
  }

  filterRepos() {
    this.filteredRepos = this.repos
      .sort((a, b) => {
        return b.stargazers_count - a.stargazers_count;
      })
    if (this.repoName) {
      this.filteredRepos = this.repos
        .filter((repo) =>
          repo.name.toLowerCase().includes(this.repoName.toLowerCase())
        );
    } else {
      this.filteredRepos = this.repos
        .slice(0, this.numberOfRepos);
    }
  }

  backToTop() {
    window.scrollTo(0, 0);
  }
}
