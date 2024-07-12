import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './header/nav/nav.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonFilterNavComponent } from './pokemon/pokemon-filter-nav/pokemon-filter-nav.component';
import {NgOptimizedImage} from "@angular/common";
import { CardComponent } from './pokemon/pokemon-list/card/card.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatProgressBar} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    PokemonComponent,
    PokemonListComponent,
    PokemonFilterNavComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    MatProgressBar,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
