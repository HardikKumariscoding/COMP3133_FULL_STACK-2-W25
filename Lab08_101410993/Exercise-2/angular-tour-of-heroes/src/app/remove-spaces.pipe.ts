
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces', 
  standalone: true
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: string): string {
    if (typeof value !== 'string') return value; 
    return value.replace(/-/g, ' '); 
  }
}
