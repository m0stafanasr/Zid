import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  img:string="";
  constructor(private appserv: DataService) { }

  ngOnInit(): void {
   this.img=this.appserv.showImage()
  }

  top(){
    debugger
    window.scrollTo(0,0);
  }
}
