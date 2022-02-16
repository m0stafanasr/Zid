import { Injectable } from '@angular/core';
import { Apps } from '../models/apps';
@Injectable({
  providedIn: 'root'
})
export class DataService {
apps: Apps[]=[];
img:string=""
  constructor() { 
    this.img="assets/zid-logo 1.png";
    this.apps=[{id:1, logo:'assets/bbaa6fd3-1070-4a1b-90c3-68c808870b261.png', title:"قمرة", rate:5, developer: "مصطفي نصر", description:'نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك' },
    {id:1, logo:'assets/bbaa6fd3-1070-4a1b-90c3-68c808870b261.png', title:"قمرة", rate:5, developer: "مصطفي نصر", description:'نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك' },
    {id:1, logo:'assets/bbaa6fd3-1070-4a1b-90c3-68c808870b261.png', title:"قمرة", rate:5, developer: "مصطفي نصر", description:'نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك' },
    {id:1, logo:'assets/bbaa6fd3-1070-4a1b-90c3-68c808870b261.png', title:"قمرة", rate:5, developer: "مصطفي نصر", description:'نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك' },
    ]
  }

  showApps():Apps[]{
    return this.apps
  }
  showImage(){
    return this.img;
  }
}
