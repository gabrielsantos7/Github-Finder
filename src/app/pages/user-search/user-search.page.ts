import { Component } from '@angular/core';

import { SearchCardComponent } from '@components/search-card/search-card.component';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [SearchCardComponent],
  templateUrl: './user-search.page.html'
})
export class UserSearchPage {

}
