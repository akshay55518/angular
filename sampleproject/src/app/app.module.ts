import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Day1Component } from './day1/day1.component';
import { Day2Component } from './day2/day2.component';
import { Day3Component } from './day3/day3.component';
import { FormsModule } from '@angular/forms';
import { Day4Component } from './day4/day4.component';
import { HomeComponent } from './home/home.component';
import { SamplepipePipe } from './samplepipe.pipe';
import { Day5Component } from './day5/day5.component';
import { Day6Component } from './day6/day6.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SenderComponent } from './sender/sender.component';
import { RecieverComponent } from './reciever/reciever.component'

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    Day2Component,
    Day3Component,
    Day4Component,
    HomeComponent,
    SamplepipePipe,
    Day5Component,
    Day6Component,
    SenderComponent,
    RecieverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

