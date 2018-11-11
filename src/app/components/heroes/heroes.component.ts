import { Component } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent {

  heroes: Array<any> = [];
  loading = true;

  constructor( private _heroeService: HeroesService) {
    this._heroeService.getHeroes().subscribe(
      (data) => {
        console.log(data);
        // tslint:disable-next-line:forin
        this.heroes = data;
        this.loading = false;
      },
      error => console.error(error)
    );
   }

   borrarHeroe(key$) {
    this._heroeService.borrarHeroe(key$).subscribe(
      res => {
        if (res) {
          console.error(res);
        } else {
          // todo bien
          delete this.heroes[key$];
        }
      },
      error => console.error(error)
    );
   }
}
