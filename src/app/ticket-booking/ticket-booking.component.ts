import { Component, OnInit } from '@angular/core';
import { TicketformService } from '../core/ticketform.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  bookTicket:any[];
  constructor(private ticketFormService: TicketformService) { }



  ngOnInit() {
    
  }
  getdata(){
    this.ticketFormService.getdata().subscribe(
      data => this.bookTicket = data
    )
  }

 


 
 
  

}
