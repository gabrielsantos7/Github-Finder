import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubProfileService } from '../../../../core/services/github-profile.service';
import { GithubRepository } from '../../../../core/models/github-repository.model';

@Component({
  selector: 'app-repos',
  standalone: true,
  imports: [],
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css'
})
export class ReposComponent implements OnInit  {
  private route = inject(ActivatedRoute);
  private service = inject(GithubProfileService);
  repos: GithubRepository[] = []
  username: string = '';
  isLoading: boolean = false;

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.service.searchRepos(this.username).subscribe({
      next: (repos) => {
        this.repos = repos;
        this.isLoading = false;
        console.log(this.repos)
      },
      error: (err) => {
        console.error(err.status);
        this.isLoading = false
      },
    });
  }

}
