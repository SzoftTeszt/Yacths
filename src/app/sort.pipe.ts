import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(yacths:any,mezo:any,irany:any): any {
    if (!yacths) return []
    if (!mezo || mezo=="") return yacths;
    return yacths.sort(
      (elso:any,masodik:any)=>{
        let a = elso[mezo]
        let b = masodik[mezo]
        
        if  (typeof a=='string')
          return irany=='asc'?
        a.localeCompare(b,'hu',{ sensitivity: "base" })
        :b.localeCompare(a,'hu',{ sensitivity: "base" })

        if (a<b) return irany=='asc'?-1:1
        if (a>b) return irany=='asc'?1:-1
        return 0;

      }
    )

    return null;
  }

}
