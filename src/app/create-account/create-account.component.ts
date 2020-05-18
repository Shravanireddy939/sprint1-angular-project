import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletAccount, WalletUser } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

 user:WalletUser;
response:any;
userSend:WalletAccount=new WalletAccount(0,0,'',{ userId: 0, userName: "", password: "", phoneNumber: 0, loginName:""},[{ transactionId: 0, description:"", dateOfTransaction:"", amount:0 , accountBalance: 0 }])
  constructor(private customerservice: CustomerServiceService, private router: Router) { }
  ngOnInit(): void {
  }
    onSubmit(user:WalletUser){
  
      console.log("user"+user)
      console.log(user.userName)
      this.userSend.walletUser=user
    
      console.log(this.userSend)
  
      this.customerservice.createAccount(this.userSend)
          .subscribe(data => 
          
                {
            console.log(data)
            if(data!=null)
            {
                alert("Account created successfully, your user-id is: "+data.walletUser.userId+" please note it for future purpose"); 
                this.router.navigate(['view-page',data.walletUser.userId]);
              }  
            else{
             alert("error");
                          }
           } );
      }

  }