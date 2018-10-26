import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import{HttpClientModule}from '@angular/common/http'
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { TicketBookingModule } from './ticket-booking/ticket-booking.module';
import { TicketformService } from './core/ticketform.service';
import { FakeBackendService } from './fakeBackend.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CoreModule,
    HttpClientInMemoryWebApiModule.forRoot(FakeBackendService),
    
      HttpClientModule,TicketBookingModule

  ],
  providers: [TicketformService,FakeBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
