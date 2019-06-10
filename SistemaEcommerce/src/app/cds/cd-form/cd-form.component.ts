import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

import { Subscription } from 'rxjs/Subscription'
import { CdsService } from '../cds.service'
import { Cd } from '../cd'

@Component({
  selector: 'app-cd-form',
  templateUrl: './cd-form.component.html',
  styleUrls: ['./cd-form.component.css']
})
export class CdFormComponent implements OnInit {

  private cdIndex: number
  private isNew: boolean = true
  private cd: Cd
  private subscription: Subscription

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cdService: CdsService) { }

  ngOnInit() {
    this.novo()
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.isNew = false
          this.cdIndex = params['id']
          this.cdService.get(this.cdIndex)
            .subscribe(data => this.cd = data)
        } else {
          this.isNew = true
        }
      }
    )
  }

  novo() {
    this.cd = new Cd()
  }

  cancelar() {
    this.voltar()
  }

  voltar() {
    this.router.navigate(['/cds'])
  }

  salvar() {
    let result
    if (this.isNew) {
      result = this.cdService.add(this.cd)
    } else {
      result = this.cdService.update(this.cd)
    }
    result.subscribe(data => alert('Sucesso '+ data), 
    null
    // err => { alert('An error occurred '+ err)}
    )
    this.novo()
    this.voltar()
  }

  excluir() {
    if (this.cd.codigo == null) {
      alert('Selecione algum cd')
    } else {
      if (confirm('Você realmente quer excluir o cd ' + this.cd.album + '?')) {
        this.cdService.remove(this.cd.codigo)
          .subscribe(data => this.novo, err => { alert('Cd não removido')
        })
        this.novo()
        this.voltar()
      }      
    }
  }

}
