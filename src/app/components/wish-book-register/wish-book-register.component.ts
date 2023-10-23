import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../models/libros';
import { wishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-wish-book-register',
  templateUrl: './wish-book-register.component.html',
  styleUrls: ['./wish-book-register.component.scss']
})
export class WishBookRegisterComponent implements OnInit {
  libros:Libro[] = []
  forms: FormGroup;
  
  constructor(private fb: FormBuilder,
    private wishService:wishService
  ) {
    this.forms = this.fb.group({
      id:['', Validators.required],
      titulo: ['', Validators.required],
      nombre: ['', Validators.required],
      Precio: ['', Validators.required],
      Categoria: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  guardarLibros(){
    console.log(this.forms.getRawValue());
    const Deseos = this.forms.getRawValue();
    this.wishService.saveBook(Deseos).then(r => {
      console.log(r);
    })
    .catch(e => {
      console.log(e)
    })
    console.log(Deseos);
  }
}
