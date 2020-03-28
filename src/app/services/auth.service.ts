import { UserData } from './../models/user-data';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }


  register(user: UserData){
    return this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password);
  }

  login(user: UserData){
    return this.afauth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  logout(){
    return this.afauth.auth.signOut();
  }

  userAuthentificated(){
    return this.afauth.user;
  }

}


