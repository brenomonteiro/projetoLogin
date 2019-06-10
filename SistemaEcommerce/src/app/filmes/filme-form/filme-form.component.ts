import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

import { Subscription } from 'rxjs/Subscription'
import { FilmesService } from '../filmes.service'
import { Filme } from '../filme'

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

  private filmeIndex: number
  private isNew: boolean = true
  private filme: Filme
  private subscription: Subscription

  constructor(private route: ActivatedRoute,
              private router: Router,
              private filmeService: FilmesService) { }

  ngOnInit() {
    this.novo()
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false
          this.filmeIndex = params['id']
          this.filmeService.get(this.filmeIndex)
            .subscribe(data => this.filme = data)
        } else {
          this.isNew = true
        }
      }
    )
  }

  novo() {
    this.filme = new Filme()
  }

  cancelar() {
    this.voltar()
  }

  voltar() {
    this.router.navigate(['/filmes'])
  }

  salvar() {
    let result
    if (this.isNew) {
      result = this.filmeService.add(this.filme)
    } else {
      result = this.filmeService.update(this.filme)
    }
    result.subscribe(data => alert('Sucesso '+ data), 
    null
    // err => { alert('An error occurred '+ err)}
    )
    this.novo()
    this.voltar()
  }

  excluir() {
    if (this.filme.codigo == null) {
      alert('Selecione algum filme')
    } else {
      if (confirm('Você realmente quer excluir o filme ' + this.filme.nome + '?')) {
        this.filmeService.remove(this.filme.codigo)
          .subscribe(data => this.novo, err => { alert('Filme não removido')
        })
        this.novo()
        this.voltar()
      }      
    }
  }

}
