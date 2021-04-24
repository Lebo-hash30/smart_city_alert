import { Component, OnInit } from '@angular/core';
import {ProblemsService} from '../problems.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-facility-booking',
  templateUrl: './facility-booking.page.html',
  styleUrls: ['./facility-booking.page.scss'],
})
export class FacilityBookingPage implements OnInit {
  facilities:any
  constructor(public data:ProblemsService,private router: Router) {
    this.data.getFacilities().then((items:any)=>{
     this.facilities =items;
     console.log(this.facilities)
    })
   }

  ngOnInit() {
  }

  viewMore(facility){
    this.router.navigateByUrl('/bookings', {state:facility})
  }
}
