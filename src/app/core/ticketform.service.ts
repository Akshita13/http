import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { structure } from '../structure.model';
import { Headers } from '@angular/http';
import { HttpResponse } from 'selenium-webdriver/http';
@Injectable()
export class TicketformService {

  private ticketURL = 'api/ticketbooking';  // URL to web api

    public fromstation: any[];
    public tostation: any[];
    public no_of_tickets: any[];
    public type: any[];


    constructor( private http: HttpClient) {

        this.fromstation = ["valsad","mumbai","delhi","pune"];
        this.tostation = ["kerala","ahmedabad","surat","asam","uttrakhand"];
        this.no_of_tickets=[1,2,3,4,5,6];
        this.type=["SL","AC","GEN"];
    }
    getfromdata() {
        return this.fromstation;
      }
      gettodata() {
        return this.tostation;
      }
      getticketsdata() {
        return this.no_of_tickets;
      }
      getclassdata() {
        return this.type;
      }

      getdata(): Observable<structure[]> {
        return this.http.get<structure[]>(this.ticketURL)
      }

      adddata(addticketsofbooking):Observable<structure[]>{
        console.log("service",addticketsofbooking);
        
        return this.http.post<structure[]>(this.ticketURL,addticketsofbooking)
      }




}

  




