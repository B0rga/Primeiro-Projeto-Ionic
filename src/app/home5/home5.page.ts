import { Component, OnInit } from '@angular/core';
//import {ActivatedRoute} from '@angular/router';
import {NavparamService} from './../navparam.service';

@Component({
  selector: 'app-home5',
  templateUrl: './home5.page.html',
  styleUrls: ['./home5.page.scss'],
})
export class Home5Page implements OnInit {

  dataE: any;
  constructor(
    //private activatedRoute: ActivatedRoute,
    private navParamService: NavparamService,
  ) {
    this.dataE = this.navParamService.getNavData()
   }

  ngOnInit() {
  }

}
