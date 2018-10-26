import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketFormComponent } from './ticket-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  declarations: [TicketFormComponent],
  exports:[TicketFormComponent]
})
export class TicketFormModule { }
