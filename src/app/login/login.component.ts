import { Component, OnInit } from '@angular/core';
import { CustomerServiceService, WalletUser } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  userid: number;
  password: string;
  details: any;
  constructor(private customerservice: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
  }

    

  onSubmit(user:WalletUser):void{
    console.log(user.userId,user.password);
    this.customerservice.validateUser(user.userId,user.password).subscribe(
    (data)=>{
      this.details =data
      console.log("returened"+this.details)
    if (this.details == null) {
     alert("Invalid userid/password ");
     }
     else {
       this.router.navigate(['view-page']);
       } 
    }
    );
  } 
}
