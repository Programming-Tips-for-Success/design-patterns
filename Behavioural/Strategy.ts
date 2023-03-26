// configuration
// {
//     "paymentMethod": {
//       "strategy": "PayPal"
//     }
//   }

export interface customerInfoType  {
    country: string
    emailAddress: string
    name: string
    accountNumber?: number
    address?: string
    cardNumber?: number
    city?: string
    routingNumber?: number
    state?: string
  }
class PaymentMethodStrategy {

    
    
    static BankAccount(customerInfo: customerInfoType) {
      const { name, accountNumber, routingNumber } = customerInfo
      // do stuff to get payment
    }
    
    static BitCoin(customerInfo: customerInfoType) {
      const { emailAddress, accountNumber } = customerInfo
      // do stuff to get payment
    }
    
    static CreditCard(customerInfo: customerInfoType) {
      const { name, cardNumber, emailAddress } = customerInfo
      // do stuff to get payment
    }
    
    static MailIn(customerInfo: customerInfoType) {
      const { name, address, city, state, country } = customerInfo
      // do stuff to get payment
    }
    
    static PayPal(customerInfo: customerInfoType) {
      const { emailAddress } = customerInfo
      // do stuff to get payment
    }
  }

//   const PaymentMethodStrategy = require('./PaymentMethodStrategy')
// const config = require('./config')

class Checkout {
    strategy;
  constructor(strategy='CreditCard') {
    this.strategy = PaymentMethodStrategy[strategy]
  }
  
  // do some fancy code here and get user input and payment method
  
  changeStrategy(newStrategy) {
    this.strategy = PaymentMethodStrategy[newStrategy]
  }
  
//   const userInput = {
//     name: 'Malcolm',
//     cardNumber: 3910000034581941,
//     emailAddress: 'mac@gmailer.com',
//     country: 'US'
//   }
  
//   const selectedStrategy = 'Bitcoin'
  
//   changeStrategy(selectedStrategy)
  
  postPayment(userInput) {
    this.strategy(userInput)
  }
}

// module.exports = new Checkout(config.paymentMethod.strategy)
