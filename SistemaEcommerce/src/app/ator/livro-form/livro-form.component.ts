import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

import { Subscription } from 'rxjs/Subscription'
import { LivrosService } from '../livros.service'
import { Livro } from '../livro'

@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  private livroIndex: number
  private isNew: boolean = true
  private livro: Livro
  private subscription: Subscription

  constructor(private route: ActivatedRoute,
              private router: Router,
              private livroService: LivrosService) { }

  ngOnInit() {
    this.novo()
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false
          this.livroIndex = params['id']
          this.livroService.get(this.livroIndex)
            .subscribe(data => this.livro = data)
        } else {
          this.isNew = true
        }
      }
    )
  }

  novo() {
    this.livro = new Livro()
  }

  cancelar() {
    this.voltar()
  }

  voltar() {
    this.router.navigate(['/livros'])
  }

  salvar() {
    let result
    if (this.isNew) {
      result = this.livroService.add(this.livro)
    } else {
      result = this.livroService.update(this.livro)
    }
    result.subscribe(data => alert('Sucesso '+ data), 
    null
    // err => { alert('An error occurred '+ err)}
    )
    this.novo()
    this.voltar()
  }

  excluir() {
    if (this.livro.codigo == null) {
      alert('Selecione algum livro')
    } else {
      if (confirm('Você realmente quer excluir o livro ' + this.livro.obra + '?')) {
        this.livroService.remove(this.livro.codigo)
          .subscribe(data => this.novo, err => { alert('Livro não removido')
        })
        this.novo()
        this.voltar()
      }      
    }
  }

}
