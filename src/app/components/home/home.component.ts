import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Books:any[] = []
  categorias = [
    {value: "mcgraw", name: "Literarios"},
    {value: "pear", name: "Didacticos"},
    {value: "alfa", name: "Cientificos"},
    {value: "anaya", name: "Tecnicos"},
    {value: "and", name: "Biograficos"},
  ]
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listarLibros();
  }

  listarLibros(){
    this.bookService.getBooks().subscribe({
      next: (res:any) => {
        res.forEach((el:any) => {
          console.log(el.payload.doc.data())
          this.Books.push(el.payload.doc.data())
        })
      },
      error: e => {
        console.log(e)
      }
    })
  }

  getCategory(category:string){
    const cat = this.categorias.find(el => el.value == category)
    return cat ? cat.name : ""
  }

}
