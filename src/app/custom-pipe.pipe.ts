import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value:string): unknown {
    return value.substr(0,3).toUpperCase()
  }

}
