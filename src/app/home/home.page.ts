import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  linguagem : Array <string> = []
  hardwares : Array <any> = []

  constructor(
    private router: Router
  ) {
    this.linguagem = [
      'Java',
      'C#',
      'PHP'
    ]
    this.hardwares = [
      {'Nome':'Processador', 'Marca':'AMD'},
      {'Nome':'Placa de vídeo', 'Marca':'Nvidia'},
      {'Nome':'Memória RAM', 'Marca':'HyperX'},
    ]
  }

  btnAcessar(){
    console.log("btnAcessar clicado");
    alert ("Deseja acessar Home2?");
    this.router.navigate(['home2']);
    }
  itemClicked(itemH, i){
    alert(itemH.Nome + ' ' + itemH.Marca + '. Índice: ' + i)
    // alert(JSON.stringify(itemH))
  }
}
