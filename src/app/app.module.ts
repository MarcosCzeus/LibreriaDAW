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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookRegisterComponent,
    AutoresComponent,
    AutoresRegisterComponent,
    WishBookComponent,
    WishBookRegisterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
