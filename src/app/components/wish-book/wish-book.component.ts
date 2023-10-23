import { Component, OnInit } from '@angular/core';
import { wishService } from 'src/app/services/wish.service';

@Component({
  selector: 'app-wish-book',
  templateUrl: './wish-book.component.html',
  styleUrls: ['./wish-book.component.scss']
})
export class WishBookComponent implements OnInit {
  wish:any[] = []
  categorias = [
    {value: "mcgraw", name: "Literarios"},
    {value: "pear", name: "Didacticos"},
    {value: "alfa", name: "Cientificos"},
    {value: "anaya", name: "Tecnicos"},
    {value: "and", name: "Biograficos"},
  ]
  constructor(private wishService: wishService) { }

  ngOnInit(): void {
    this.listarLibros();
  }

  listarLibros(){
    this.wishService.getWish().subscribe({
      next: (res:any) => {
        res.forEach((el:any) => {
          console.log(el.payload.doc.data())
          this.wish.push(el.payload.doc.data())
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
