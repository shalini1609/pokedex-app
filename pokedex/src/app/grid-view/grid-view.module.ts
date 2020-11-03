import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { GridViewComponent } from '../grid-view/grid-view.component';
import {CommonService} from '../commonservice';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    GridViewComponent
  ],  exports:[GridViewComponent],

 
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [CommonService,CookieService]
})
export class GridViewModule { }
