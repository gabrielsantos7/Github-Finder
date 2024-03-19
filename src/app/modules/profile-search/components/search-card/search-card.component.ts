import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GithubProfileService } from '../../../../core/services/github-profile.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './search-card.component.html'
})
export class SearchCardComponent {
  userName: string = '';
  errorMsg: string = '';
  private router = inject(Router);

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.userName.length > 0) {
      this.router.navigate([`users/${this.userName}`]);
    } else {
      this.errorMsg = 'Informe um nome de usuário válido.'
    }
  }
}
