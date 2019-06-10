import { Component, OnInit } from '@angular/core';
import { Cd } from '../cd'
import { CdsService } from '../cds.service';
@Component({
  selector: 'app-cd-list',
  templateUrl: './cd-list.component.html',
  styleUrls: ['./cd-list.component.css']
})
export class CdListComponent implements OnInit {

  constructor(private cdService: CdsService) { }

  cds: Cd[] = []

  ngOnInit() {
    this.cdService.getAll()
    .subscribe(data => this.cds = data, err => {
      alert('Aconteceu um erro!')
    })

    this.cdService.cdsChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.cds = data
      )
    )
    // this.cds = [{
    //   'codigo': 1,
    //   'artista': 'Raimundos',
    //   'album': 'Na Na Na',
    //   'ano': '2000'
    // }, {
    //   'codigo': 2,
    //   'artista': 'Raimundos',
    //   'album': 'Untitled',
    //   'ano': '2001'
    // }]
  }

}
