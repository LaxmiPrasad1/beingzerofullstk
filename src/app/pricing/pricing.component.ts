import { Component, OnInit } from '@angular/core';
import {DataService}from '../data.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
   users={};
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(d => {
      this.users['arr']=d;
      alert(this.users['arr'].length);
    })
  }

}
/*
<div *ngFor="let usr of users.arr" class="w3-card-4" style="width: 30%;">
        <img src="{{usr.avatar_url}}" height=100px width=100px class="img-thumbnail">
        <div class="w3-container w3-center">
          <p>{{usr.login}}</p>
        </div>
      </div> ---!>*/
