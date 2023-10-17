import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookRegisterComponent } from './components/book-register/book-register.component';
import { AutoresComponent } from './components/autores/autores.component';
import { AutoresRegisterComponent } from './components/autores-register/autores-register.component';
import { WishBookComponent } from './components/wish-book/wish-book.component';
import { WishBookRegisterComponent } from './components/wish-book-register/wish-book-register.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, 
    resolve: {}
  },
  {
    path: 'bookRegister', component: BookRegisterComponent, 
    resolve: {}
  },
  {
    path: 'wishbook', component: WishBookComponent, 
    resolve: {}
  },
  {
    path: 'wishbookregister', component: WishBookRegisterComponent, 
    resolve: {}
  },
  {
    path: 'autores', component: AutoresComponent, 
    resolve: {}
  },
  {
    path: 'autoresRegister', component: AutoresRegisterComponent, 
    resolve: {}
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
