import { Injectable } from '@angular/core';
import { Dev } from '../models/Dev';

@Injectable()
export class ControladorService {

  id = 1;

  Devs: Dev[] = [{id: 1, nome: "tesste", idade:12, linguagem: "java", cidade:"Crateús"}];

  constructor() { }

  adicionar(dev:Dev){
    dev.id = this.id; 
    this.Devs.push(dev);
    this.id = this.id + 1;
  }

  getDev(id:number){
    for(let dev of this.Devs){
      if(dev.id === id){
        return dev;
      }
    }
    return null;
  }

  removerDev(id: number){
    this.Devs = this.Devs.filter(dev=> dev.id != id);
  }

  atualizarDev(id: number, devAtualizado: Dev){

    function atualiza(item, indice, lista){
      if(lista[indice].id === id){
        lista[indice] = devAtualizado;
      }
    }

    this.Devs.forEach(atualiza);
  }

  

}