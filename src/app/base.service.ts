import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  api="https://heroauth-97aa7-default-rtdb.europe-west1.firebasedatabase.app/hajok.json"
  constructor(private http:HttpClient) { }

  getYacts(){
    return this.http.get("https://p161-7ddfd-default-rtdb.europe-west1.firebasedatabase.app/yachts.json")
  }

  postYact(body:any){
    this.http.post(this.api, body).subscribe(
      (res)=>console.log("Sikeres mentés -", res)
    )
  }
}
