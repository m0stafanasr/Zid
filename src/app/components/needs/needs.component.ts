import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.scss']
})
export class NeedsComponent implements OnInit {
  img:string="";
  topspan:string="";
  btmspan:string="";
  constructor() { this.img="assets/zidapp_1-min 1.png";
this.topspan="assets/Dot Pattern 2.png";
this.btmspan="assets/Ellipse 250.png"}

  ngOnInit(): void {
  }

}
