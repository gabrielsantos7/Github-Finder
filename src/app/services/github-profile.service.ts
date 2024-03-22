import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubProfile } from '../models/github-profile.model';
import { environment } from '../../environments/environment';
import { GithubRepository } from '../models/github-repository.model';

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
