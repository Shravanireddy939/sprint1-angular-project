import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from '../customer-service.service';

@Component({
  selector: 'app-show-transactions',
  templateUrl: './show-transactions.component.html',
  styleUrls: ['./show-transactions.component.css']
})
export class ShowTransactionsComponent implements OnInit {

  data: any;
    constructor(private customerservice: CustomerServiceService, private routing:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //retriving userdata from login page 
    let user=this.routing.snapshot.paramMap.get('userId');
let userId=Number(user); /** snapshot returns string */
    console.log(userId);
     this.customerservice.transactionHistory(userId)
     .subscribe(response => this.handleSuccessfulResponse(response),
     );
   }
   handleSuccessfulResponse(response) {
          this.data = response;
          console.log(this.data)
        

   }


  }

