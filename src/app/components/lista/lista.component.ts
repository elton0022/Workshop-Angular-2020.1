import { Component, OnInit } from '@angular/core';
import { ControladorService } from '../../services/controlador.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  devs = [];

  constructor(public controlador: ControladorService) { }

  ngOnInit() {
    this.devs = this.controlador.Devs;
  }

  apagarDev(id:number){
    this.controlador.removerDev(id);
    this.atualizarDevs();
  }

  atualizarDevs(){
    this.devs = this.controlador.Devs;
  }

}