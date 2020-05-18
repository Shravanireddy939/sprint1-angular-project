import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddAmountComponent } from './add-amount/add-amount.component';
import { DisplayBalanceComponent } from './display-balance/display-balance.component';
import { TransferAmountComponent } from './transfer-amount/transfer-amount.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CustomerServiceService } from './customer-service.service';
import { LoginComponent } from './login/login.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { ShowTransactionsComponent } from './show-transactions/show-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    AddAmountComponent,
    DisplayBalanceComponent,
    TransferAmountComponent,
    LoginComponent,
    ViewPageComponent,
    ShowTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient,CustomerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
