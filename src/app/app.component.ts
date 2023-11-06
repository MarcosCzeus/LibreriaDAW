import { Component } from '@angular/core';
import { UserService } from './services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App_libros';

  constructor(private router: Router,
    private userService:UserService){}
    
  logOut(){
    this.userService.logout()
    .then(() => {
      this.router.navigate(['/register']);
    })
    .catch(error => console.log(error));
  }
}
