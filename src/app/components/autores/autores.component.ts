import { Component, OnInit } from '@angular/core';
import { autorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})
export class AutoresComponent implements OnInit {
  autor:any[] = []

  constructor(private autorService: autorService) { }

  ngOnInit(): void {
    this.listarAutor();
  }

  listarAutor(){
    this.autorService.getAutor().subscribe({
      next: (res:any) => {
        res.forEach((el:any) => {
          console.log(el.payload.doc.data())
          this.autor.push(el.payload.doc.data())
        })
      },
      error: e => {
        console.log(e)
      }
    })
  }

}
