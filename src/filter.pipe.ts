import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    //console.log("userlist",value)
    return value.filter(function (search: { name: string | any[] }) {
      console.log("user data", search)
      return search.name.indexOf(searchTerm) > -1;
    });
  }
}