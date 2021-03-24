import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType } from "@capacitor/core";
import { ProblemsService} from  "../problems.service"
const { Camera } = Plugins;
const {Geolocation} =Plugins;



import { Router } from "@angular/router";

@Component({
  selector: "app-report",
  templateUrl: "./report.page.html",
  styleUrls: ["./report.page.scss"],
})
export class ReportPage implements OnInit {
  problems: boolean = true;
  duration: boolean = false;
  severity_problem: boolean = false;
  comment: boolean = false;
  image;

  email;
  password ;

  issue;
  timeIssue;
  serevityIssue;
  lat;
  long
  description;

  constructor(
    public firebase:ProblemsService,
 
  public router: Router
  
  
  ) {

    this.getCurrentPosition();
  }


  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
   

    this.lat = coordinates.coords.latitude;
    this.long = coordinates.coords.longitude
    console.log(this.lat , this.long);
  }
  ngOnInit() {}

  services(issue) {
    this.problems = false;
    this.duration = true;
    this.issue =issue 
  }

  duration_answer(answer) {
    this.duration = false;
    this.severity_problem = true;
    this.timeIssue=answer
  }

  severe(answer) {
    this.severity_problem = false;
    this.comment = true;
    this.serevityIssue =answer;
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

  submitReport(){
    console.log(this.issue , this.timeIssue ,this.serevityIssue,this.description,this.image,this.lat, this.long)
    this.firebase.reportProblems(this.issue , this.timeIssue ,this.serevityIssue,this.description,this.lat, this.long).then(()=>{

     })
  }

}
