import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private firebase:AngularFirestore) { }

  saveBook(book:any):Promise<any>{
    return this.firebase.collection('Libros').add(book);
  }
}
