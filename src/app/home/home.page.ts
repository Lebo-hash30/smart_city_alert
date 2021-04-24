import { Component } from '@angular/core';
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;

import {ProblemsService} from '../problems.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  facilities:any;
  issues:any;
  constructor(public data:ProblemsService, public router :Router) {
    this.data.getFacilities().then((items:any)=>{
      this.facilities =items;
      console.log(items);
    }) 
    
    
    this.getIssues()
  }
  
  image;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
  };

  slideServices ={
    initialSlide: 0,
    slidesPerView: 3,
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.image = imageUrl;
  }
  viewcase(issues){
    this.router.navigateByUrl('/viewcase', {state:issues})
  }
  viewMore(facility){
    this.router.navigateByUrl('/bookings', {state:facility})
  }

  getIssues(){
    this.data.getProblem().then((items)=>{
      this.issues=items;
      console.log(this.issues)

    })
  }
}
