import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Pipe, PipeTransform } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { RouteRoutingModule } from "./route/route-routing.module";
import { searchstudentPipe } from './pipe/searchstudent.pipe';
import { PocDbService } from "./pocDB/poc-db.service";


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    searchstudentPipe
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    HttpClientModule,
    RouterModule,
    HttpModule,
    FormsModule
  ],
  providers: [PocDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
