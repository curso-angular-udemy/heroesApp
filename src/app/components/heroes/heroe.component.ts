import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

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

  id: string;

  constructor ( private heroeService: HeroesService,
                private router: Router,
                private route: ActivatedRoute ) {
    this.route.params
      .subscribe( params => {
        this.id = params['id'];
        if (this.id !== 'nuevo') {
         this.heroeService.getHeroe(this.id)
          .subscribe (heroe => this.heroe = heroe);
        }
      });
  }

  guardar() {
    if (this.id === 'nuevo') {
      // Insertando
      this.heroeService.nuevoHeroe(this.heroe)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/heroe', data.name]);
        },
        error => console.error(error)
      );
    } else {
      // Actualizando
      this.heroeService.actualizarHeroe(this.heroe, this.id)
      .subscribe(
        (data: any) => {
          this.router.navigate(['/heroe', data.name]);
        },
        error => console.error(error)
      );
    }
  }

  agregarNuevo (formulario: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    formulario.reset(
      {casa: 'Marvel'}
    );
  }
}
