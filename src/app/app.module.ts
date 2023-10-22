import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookRegisterComponent } from './components/book-register/book-register.component';
import { AutoresComponent } from './components/autores/autores.component';
import { AutoresRegisterComponent } from './components/autores-register/autores-register.component';
import { WishBookComponent } from './components/wish-book/wish-book.component';
import { WishBookRegisterComponent } from './components/wish-book-register/wish-book-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookRegisterComponent,
    AutoresComponent,
    AutoresRegisterComponent,
    WishBookComponent,
    WishBookRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
