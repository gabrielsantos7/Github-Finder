import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubProfileService } from '@services/github-profile.service';
import { GithubProfile } from '@models/github-profile.model';

import { ResultCardComponent } from '@components/result-card/result-card.component';
import { LoaderComponent } from '@components/shared/loader/loader.component';
import { ErrorComponent } from '@components/shared/error/error.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ResultCardComponent, LoaderComponent, ErrorComponent],
  templateUrl: './user-profile.page.html'
})
export class UserProfilePage implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(GithubProfileService);

  githubProfile: GithubProfile = {
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
  isLoading: boolean = true;
  username: string = '';
  errorTitle: string = '';
  errorDescription: string = '';

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.service.searchProfile(this.username).subscribe({
      next: (user) => {
        this.githubProfile = user;
        this.isLoading = false;
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
}
