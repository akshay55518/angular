import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplepipe'
})
export class SamplepipePipe implements PipeTransform {

  transform(n:string): string {
    return 'employee name is:'+n;
  }

}
