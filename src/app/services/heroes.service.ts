import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Heroe } from '../interfaces/heroe';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroesapp-2122.firebaseio.com/Heroes.json';

  constructor(private http: Http) { }

  nuevoHeroe (heroe: Heroe): Observable<Heroe> {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'aplication/json'
    });
    return this.http.post(this.heroesURL, body, { headers }).pipe(
      map ((data: Response) => {
        console.log(data.json());
        return data.json();
      })
    );
  }
}
