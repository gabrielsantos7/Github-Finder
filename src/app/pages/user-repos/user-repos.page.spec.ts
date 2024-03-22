import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReposPage } from './user-repos.page';

describe('UserReposComponent', () => {
  let component: UserReposPage;
  let fixture: ComponentFixture<UserReposPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReposPage]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserReposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
