import { Component, OnInit, inject } from '@angular/core';
import { ResultCardComponent } from '../../components/result-card/result-card.component';
import { ActivatedRoute } from '@angular/router';
import { GithubProfileService } from '../../../../core/services/github-profile.service';
import { GithubProfile } from '../../../../core/models/github-profile.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ResultCardComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(GithubProfileService)
  username: string|null = null;
  githubProfile: GithubProfile | null = null;

  ngOnInit(): void {
      this.username = this.route.snapshot.params['username'];
      this.service.searchProfile('gabrielsantos7').subscribe({
        next: (user) => this.githubProfile = user,
        error: (err) => console.error(err),
        complete: () => console.log('complete')
      })
  }
}
