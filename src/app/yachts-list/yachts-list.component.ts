import { Component, inject } from '@angular/core';
import { BaseService } from '../base.service';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-yachts-list',
  templateUrl: './yachts-list.component.html',
  styleUrl: './yachts-list.component.css'
})
export class YachtsListComponent {
  yacths:any
  calendar = inject(NgbCalendar);

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate = this.calendar.getNext(this.calendar.getToday(),'d',1);
	toDate: NgbDate | null = this.calendar.getNext(this.fromDate, 'd', 3);

  searchField=""
  lehetosegeg=[
    {text:"Nincs", key:""},
    {text:"Név", key:"name"},
    {text:"Gyártó", key:"builder"},
    {text:"Ár", key:"daily_price"},
    {text:"Foglalo", key:"deposit"},
  ]

  error=0
  errorMessage=""


  constructor(private base:BaseService){
    this.base.getYacts().subscribe(
      (res)=>this.yacths=res
    )
  }

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}
  ngbDateToString(ngbDate:NgbDateStruct){
    const year = ngbDate.year;
    const month = String(ngbDate.month).padStart(2,'0')
    const day = String(ngbDate.day).padStart(2,'0')
    const s= `${year}-${month}-${day}`
    console.log(s)
    return s;
  }



  foglalas(yacth:any){
    const body = Object.assign({},yacth)

    console.log(body)
    delete body.image
    
    const body2 = {
      yacthId:String(yacth.id), 
      deposit:yacth.deposit, 
      daily_price:yacth.daily_price, 
      uid:"Attila",
      startDate: this.ngbDateToString(this.fromDate),
      endDate: this.toDate?this.ngbDateToString(this.toDate):this.ngbDateToString(this.fromDate),
      yacthName: yacth.name
    }
    this.base.postYact(body2).subscribe(
      {
        "next":()=>{ this.error=1},
        "error":(err:any)=>{ 
          this.error=-1
          this.errorMessage=err.error
        }
      }
    )
  }

}
