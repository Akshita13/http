import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { structure } from '../structure.model';
import { TicketformService } from '../core/ticketform.service';


@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  submitted = false;
  public form: structure;
  public fromstation: any[];
  public tostation: any[];
  public no_of_tickets: any[];
  public type: any[];
 
  public bookticket: any[] = [];


  TicketForm = this.fb.group({
    from: ['', Validators.required],
    to: ['', Validators.required],
    date: [''],
    train_no: ['', Validators.required],
    no_of_tickets: ['', Validators.required],
    type: ['', Validators.required]


  });
  constructor(private fb: FormBuilder, private ticketservice: TicketformService) {
    
  }

  ngOnInit() {
    this.form = {
      from: null,
      to: null,
      date: null,
      train_no: null,
      no_of_tickets: null,
      type: null
    };

    this.fromstation = this.ticketservice.getfromdata();
    this.tostation = this.ticketservice.gettodata();
    this.no_of_tickets = this.ticketservice.getticketsdata();
    this.type = this.ticketservice.getclassdata();
  }



  onSubmit(addticketsofbooking) {
    console.log(addticketsofbooking);

    this.ticketservice.adddata(addticketsofbooking)
      .subscribe(ticket => {
        this.bookticket.push(ticket)
        this.submitted = true;
      });
      
    
  }
}
