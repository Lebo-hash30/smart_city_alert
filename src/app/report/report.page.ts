import { Component, OnInit, NgZone } from "@angular/core";
import { Plugins, CameraResultType } from "@capacitor/core";
import { ProblemsService } from "../problems.service";
import { AlertController } from '@ionic/angular';
const { Camera } = Plugins;
const { Geolocation } = Plugins;

declare var google;
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
  password;

  issue;
  timeIssue;
  serevityIssue;

  description;

  // maps map: any;
  address: string;
  lat: any;
  long: any;
  
  progressBarIndicator = 0;

  picurees = [
    { type:"Water pipe burst", image:"../../assets/download.jpeg"},
    {type:"Electrical issues", image:".././assets/download (1).jpeg"},
    {type:"Sewerage", image:".././assets/1200x600.sewage.webp"},
    {type:"Potholes", image:".././assets/depositphotos_43943863-stock-photo-pothole.jpg"},
    {type:"Illegal dumping", image:".././assets/istockphoto-862189462-612x612.Dumping.jpg"},
   
  ]
  hideProgressBarIndicator:boolean =false;
  constructor(
    public firebase: ProblemsService,
    public zone: NgZone,
    public router: Router,
    public alertController: AlertController
  ) {
    this.getCurrentPosition()
    
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();

    this.lat = coordinates.coords.latitude;
    this.long = coordinates.coords.longitude;
    console.log(this.lat, this.long);

   
  }
  ngOnInit() {
    this.getCurrentPosition()
   this.firebase.getLocation()
  }

  services(issue) {
    this.problems = false;
    this.duration = true;
    this.issue = issue;
  }

  duration_answer(answer) {
    this.duration = false;
    this.severity_problem = true;
    this.timeIssue = answer;
  }

  severe(answer) {
    this.severity_problem = false;
    this.comment = true;
    this.serevityIssue = answer;
  }

  async takePicture() {
    this.hideProgressBarIndicator =true;
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
    console.log(this.image)
    this.progressBarIndicator=100;
  }

  submitReport() {

    this. pickImage()
    this.firebase
      .reportProblems(
        this.issue,
        this.timeIssue,
        this.serevityIssue,
        this.description,
        this.lat,
        this.long,
        "pending",
        this.image
      )
      .then(() => {
        this. presentAlert("Report case submitted successfuly")

      });
  }

  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Report case',
      message: message 
    });
    await alert.present();
    this.router.navigateByUrl('/home')
  }
  

  pickImage(){
    for (let index = 0; index < this.picurees.length; index++) {
        if(this.picurees[index].type == this.issue ){
          this.image=this.picurees[index].image
         break;
        }
        if(this.picurees[index].type == this.issue){
          this.image=this.picurees[index].image
          break;
        }

        if(this.picurees[index].type == this.issue){
          this.image=this.picurees[index].image
          break;
        }

        if(this.picurees[index].type == this.issue){
          this.image=this.picurees[index].image
         break;
        }

        if(this.picurees[index].type == this.issue){
          this.image=this.picurees[index].image
         break;
        }
      
    }

  }
    
}
