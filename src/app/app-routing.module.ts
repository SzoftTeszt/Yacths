import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YachtsListComponent } from './yachts-list/yachts-list.component';
import { RentlistComponent } from './rentlist/rentlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"yachts",component:YachtsListComponent},
  {path:"rents",component:RentlistComponent},
  {path:"",component:HomeComponent},
  {path:"**",component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
