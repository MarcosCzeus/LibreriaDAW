import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoLibros } from '../models/libros';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-register',
  templateUrl: './book-register.component.html',
  styleUrls: ['./book-register.component.scss']
})
export class BookRegisterComponent implements OnInit {

  forms: FormGroup;
  constructor(private fb: FormBuilder,
    private bookService:BookService
  ) {
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
    alert("me llama")
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
