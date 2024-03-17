import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchCardComponent } from './components/search-card/search-card.component';
import { HomePage } from './pages/home/home.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SearchCardComponent, HomePage],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: []
})
export class ProfileSearchModule {}
