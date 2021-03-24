import { Component, OnInit } from '@angular/core';
import { ProblemsService} from  "../problems.service"

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.page.html',
  styleUrls: ['./announcements.page.scss'],
})
export class AnnouncementsPage implements OnInit {

  announcement : [];

  constructor(
    public firebase:ProblemsService,
  ) { }

  ngOnInit() {
  }

  makeBookings(){
    this.firebase.getannoucements().then((items:any)=>{
      this.announcement = items;
      
    })
  }    

}
