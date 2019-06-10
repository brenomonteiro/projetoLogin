import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro'
import { LivrosService } from '../livros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livro-list',
  templateUrl: './livro-list.component.html',
  styleUrls: ['./livro-list.component.css']
})
export class LivroListComponent implements OnInit {

  constructor(private livroService: LivrosService) { }

  livros: Livro[] = []

  ngOnInit() {
    this.livroService.getAll()
      .subscribe(data => this.livros = data, err => {
        alert('Aconteceu um erro!')
      })

    this.livroService.livrosChanged.subscribe(
      (Observable: any) => Observable.subscribe(
        data => this.livros = data
      )
    )
    // this.livros = [{
    //   'codigo': 1,
    //   'obra': 'A arte de ligar o f*da-se',
    //   'autor': 'Mark',
    //   'genero': 'Fodastico',
    //   'isbn': '7854187'
    // }, {
    //   'codigo': 2,
    //   'obra': 'Pai Rico Pai Pobre',
    //   'autor': 'Robert',
    //   'genero': 'Fodastico',
    //   'isbn': '7854188'
    // }]
  }

}
