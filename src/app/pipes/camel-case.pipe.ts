import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  public transform(input:string,args:any): any {
    if (!input) {
      return '';
  } else {
    
    if(args=='withoutspace')
    {
      return input.split(" ").map(data=>{return data.charAt(0).toUpperCase()+data.slice(1);}).join("");
    }
    if(args=='_'){
      return input.split("_").map(data=>{return data.charAt(0).toUpperCase()+data.slice(1);}).join("");
    }
    if(args=='-'){
      return input.split("-").map(data=>{return data.charAt(0).toUpperCase()+data.slice(1);}).join("");
    }
    else{
      return input.split(" ").map(data=>{return data.charAt(0).toUpperCase()+data.slice(1);}).join(" ");
    }
  }
  }

}
