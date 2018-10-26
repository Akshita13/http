import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ TicketformService}from './ticketform.service';
import { providerDef } from '@angular/core/src/view';
import { structure } from '../structure.model';
import { TicketFormModule } from '../ticket-form/ticket-form.module';
@NgModule({
  imports: [
    CommonModule,TicketFormModule
  ],
  declarations: [],
  providers:[TicketformService],
  exports:[TicketFormModule]
})
export class CoreModule { }
