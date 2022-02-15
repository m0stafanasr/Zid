import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  img:string="";
  constructor(private appserv: DataService) { }

  ngOnInit(): void {
   this.img=this.appserv.showImage()
  }

}
