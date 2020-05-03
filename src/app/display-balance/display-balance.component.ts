import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletAccount, WalletUser, WalletTransactions } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-balance',
  templateUrl: './display-balance.component.html',
  styleUrls: ['./display-balance.component.css']
})
export class DisplayBalanceComponent implements OnInit {
  
  WalletTransactions:WalletTransactions[];
  walletaccount:WalletAccount= { accountId: 0, accountBalance: 0, status: "",
  'WalletUser': { userId: 0, userName: "", password: "", phoneNumber: 0, loginName:""},
  'WalletTransactions' :[{ transactionId: 0, description:"", dateOfTransaction:"", amount:0 , accountBalance: 0 }]  
};

       
       accountNo: number;
    
       amount:number;
   
       result:any;
  constructor(private customerservice: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
    
    }
fetch():void{
console.log(this.accountNo);
    this.customerservice.displayBalance(this.accountNo)
        .subscribe(response =>{
          this.result = response;
        });
            this.router.navigate(['display-balance']);
}}