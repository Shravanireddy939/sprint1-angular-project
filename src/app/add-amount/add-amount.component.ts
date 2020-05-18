import { Component, OnInit } from '@angular/core';
import { CustomerServiceService} from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent implements OnInit {
  
accountNo: number;
    
       accBal:number;
   
       result: any;

  constructor(private customerservice: CustomerServiceService, private routing:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  addAmount():void{
   // retriving userdata from login page 
let user=this.routing.snapshot.paramMap.get('userId');
let userId=Number(user); /** snapshot returns string */
    console.log(userId);
    if(this.accBal==null||this.accBal==0)
{
  alert("Please enter the balance to add");
}   
else{
  this.customerservice.addAmount(userId,this.accBal)
    .subscribe(response => {
      if(response!=null)
        alert("Amount Added Successfully");
    });
           this.router.navigate(['add-amount',userId]);
  }
}
}




