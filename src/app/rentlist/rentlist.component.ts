import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-rentlist',
  templateUrl: './rentlist.component.html',
  styleUrl: './rentlist.component.css'
})
export class RentlistComponent {
  rents:any=[]




 constructor(private base:BaseService){
  this.base.getRents().subscribe(
    (res)=>this.rents=res
  )
 }


}
