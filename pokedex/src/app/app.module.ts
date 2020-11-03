import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import {CommonService} from './commonservice';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {GridViewModule} from './grid-view/grid-view.module';
import { ListViewModule } from './list-view/list-view.module';
import { ViewDetailsComponent } from './view-details/view-details.component'; 
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ViewDetailsComponent,
    // GridViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    GridViewModule,
    ListViewModule,AppRoutingModule

  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
