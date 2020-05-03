import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletAccount, WalletUser, WalletTransactions } from '../customer-service.service';
import { Router } from '@angular/router';
//import {WalletAccount, WalletUser } from '../walletuser';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  WalletTransactions:WalletTransactions[];
  walletaccount:WalletAccount= { accountId: 0, accountBalance: 0, status: "",
  'WalletUser': { userId: 0, userName: "", password: "", phoneNumber: 0, loginName:""},
  'WalletTransactions' :[{ transactionId: 0, description:"", dateOfTransaction:"", amount:0 , accountBalance: 0 }]  
};

response:any
  constructor(private customerservice: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  createAccount():void{
    console.log(this.walletaccount);
    this.customerservice.createAccount(this.walletaccount)
        .subscribe(data => {
           this.response=data,
          alert("Account created successfully"); 
        });
           this.router.navigate(['create-account']);
  }
}