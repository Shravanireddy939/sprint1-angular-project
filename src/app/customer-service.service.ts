import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }
private headers = new HttpHeaders({'Content-Type': 'application/json'});
//private headers = new HttpHeaders({'Content-Type': 'text/plain'});


    public createAccount(user: WalletAccount) {
      console.log(user+"inservice");
      return this.http.post<WalletAccount>("http://localhost:2020/Wallet/createAccount", user,{responseType:'json'});
   }

   public addAmount(userid: number, accountbalance: number) {
    console.log(userid, accountbalance);
    return this.http.put<WalletAccount>("http://localhost:2021/Wallet/addAmount/"+ userid+"/"+ accountbalance,{headers: this.headers});
 }


   public displayBalance(user: number) {
    console.log(user);
    return this.http.get("http://localhost:2022/Wallet/displayBalance/"+ user, {responseType:'text'});
  }
  public transferAmount( amount: number,userid1: number, userid2: number) {
    console.log(amount, userid1, userid2,);
   const headers = new HttpHeaders({'Content-Type': 'text/plain'});
    return this.http.put("http://localhost:2023/Wallet/transferAmount/"+amount+"/"+userid1+"/"+userid2,{responseType:'text'});
  }

  public transactionHistory(user: number) {
    console.log(user);
    return this.http.get("http://localhost:2025/Wallet/transactionHistory/"+ user, {responseType:'json'});
  }
  public validateUser(userid: number, password: string) {
    console.log(userid, password);
    return this.http.get("http://localhost:2024/Wallet/validateUser/"+ userid+"/"+ password,{responseType:'text'});
  }

}

export class WalletUser
{
  userId:number;
  userName:string;
  password:string;
  phoneNumber:number;
  loginName:string;

  constructor(userId:number, userName:string, password:string, phoneNumber: number, loginName: string)
  {
    this.userId=userId;
    this.userName=userName;
    this.password=password;
    this.phoneNumber=phoneNumber;
    this.loginName=loginName;
  }
}

export class WalletAccount
{
  accountId:number;
    accountBalance: number;
  status:string;
  walletUser:WalletUser;//one to one
WalletTransactions: WalletTransactions[];//one to many
  constructor(accountId:number, accountBalance:number, status: string, walletUser:WalletUser, WalletTransactions: WalletTransactions[])
  {

    this.accountId=accountId;
    this.accountBalance=accountBalance;
    this.status=status;
    this.walletUser=walletUser;
    this.WalletTransactions=WalletTransactions;
  }
}
  //<element ng-list="separator"></element>

export class WalletTransactions
{

 transactionId: number;
  description: string;
  dateOfTransaction: string;
  amount:number;
  accountBalance: number ; 


  constructor(transactionId:number, description:string, dateOfTransaction:string, amount: number, accountBalance: number)
  {
    this.transactionId=transactionId;
    this.description=description;
    this.dateOfTransaction=dateOfTransaction;
    this.amount=amount;
    this.accountBalance=accountBalance;
  
  }
}
