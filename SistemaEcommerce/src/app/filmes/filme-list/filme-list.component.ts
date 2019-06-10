import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme'
import { FilmesService } from '../filmes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  constructor(private filmeService: FilmesService) { }

  filmes: Filme[] = []

  ngOnInit() {
    this.filmeService.getAll()
      .subscribe(data => this.filmes = data, err => {
        alert('Aconteceu um erro!')
      })

    this.filmeService.filmesChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.filmes = data
      )
    )
    // this.filmes = [{
    //   'codigo': 1,
    //   'nome': 'Loucademia de Policia',
    //   'genero': 'Comédia',
    //   'ano': '1900 e bolinha'
    // }, {
    //   'codigo': 2,
    //   'nome': 'Loucademia de Policia 2',
    //   'genero': 'Comédia',
    //   'ano': '1900 e bolinha +1'
    // }]
  }

}
