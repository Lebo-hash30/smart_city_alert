import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
declare var google;

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

 

  constructor(
    public firestore: AngularFirestore, // firestore
    public loadingController: LoadingController
    
  ) { }

  reportProblems(type, duration,severe, comment,lat,lng, status, picture ) {
    let id = this.firestore.createId()
    return new Promise((res, rej)=>{
      this.firestore.collection("DashProblems").doc(id).set({
        problemType:type,
        duration:duration,
        severity:severe,
        comment:comment,
       picture:picture,
        lat:lat,
        lng:lng,
        status:status
      }).then(()=>{
        res('')
       
      }).catch((error)=>{

      })
    })

  }


  getProblem(){
   return new Promise((res, rej)=>{
     this.firestore.collection("DashProblems").valueChanges().subscribe((items)=>{
      this.presentLoading();
       res(items)
     })

   }) 
  }



  getFacilities(){
    return new Promise((res, rej)=>{
      this.firestore.collection("addFacility").valueChanges().subscribe((items)=>{
        res(items)
      })
 
    }) 
   }


   getannoucements(){
    return new Promise((res, rej)=>{
      this.firestore.collection("Announcements").valueChanges().subscribe((items)=>{
        res(items)
      })
 
    }) 
   }



   makeBookings(name, email,cell, date, people, description  ) {
       let id = this.firestore.createId()
    return new Promise((res, rej)=>{
      this.firestore.collection("Bookings").doc(id).set({
        
        name:name,
        email,
        date:date,
        people,
        description,
        cell:cell
       
      }).then(()=>{
        res('')

      }).catch((error)=>{
        rej(error)

      })
    })

  }


  getLocation() {
    //-28.74378920728236, 24.765178509039064
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var geocoder = new google.maps.Geocoder;
        var latlng = { lat:-28.74378920728236, lng:24.765178509039064};
        geocoder.geocode({ 'location': latlng }, function (results, status) {
          var address = results[0].address_components[3].short_name;
           console.log(address);
          console.log(results[0]);
          resolve(address)
        }, 8000);

      })


    })
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  
  
}

