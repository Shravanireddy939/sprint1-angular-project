import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletUser} from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-balance',
  templateUrl: './display-balance.component.html',
  styleUrls: ['./display-balance.component.css']
})
export class DisplayBalanceComponent implements OnInit {
  
  
userId:WalletUser;
       accountNo: number;
    
       amount:number;
   
       result:any;
         error: boolean;
       data: any;
  constructor(private customerservice: CustomerServiceService, private routing:ActivatedRoute, private router: Router) { }

  ngOnInit(): void 
  { //retriving userdata from login page 
    let user=this.routing.snapshot.paramMap.get('userId');
let userId=Number(user); /** snapshot returns string */
    console.log(userId);
     this.customerservice.displayBalance(userId)
     .subscribe((response) =>{

       if(response!=null)
       { 
         this.result = response;
                  }
                         
               });

 this.router.navigate(['display-balance',userId]);
}

       }


  