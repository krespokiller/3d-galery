import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public Route!:string
  constructor(
    private Router:Router,

  ) {
    this.changeBreadcrumb('Home')
   }

  ngOnInit(): void {
    this.Router.events.subscribe(value=>{
        if (value instanceof NavigationEnd) {
          console.log(value);
          if(value.url=='/home'){
            this.changeBreadcrumb('Home')
          }else if(value.url=='/home/contact'){
            this.changeBreadcrumb('Contact')
          }else if(value.url=='/list'){
            this.changeBreadcrumb('3d Models Gallery')
          }else if(value.url=='/upload'){
            this.changeBreadcrumb('Upload')
          }
        }
    })
  }

  changeBreadcrumb(name:string):void{
    this.Route=name
  }

}
