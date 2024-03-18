import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';

import { GithubProfile } from '../models/github-profile.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubProfileService {
  private readonly apiUrl = environment.apiUrl;
  private http = inject(HttpClient);

  constructor() {}

  searchProfile(userName: string): Observable<GithubProfile> {
    return this.http.get<GithubProfile>(`${this.apiUrl}/${userName}`);
  }
}
