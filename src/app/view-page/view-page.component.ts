import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {
  data: any;
  userId:number;
  constructor(private customerservice: CustomerServiceService, private routing:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  
    let user=this.routing.snapshot.paramMap.get('userId');
    this.userId=Number(user); /** snapshot returns string */
    console.log(this.userId);
  }

DisplayBalance(): void{
  console.log(this.userId)
  this.router.navigate(['/display-balance',this.userId]);
}

AddAmount(): void{
  console.log(this.userId)
  this.router.navigate(['/add-amount',this.userId]);

}
TransferAmount(): void{
  console.log(this.userId)
  this.router.navigate(['/transfer-amount',this.userId]);

}
ShowTransactions(): void{
  console.log(this.userId)
  this.router.navigate(['/show-transactions',this.userId]);//
}
}