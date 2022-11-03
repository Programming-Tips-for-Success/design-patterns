class PushNotification {
    constructor(sendTo, message) {
        console.log(sendTo, message, 'PushNotification');
      this.sendTo = sendTo;
      this.message = message;
    }
   }
    
   class EmailNotification {
    constructor(sendTo, cc, emailContent) {
        console.log(sendTo, cc, emailContent, 'EmailNotification');

      this.sendTo = sendTo;
      this.cc = cc;
      this.emailContent = emailContent;
    }
   }
    
   // Notification Factory
    
   class NotificationFactory {
    createNotification(type, props) {
      switch (type) {
        case 'email':
          return new EmailNotification(props.sendTo, props.cc, props.emailContent);
        case 'push':
          return new PushNotification(props.sendTo, props.message);
      }
    }
   }
    
   // usage
   const factory = new NotificationFactory();
    
   // create email notification
   const emailNotification = factory.createNotification('email', {
    sendTo: 'receiver@domain.com',
    cc: 'test@domain.com',
    emailContent: 'This is the email content to be delivered.!',
   });
    
   // create push notification
   const pushNotification = factory.createNotification('push', {
    sendTo: 'receiver-device-id',
    message: 'The push notification message',
   });


   // eg
   
  // Factory Object Creation Pattern
  function makeRobot(name, job) {
    return {
      name: name,
      job: job,
      
      introduce: function() {
        console.log("Hi! I'm " + this.name + ". My job is " + this.job + ".");
      },
    };
  }
  
  var bender = makeRobot("Bender", "bending");
  bender.introduce();   // Hi! I'm Bender. My job is bending.
  
  var wallE = makeRobot("Wall-E", "trash collection");
  wallE.introduce();    // Hi! I'm Wall-E. My job is trash collection.

  //  Constructor Pattern
  function Robot(name, job) {
    this.name = name;
    this.job = job;
  
    this.introduce = function() {
    return  console.log("Hi! I'm " + this.name + ". My job is " + this.job + ".");
    };
  }

  var wallE2 = new Robot("Wall-E", "trash collection");
  wallE2.introduce();    // Hi! I'm Wall-E. My job is trash collection.
   // node Creational/factorydemo.js