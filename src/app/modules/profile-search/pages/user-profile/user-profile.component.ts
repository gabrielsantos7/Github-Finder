import { Component, OnInit, inject, signal } from '@angular/core';
import { ResultCardComponent } from '../../components/result-card/result-card.component';
import { ActivatedRoute } from '@angular/router';
import { GithubProfileService } from '../../../../core/services/github-profile.service';
import { GithubProfile } from '../../../../core/models/github-profile.model';
import { LoaderComponent } from '../../../../core/components/loader/loader.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ResultCardComponent, LoaderComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(GithubProfileService);
  isLoading = true;
  username: string = '';
  githubProfile: GithubProfile | null = null;

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.service.searchProfile(this.username).subscribe({
      next: (user) => {
        this.githubProfile = user;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => this.isLoading = false
    });
  }
}
