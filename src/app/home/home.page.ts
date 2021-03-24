import { Component } from '@angular/core';
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;


@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {
    
  }
  image;

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 2,
  };

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

 
}
