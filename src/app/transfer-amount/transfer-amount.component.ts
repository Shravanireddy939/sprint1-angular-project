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

  transferamount() {
    this.customerservice.transferAmount(this.acc_id,this.acc_id2,this.amount)
    .subscribe(response =>{
      this.result = response;
    });

    this.router.navigate(['tranfer-amount']);
  }

}