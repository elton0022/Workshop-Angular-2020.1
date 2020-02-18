import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ControladorService } from '../../services/controlador.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.component.html',
  styleUrls: ['./atualizar.component.css']
})
export class AtualizarComponent implements OnInit {

  id = 0;
  Dev = undefined;
  atualizarDev = undefined;

  constructor(public route: ActivatedRoute,
  public controller: ControladorService,
  public router: Router) { }

  ngOnInit() {
    this.getDev();
  }

  getDev(){
    this.id = +this.route.snapshot.paramMap.get('id');
    this.Dev = this.controller.getDev(this.id);
    this.atualizarDev = new FormGroup({
      id: new FormControl(),
      nome: new FormControl(this.Dev.name),
      idade: new FormControl(this.Dev.age),
      linguagem: new FormControl(this.Dev.techs),
      cidade: new FormControl(this.Dev.city)
    });
  }

  atualizar(){
    this.atualizarDev.value.id = this.id;
    this.controller. atualizarDev(this.id, this.atualizarDev.value);
    this.router.navigate(['/lista']);
  }


}