import { Component, OnInit } from '@angular/core';
import { TicketformService } from '../core/ticketform.service';
import { structure } from '../structure.model';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  bookTicket:structure[];
  constructor(private ticketFormService:TicketformService) { }

  
 
  ngOnInit() {

    this.ticketFormService.getdata().subscribe(
      data => this.bookTicket = data
    )

  
  }

}
