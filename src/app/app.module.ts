// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Routes
import { APP_ROUTES } from './app.routing';

// Services
import { HeroesService } from './services/heroes.service';

// Components
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
