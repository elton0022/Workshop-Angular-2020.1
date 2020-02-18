import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ControladorService } from './services/controlador.service';
import { ListaComponent } from './components/lista/lista.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, CabecalhoComponent, ListaComponent],
  bootstrap:    [ AppComponent ],
  providers: [ControladorService]
})
export class AppModule { }
