import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoLibros } from '../models/libros';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.scss']
})
export class BookRegisterComponent implements OnInit {

  forms: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.forms = this.fb.group({
      titulo: ['', Validators.required],
      nombre: ['', Validators.required],
      Precio: ['', Validators.required],
      Categoria: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  listarLibros(){
    console.log(this.forms.getRawValue());
    const Libro: CatalogoLibros ={
      titulo: this.forms.value.titulo,
      idLibro: this.forms.value.idLibro,
      nombre: this.forms.value.nombre,
      Precio: this.forms.value.Precio,
      Categoria: this.forms.value.Categoria,
      img: this.forms.value.img,
    }
    console.log(Libro);
  }
}
