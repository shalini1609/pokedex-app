import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { ListViewComponent } from '../list-view/list-view.component';
import {CommonService} from '../commonservice';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    ListViewComponent
  ], 
   exports:[ListViewComponent],

 
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [CommonService,CookieService]
})
export class ListViewModule { }
