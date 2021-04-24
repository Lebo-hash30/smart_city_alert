import { Component, OnInit } from "@angular/core";
import { ProblemsService } from "../problems.service";

import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';
@Component({
  selector: "app-forms",
  templateUrl: "./forms.page.html",
  styleUrls: ["./forms.page.scss"],
})
export class FormsPage implements OnInit {
  name;
  email;
  dateS;
  dateE;
  cell;
  number;
  description;

  constructor(
    public firebase: ProblemsService,
    public alertController: AlertController,
    public router:Router
  ) {}

  ngOnInit() {}

  makeBookings() {
   
    this.firebase
      .makeBookings(
        this.name,
        this.email,
        this.cell,
        this.dateS,
        this.number,
        this.description
      )
      .then(() => {
       
      })
      .then(() => {
        this.presentAlert("Booked successfully");
        this.router.navigateByUrl('/home')
        
      });
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Bookings",
      subHeader: "Booking facility",
      message: message,
    });
    await alert.present();
  }


  
}
