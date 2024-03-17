import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GithubProfileService } from '../../../../core/services/github-profile.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-card.component.html'
})
export class SearchCardComponent {
  userName: string = '';
  private router = inject(Router);

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.userName.length > 0) {
      this.router.navigate([`users/${this.userName}`]);
    }
  }
}
