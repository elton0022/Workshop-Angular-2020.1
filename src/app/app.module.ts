import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule }     from './routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ControladorService } from './services/controlador.service';
import { ListaComponent } from './components/lista/lista.component';
import { AtualizarComponent } from './components/atualizar/atualizar.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';


@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, CabecalhoComponent, ListaComponent, AtualizarComponent, AdicionarComponent],
  bootstrap:    [ AppComponent ],
  providers: [ControladorService]
})
export class AppModule { }
