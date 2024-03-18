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
  templateUrl: './user-profile.page.html',
})
export class UserProfilePage implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(GithubProfileService);
  isLoading: boolean = true;
  username: string = '';
  errorMsg: string = '';
  githubProfile: GithubProfile | null = null;

  ngOnInit(): void {
    this.username = this.route.snapshot.params['username'];
    this.service.searchProfile(this.username).subscribe({
      next: (user) => {
        this.githubProfile = user;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err.status);
        this.isLoading = false
      },
    });
  }
}
