import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-stats',
  standalone: true,
  imports: [],
  templateUrl: './repo-stats.component.html',
})
export class RepoStatsComponent {
  @Input({required: true}) type: 'star' | 'fork' = 'fork';
  @Input({required: true}) count: number = 0;

  get iconClass(): string {
    return this.type === 'star' ? 'fa-regular fa-star text-lg' : 'fa-solid fa-code-branch text-lg';
  }

}
