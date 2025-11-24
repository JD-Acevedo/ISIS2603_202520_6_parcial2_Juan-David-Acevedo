import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artista } from '../modelo/artista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {
  private apiUrl = 'http://localhost:8080/artists';

  constructor(private http: HttpClient) { }

  getArtistas(): Observable<Artista[]> {
    return this.http.get<Artista[]>(this.apiUrl);
  }
}
