import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from '../customer-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.css']
})
export class ViewPageComponent implements OnInit {

  constructor(private customerservice: CustomerServiceService, private router: Router) { }

  ngOnInit(): void {
    //this.router.navigate(['create-account']);
    //this.router.navigate(['add-amount']);
    //this.router.navigate(['display-balance']);
    //this.router.navigate(['transfer-amount']);

  }

}
