import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubProfile } from '@models/github-profile.model';
import { GithubRepository } from '@models/github-repository.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubProfileService {
  private readonly apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() {}

  searchProfile(username: string): Observable<GithubProfile> {
    return this.http.get<GithubProfile>(`${this.apiUrl}/${username}`);
  }

  searchRepos(username: string): Observable<GithubRepository[]> {
    return this.http.get<GithubRepository[]>(`${this.apiUrl}/${username}/repos`);
  }
}
