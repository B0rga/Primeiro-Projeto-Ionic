import { Component, OnInit } from '@angular/core';
// import {Location} from '@angular/common';
import {Router} from '@angular/router'
import {NavparamService} from '../navparam.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {

  value_selected: string;
  result: string;
  constructor(
  // private location:Location,
    private router:Router,
    private navParamService: NavparamService
  ) {}

  btnHelp(){
    alert("Botão de ajuda clicado")
  }
  // btnVoltar(){
    // this.location.back()
  // }
  // btnVoltar(){
    // this.router.navigate(['home'])
  // }

  btnAcessar(){
    console.log("btnAcessar clicado");
    let d = {
      'Pai' : 'Gerson',
      'Mae' : 'Patrícia',
      'Irma' : 'Letícia'
    }
    this.navParamService.setNavData(d);
    this.router.navigate(['home3/'])
    // this.router.navigate(['home3/'+JSON.stringify(d)])
  }
  itemChange(){
    if (this.value_selected == 'Gol')
      return (this.result = 'Correto!');
    else
      return (this.result = 'Incorreto');
    }
  ngOnInit() {
  }
}
