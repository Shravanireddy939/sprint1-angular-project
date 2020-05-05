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

  //WalletTransactions:WalletTransactions[]=new WalletTransactions( [(0)] ,[(""], [""], [0], [0]  );
  //walletaccount:WalletAccount= { accountId: 0, accountBalance: 0, status: "",
  //'WalletUser': { userId: 0, userName: "", password: "", phoneNumber: 0, loginName:""},
  //'WalletTransactions' :[{ transactionId: 0, description:"", dateOfTransaction:"", amount:0 , accountBalance: 0 }]  
//};

//user:WalletAccount = new WalletAccount(0, 0, "",this.walletaccount.WalletUser,this.walletaccount.WalletTransactions);

wallettransactions:WalletTransactions[];
walletuser :WalletUser= new WalletUser(0, "", "",  0, "");
  wallettransaction: WalletTransactions= new WalletTransactions(0, "", "",0, 0);
 

user:WalletAccount = new WalletAccount(0, 0, "",this.walletuser,this.wallettransactions);
response:any
  constructor(private customerservice: CustomerServiceService, private router: Router) { }
  ngOnInit(): void {
  }
  createAccount():void{
    console.log(this.user);
    this.customerservice.createAccount(this.user)
        .subscribe(data => {
          if(data!=null)
          {
           //this.response=data;
            alert("Account created successfully"); 
          }  
          else{
           alert("error");
           this.router.navigate(['create-account']);
              }
         } );
    }}