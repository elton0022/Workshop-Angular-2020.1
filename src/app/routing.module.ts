import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { ListaComponent } from './components/lista/lista.component';
import { AtualizarComponent } from './components/atualizar/atualizar.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';


const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListaComponent },
  { path: 'adicionar', component: AdicionarComponent},
  { path: 'atualizar/:id', component: AtualizarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}