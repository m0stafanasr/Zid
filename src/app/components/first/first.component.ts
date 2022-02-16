import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  text:string="";
  img:string="";
  bgimg:string="";
  topimg:string="";
  constructor() {this.text="طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو أرباحك وأرباح متجرك بشكل فعال";
this.img="assets/product03 1.png",
this.bgimg="assets/Ellipse 250.png",
this.topimg="assets/Dot Pattern 2.png"
}

  ngOnInit(): void {
  }

}
