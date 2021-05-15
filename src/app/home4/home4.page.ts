import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavparamService} from '../navparam.service';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.page.html',
  styleUrls: ['./home4.page.scss'],
})

export class Home4Page implements OnInit {

  nome: string;
  sexo: string;
  residencia: string;
  animal: string;
  ano: string;

  //sexo_show: string;
  //residencia_show: string;
  //animal_show: string;
  //ano_show: string;

  constructor(
    private router: Router,
    private navParamService: NavparamService
  ) {}

  btnEnviar(){
    //this.sexo_show = this.sexo;
    //this.residencia_show = this.residencia;
    //this.animal_show = this.animal;
    //this.ano_show = this.ano;
    console.log('btnEnviar clicado');
      let d = {
        'nome' : this.nome,
        'sexo' : this.sexo,
        'residencia' : this.residencia,
        'animal' : this.animal,
        'ano' : this.ano
      }
      this.navParamService.setNavData(d)
      this.router.navigate(['home5/'])
  }
  ngOnInit() {
  }
}


