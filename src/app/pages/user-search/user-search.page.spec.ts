import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchPage } from './user-search.page';

describe('HomeComponent', () => {
  let component: UserSearchPage;
  let fixture: ComponentFixture<UserSearchPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSearchPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
