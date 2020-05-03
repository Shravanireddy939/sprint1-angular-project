import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }
  walletuser:WalletUser
walletaccount:WalletAccount
private headers = new HttpHeaders({'Content-Type': 'application/json'});

    public createAccount(user: WalletAccount) {
      console.log(user);
      return this.http.post<WalletAccount>("http://localhost:2020/Employee/createAccount", user,{headers: this.headers});
   }

   public addAmount(userid: number, accountbalance: number) {
    console.log(userid, accountbalance);
    return this.http.put<WalletAccount>("http://localhost:2021/Wallet/addAmount/"+ userid+"/"+ accountbalance,{responseType:'text'});
 }


   public displayBalance(userid: number) {
    console.log(userid);
    return this.http.get<WalletAccount>("http://localhost:2022/Wallet/displayBalance"+userid,{responseType: 'json'});
  }
  public transferAmount(userid1: number, userid2: number, amount: number) {
    console.log(userid1, userid2, amount);
    return this.http.put<WalletAccount>("http://localhost:2023/Wallet/transferAmount/"+userid1+"/"+userid2+"/"+amount,{responseType:'text'});
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
  WalletUser:WalletUser;
WalletTransactions: WalletTransactions[];
  


  constructor(accountId:number, accountBalance:number, status: string, WalletUser:WalletUser, WalletTransactions: WalletTransactions[])
  {

    this.accountId=accountId;
    this.accountBalance=accountBalance;
    this.status=status;
    this.WalletUser=WalletUser;
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
