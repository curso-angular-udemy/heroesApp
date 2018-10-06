import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe: Heroe = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  };

  constructor(private heroeService: HeroesService) { }

  guardar() {
    console.log(this.heroe);
    this.heroeService.nuevoHeroe(this.heroe).subscribe(data => console.log(data));
  }

}
