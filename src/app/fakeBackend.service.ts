import {InMemoryDbService} from 'angular-in-memory-web-api';

export class FakeBackendService implements InMemoryDbService{
 
    createDb():object{
        const ticketbooking=[
            {id:1,from:'mumbai',to:'delhi',date:6/7/2019,trainNum:45678,noOfTickets:4,type:'AC'},
            {id:2,from:'mumbai',to:'jaipur',date:7/7/2019,trainNum:34765,noOfTickets:4,type:'AC'},
        ];

        return {ticketbooking};
        
    }
}