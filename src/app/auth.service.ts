import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";

import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email;
  pass;
  report;

  constructor(
       
  public auth: AngularFireAuth,
  public router: Router
  ) { }


  
  login(email , password){
    return new Promise((res, rej)=>{
      this.auth.signInWithEmailAndPassword(email, password).then(()=>{
        res("")

      }).catch((error)=>{

      })

    })

}
register(email, password){
  return new Promise((res, rej)=>{
    this.auth.createUserWithEmailAndPassword(email, password).then(()=>{
      res("")

    }).catch((error)=>{

    })

  })
}

forgorPassword(email){
  return new Promise((res, rej)=>{
    this.auth.sendPasswordResetEmail(email).then(()=>{
      res("")

    }).catch((error)=>{

    })

  }) 
}

}
