export interface WalletAccount{
    accountId:number;
    accountBalance: number;
    status: string;
    walletuser: WalletUser;
    wallettransactions: WalletTransactions;
}

export interface WalletUser {

    userId:number;
    userName: string;
    password: string;
    phoneNumber: number;
    loginName: string;
    }
    
   export interface WalletTransactions{
    transactionId: number;
    description: string;
    dateOfTransaction: string;
    amount:number;
    accountbalance: number ; 
    
    }




