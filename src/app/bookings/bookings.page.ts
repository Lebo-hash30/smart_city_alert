import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  data:any
  constructor(public router: Router) { 
   
  }

  ngOnInit() {
    this.data =this.router.getCurrentNavigation().extras.state;
    console.log(this.data)

  }

}
