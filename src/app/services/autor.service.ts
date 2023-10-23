import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class autorService {

  constructor(private firebase:AngularFirestore) { }

  saveAutor(autor:any):Promise<any>{
    return this.firebase.collection('Autor').add(autor);
  }

  getAutor(){
    return this.firebase.collection('Autor').snapshotChanges();
  }
}
