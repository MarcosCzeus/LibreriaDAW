import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { UserService } from 'src/app/services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formReg: FormGroup;

  constructor( 
    private userService: UserService,
    private router: Router) {
    this.formReg = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formReg.valid) {
      this.userService.register(this.formReg.value)
        .then(response => {
          console.log(response);
          this.router.navigate(['/login'])
        })
        .catch(error => console.log(error));
    }
  }
  

}
