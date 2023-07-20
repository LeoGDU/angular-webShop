import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {
  shopCarNum!: number;
  picture!:string;
  uName!:string;
  uLineD!:string;

  constructor() { }

  ngOnInit(): void {
    var pictureUrl
    var uNameString

    // if(sessionStorage.getItem('uLineD') == null) {
    //   sessionStorage.setItem('uName',JSON.stringify(uNameString))
    //   sessionStorage.setItem('uLineD',JSON.stringify(uLineDString))
    // }

    // this.refreshHeaderService.refreshHeader$.subscribe(() => {
    //   var arraySize = JSON.parse(this.getSessionData()!);
    //   if (arraySize != null) {
    //     this.shopCarNum = arraySize.length;
    //   }else {
    //     this.shopCarNum = 0
    //   }
    // });
    // var arraySize = JSON.parse(this.getSessionData()!);
    // if (arraySize != null) {
    //   this.shopCarNum = arraySize.length;
    // }
  }

  logout(){
  }


  getSessionData() {
    return sessionStorage.getItem('productData');
  }
}
