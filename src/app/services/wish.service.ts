import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class wishService {

  constructor(private firebase:AngularFirestore) { }

  saveBook(wish:any):Promise<any>{
    return this.firebase.collection('Deseos').add(wish);
  }

  getWish(){
    return this.firebase.collection('Deseos').snapshotChanges();
  }
}