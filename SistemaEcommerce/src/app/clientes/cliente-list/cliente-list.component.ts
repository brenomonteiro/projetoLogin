import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente'
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }

  clientes: Cliente[] = []

  ngOnInit() {
    this.clienteService.getAll()
      .subscribe(data => this.clientes = data,
        err => alert('Aconteceu um erro!'))
    this.clienteService.clientesChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.clientes = data
      )
    )

    // this.clientes = [{
    //   'codigo': 1,
    //   'nome': 'Jão',
    //   'cargo': 'Ceo',
    //   'endereco': 'Rua sem fim'
    // },{
    //   'codigo': 2,
    //   'nome': 'Jãozinho',
    //   'cargo': 'Ceo JR',
    //   'endereco': 'Rua sem fim'
    // }]

  }

}
