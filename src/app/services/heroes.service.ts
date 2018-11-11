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
  heroeURL = 'https://heroesapp-2122.firebaseio.com/Heroes/';

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

  actualizarHeroe ( heroe: Heroe, id: string ): Observable<Heroe> {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'aplication/json'
    });
    return this.http.put(`${this.heroeURL}${id}.json`, body, { headers }).pipe(
      map ((data: Response) => {
        console.log(data.json());
        return data.json();
      })
    );
  }

  getHeroe(key$: string) {
    const url = `${this.heroeURL}/${key$}.json`;
    return this.http.get(url).pipe(
      map(res => res.json())
    );
  }

  getHeroes() {
    return this.http.get(this.heroesURL).pipe(
      map(res => res.json())
    );
  }

  borrarHeroe(key$) {
    const url = `${this.heroeURL}/${key$}.json`;
    return this.http.delete(url).pipe(
      map(res => res.json())
    );
  }
}
