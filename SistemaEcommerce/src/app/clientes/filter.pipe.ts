import { Pipe, PipeTransform } from '@angular/core'
import { stringify } from 'querystring'

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(itens: any[], searchText: string):any[] {
        if (!itens) return []
        if (!searchText) return itens
        return itens.filter(it => {
            return Object.keys(it).some(k =>
                it[k].toString().toLowerCase()
                .includes(searchText.toLowerCase()))
        })
    }
}