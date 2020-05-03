import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AddAmountComponent } from './add-amount/add-amount.component';
import { DisplayBalanceComponent } from './display-balance/display-balance.component';
import { TransferAmountComponent } from './transfer-amount/transfer-amount.component';


const routes: Routes = [
  { path: 'create-account',component: CreateAccountComponent},
  { path: 'add-amount', component: AddAmountComponent },
   {path:'display-balance',component:DisplayBalanceComponent},
   {path:'tranfer-amount',component:TransferAmountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
