import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  constructor(
    public firestore: AngularFirestore, // firestore
    
  ) { }

  reportProblems(type, duration,severe, comment,lat,lng ) {
    let id = this.firestore.createId()
    return new Promise((res, rej)=>{
      this.firestore.collection("DashProblems").doc(id).set({
        problemType:type,
        duration:duration,
        severity:severe,
        comment:comment,
      //  picture:picture,
        lat:lat,
        lng:lng
      }).then(()=>{

      }).catch((error)=>{

      })
    })

  }


  getProblem(){
   return new Promise((res, rej)=>{
     this.firestore.collection("").valueChanges().subscribe((items)=>{
       res(items)
     })

   }) 
  }



  getFacilities(){
    return new Promise((res, rej)=>{
      this.firestore.collection("").valueChanges().subscribe((items)=>{
        res(items)
      })
 
    }) 
   }


   getannoucements(){
    return new Promise((res, rej)=>{
      this.firestore.collection("DashProblem").valueChanges().subscribe((items)=>{
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

      }).catch((error)=>{

      })
    })

  }
}

