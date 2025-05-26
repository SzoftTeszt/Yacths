import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-yachts-list',
  templateUrl: './yachts-list.component.html',
  styleUrl: './yachts-list.component.css'
})
export class YachtsListComponent {
  yacths:any
  constructor(private base:BaseService){
    this.base.getYacts().subscribe(
      (res)=>this.yacths=res
    )
  }

  foglalas(yacth:any){
    const body = Object.assign({},yacth)
    console.log(body)
    delete body.image
    
    const body2 = {yacthId:yacth.id, deposit:yacth.deposit, daily_price:yacth.daily_price, uid:"Attila"}
    this.base.postYact(body2)
  }

}
