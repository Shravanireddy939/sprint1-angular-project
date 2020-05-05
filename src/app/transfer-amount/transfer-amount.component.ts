import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletAccount, WalletUser, WalletTransactions } from '../customer-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transfer-amount',
  templateUrl: './transfer-amount.component.html',
  styleUrls: ['./transfer-amount.component.css']
})
export class TransferAmountComponent implements OnInit {

  acc_id: number;

  acc_id2:number;
    
    amount:number;

    result:any;



  constructor(private customerservice: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  transferamount() :void{
    this.customerservice.transferAmount(this.amount,this.acc_id,this.acc_id2)
    .subscribe(response =>{
      if(response!=null)
      // this.result = response;
       alert("Amount Transfered Successfully");
       else
       alert("Not transfered");
    });

    this.router.navigate(['transfer-amount']);
  }

}