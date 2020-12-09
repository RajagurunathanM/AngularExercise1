import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'oddorEven'
})
export class OddorEvenPipe implements PipeTransform {

  transform(value: string, ...args: any): string {

    if(value.length > 0)
    {
      if(value.length % 2 ==0)
      {
        console.log('String Value Length Type is : Even');
        return 'Even';
      }
      else
      {
        console.log('String Value Length Type is : Odd');
        return 'Odd';
      }
    }
    else
    {
      console.log('String Value Length Type is : Empty String');
      return 'Empty String';
    }
    

  }

}