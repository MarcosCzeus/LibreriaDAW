import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookRegisterComponent } from './components/book-register/book-register.component';
import { AutoresComponent } from './components/autores/autores.component';
import { AutoresRegisterComponent } from './components/autores-register/autores-register.component';
import { WishBookComponent } from './components/wish-book/wish-book.component';
import { WishBookRegisterComponent } from './components/wish-book-register/wish-book-register.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import{ canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, 
    resolve: {}
  },
  {
    path: 'bookRegister', component: BookRegisterComponent, ...canActivate (()=> redirectUnauthorizedTo(['/login'])),
    resolve: {}
  },
  {
    path: 'wishbook', component: WishBookComponent, ...canActivate (()=> redirectUnauthorizedTo(['/login'])),
    resolve: {}
  },
  {
    path: 'wishbookregister', component: WishBookRegisterComponent, ...canActivate (()=> redirectUnauthorizedTo(['/login'])),
    resolve: {}
  },
  {
    path: 'autores', component: AutoresComponent, ...canActivate (()=> redirectUnauthorizedTo(['/login'])),
    resolve: {}
  },
  {
    path: 'autoresRegister', component: AutoresRegisterComponent, ...canActivate (()=> redirectUnauthorizedTo(['/login'])),
    resolve: {}
  },
  {
    path: 'home', component: HomeComponent, ...canActivate (()=> redirectUnauthorizedTo(['/login'])),
    resolve: {}
  },
  {
    path: 'register', component: RegisterComponent, 
    resolve: {}
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
