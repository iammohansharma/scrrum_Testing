import { Component, OnInit } from '@angular/core';
 import { MokeserviceService } from 'src/app/services/mokeservice.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  appData:any;
  constructor( private mockser:MokeserviceService) { }

  ngOnInit() {
  this.getdata()

  }

 async getdata(){
   await this.mockser.getdata().subscribe( (data)=>{
      console.log("service data",data)
      this.appData = data
    } )
  }

}
