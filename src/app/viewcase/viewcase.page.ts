import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewcase',
  templateUrl: './viewcase.page.html',
  styleUrls: ['./viewcase.page.scss'],
})
export class ViewcasePage implements OnInit {
data:any
  constructor(public router:Router) { }

  ngOnInit() {
    this.data =this.router.getCurrentNavigation().extras.state;
    console.log(this.data)
  }

}
