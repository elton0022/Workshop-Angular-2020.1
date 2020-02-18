import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ControladorService } from '../../services/controlador.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  id = 1;

  novoDev = new FormGroup({
    id: new FormControl(0),
    nome: new FormControl(''),
    idade: new FormControl(),
    linguagem: new FormControl(),
    cidade: new FormControl()
  });

  constructor(public controlador: ControladorService) { }

  ngOnInit() {}

  addDev(){
    console
    
    this.controlador.adicionarDev(this.novoDev.value);

    //this.router.navigate(['/listDevs']);
  }

}