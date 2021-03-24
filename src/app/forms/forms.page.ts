import { Component, OnInit } from '@angular/core';
import { ProblemsService} from  "../problems.service"


@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
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
    public firebase:ProblemsService, 
  ) { }

  ngOnInit() {
  }


makeBookings(){
  
    console.log(this.name)
    console.log(this.email)
    console.log(this.cell )
    console.log(this.dateS)
    console.log(this.dateE)
    console.log(this.number)
    console.log(this.description)
    this.firebase.makeBookings(this.name,this.email, this.cell, this.dateS, this.number,this.description ).then(()=>{
      console.log("success")
    })
  
}





}
