import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletUser } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userId: number;
  password: string;
  details: any;
  
    constructor(private customerservice: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }

    


onSubmit(user:WalletUser){
  console.log(user.userId,user.password);
    this.userId=user.userId;
    this.customerservice.validateUser(user.userId,user.password).subscribe(
    (data)=>{
      this.details =data
      console.log("returened "+this.details)
    if (this.details == "Please Enter Valid Login Detailsh UserId/n if you don't have an account please register below") {
           alert("Ooops..! Invalid username/password *try again or please register below");
     }
     else {
      alert("Login Successfull");
       console.log(this.userId)
       this.router.navigate(['view-page',this.userId]);
       } 
    }
    );
  } 
}