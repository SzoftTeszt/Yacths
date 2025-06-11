import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { YachtsListComponent } from './yachts-list/yachts-list.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentlistComponent } from './rentlist/rentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    YachtsListComponent,
    HomeComponent,
    SearchPipe,
    SortPipe,
    RentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
