import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  
  // transform(value: any, ...args: any[]): any {
  //   let custompipe=value - (value* .10);
  //   if(args.find(x=>x=="pf"))
  //   {
  //     custompipe=custompipe-(custompipe*0.028);
  //   }
  //   return custompipe;

  transform(value: any, ... args: any[]) {
    let salary:number = value- (value * .10);       

    return salary;

  }



}
