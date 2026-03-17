import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullname',
  pure: true
})
export class FullnamePipe implements PipeTransform {
  transform(person: any): string {
    return person.name + ' ' + person.surname;
  }
}
