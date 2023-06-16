import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, from, interval, of } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  actions: Array<any> = [
    {title: 'Home', route: '/home', icon: 'house'},
    {title: 'Products', route: '/products', icon: 'arrow-down-up'},
    {title: 'New', route: '/new', icon: 'plus-circle'}
  ];

  currentAction: any;

  setCurrentAction(action: any){
    this.currentAction = action;
  }

}
