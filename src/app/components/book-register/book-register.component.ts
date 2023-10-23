import { Component, OnInit } from '@angular/core';
import { CatalogoLibros, Libro } from '../models/libros';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.scss']
})
export class BookRegisterComponent implements OnInit {
  libros:Libro[] = []
  forms: FormGroup;
  
  constructor(private fb: FormBuilder,
    private bookService:BookService
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
    const Libro = this.forms.getRawValue();
    this.bookService.saveBook(Libro).then(r => {
      console.log(r);
    })
    .catch(e => {
      console.log(e)
    })
    console.log(Libro);
  }
}
