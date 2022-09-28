// JavaScript:
/* handle click event  */
// document.getElementById('counter').addEventListener('click', () => {
//     counter++;
//    });
    
   // jQuery:
   /* handle click event */
//    $('#counter').on('click', () => {
//     counter++;
//    });

// Here AccountManager is responsible to create new account of type 
// Savings or Current with the unique account number
let currentAccountNumber = 0;

class AccountManager {
 createAccount(type, details) {
   const accountNumber = AccountManager.getUniqueAccountNumber();
   let account;
   if (type === 'current') {
     account = new CurrentAccounts();
   } else {
     account = new SavingsAccount();
   }
   return account.addAccount({ accountNumber, details });
 }
 
 static getUniqueAccountNumber() {
   return ++currentAccountNumber;
 }
}


// class Accounts maintains the list of all accounts created
class Accounts {
 constructor() {
   this.accounts = [];
 }
 
 addAccount(account) {
   this.accounts.push(account);
   return this.successMessage(account); // complaint
 }
 
 getAccount(accountNumber) {
   return this.accounts.find(account => account.accountNumber === accountNumber);
 }
 
 successMessage(account) {}
}

// CurrentAccounts extends the implementation of Accounts for providing more specific success messages on successful account creation
class CurrentAccounts extends Accounts {
 constructor() {
   super();
   if (CurrentAccounts.exists) {
     return CurrentAccounts.instance;
   }
   CurrentAccounts.instance = this;
   CurrentAccounts.exists = true;
   return this;
 }
 
 successMessage({ accountNumber, details }) {
   return `Current Account created with ${details}. ${accountNumber} is your account number.`;
 }
}
 
// Same here, SavingsAccount extends the implementation of Accounts for providing more specific success messages on successful account creation
class SavingsAccount extends Accounts {
 constructor() {
   super();
   if (SavingsAccount.exists) {
     return SavingsAccount.instance;
   }
   SavingsAccount.instance = this;
   SavingsAccount.exists = true;
   return this;
 }
 
 successMessage({ accountNumber, details }) {
   return `Savings Account created with ${details}. ${accountNumber} is your account number.`;
 }
}
 
// usage
// Here we are hiding the complexities of creating account
const accountManager = new AccountManager();
 
const currentAccount = accountManager.createAccount('current', { name: 'John Snow', address: 'pune' });
 
const savingsAccount = accountManager.createAccount('savings', { name: 'Petter Kim', address: 'mumbai' });


// eg2


// facade around the XMLHttpRequest API
// with support for Promise and POST 
// JSON and Multipart Data
const request = (() => ({
  post(url, data = {}) {
    const req = new XMLHttpRequest();
    if(data instanceof File) {
      formData = new FormData();
      formData.append('file', data, data.name);
      data = formData
    } else {
      data = JSON.stringify(data);
    }
    req.open('POST', url, true);
    return new Promise((res, rej) => {
      req.onload = (e) => {
        if (req.status === 200) {
          res(e);
        } else {
          rej(e);
        }
      }
      req.onerror = rej;
      req.onabort = rej;
      req.onabort = rej;
      req.ontimeout = rej;
      req.send(data);
    });
  },
  get() {
    // code here
  }
}))();
request.post('https://www.domain.com/api/endpoint', {some: 'data'})
  .then(e => {
    console.log('success', e)
  })
  .catch(e => {
    console.log('failed', e)
  })
// node Structural/facade.js 
