import { Component, OnInit } from '@angular/core';
import { Apps } from 'src/app/models/apps';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-special-apps',
  templateUrl: './special-apps.component.html',
  styleUrls: ['./special-apps.component.scss']
})
export class SpecialAppsComponent implements OnInit {
apps:Apps[]=[]
  constructor(private appServ: DataService) { }

  ngOnInit(): void {
    this.apps=this.appServ.showApps();
  }

}
