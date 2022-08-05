import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) { }

  getSocialMediaUsers() {
    return this.http.get('http://localhost:3000/graphic');
  }
  getSocialMediaUsersDoughnut() {
    return this.getSocialMediaUsers().pipe(
      delay(1500),
      map(data => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values };
      })
    );
  }

}
