import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { autorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autores-register',
  templateUrl: './autores-register.component.html',
  styleUrls: ['./autores-register.component.scss']
})
export class AutoresRegisterComponent implements OnInit {
  forms: FormGroup;
  
  constructor(private fb: FormBuilder,
    private autorService:autorService
  ) {
    this.forms = this.fb.group({
      idAutor:['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nacio: ['', Validators.required],
      murio: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  guardarAutor(){
    console.log(this.forms.getRawValue());
    const autor = this.forms.getRawValue();
    this.autorService.saveAutor(autor).then(r => {
      console.log(r);
    })
    .catch(e => {
      console.log(e)
    })
    console.log(autor);
  }
}
