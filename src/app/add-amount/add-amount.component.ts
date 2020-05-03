import { Component, OnInit } from '@angular/core';
import { WalletAccount, CustomerServiceService, WalletTransactions, WalletUser} from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-amount',
  templateUrl: './add-amount.component.html',
  styleUrls: ['./add-amount.component.css']
})
export class AddAmountComponent implements OnInit {
  
  WalletTransactions:WalletTransactions[];
  walletaccount:WalletAccount= { accountId: 0, accountBalance: 0, status: "",
  'WalletUser': { userId: 0, userName: "", password: "", phoneNumber: 0, loginName:""},
  'WalletTransactions' :[{ transactionId: 0, description:"", dateOfTransaction:"", amount:0 , accountBalance: 0 }]  
};


accountNo: number;
    
       accBal:number;
   
       result: any;

  constructor(private customerservice: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addAmount():void{
    this.customerservice.addAmount(this.accountNo,this.accBal)
        .subscribe(response => {
          this.result = response,
          alert("Amount Added Successfully");
        });
           this.router.navigate(['add-amount']);
}
}