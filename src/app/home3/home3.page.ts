import { Component, OnInit } from '@angular/core';
//import {ActivatedRoute} from '@angular/router';
import {NavparamService} from './../navparam.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.page.html',
  styleUrls: ['./home3.page.scss'],
})
export class Home3Page implements OnInit {

  data:any;
  constructor(
    //private activatedRoute:ActivatedRoute,
    private navParamService: NavparamService,
    private router: Router
  ) {
    //this.activatedRoute.paramMap.subscribe(
      //(data) => {console.log(data)}
    //)
    //this.data = this.activatedRoute.snapshot.paramMap.get('familia');
    this.data = this.navParamService.getNavData()
   }
  btnAcessar(){
    this.router.navigate(['home4'])
  }
  ngOnInit() {
  }
}
