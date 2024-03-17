import { Component } from '@angular/core';
import { SearchCardComponent } from '../../components/search-card/search-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchCardComponent],
  templateUrl: './home.page.html'
})
export class HomePage {

}
