import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketBookingComponent } from './ticket-booking.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TicketBookingComponent],
  exports:[TicketBookingComponent]
})
export class TicketBookingModule { }
