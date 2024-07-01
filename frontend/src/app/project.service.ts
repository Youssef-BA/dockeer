import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = 'http://localhost:8081/api/projects';

  constructor(private http: HttpClient) { }

  createProject(project: any): Observable<any> {
    return this.http.post(this.baseUrl, project);
  }
}
