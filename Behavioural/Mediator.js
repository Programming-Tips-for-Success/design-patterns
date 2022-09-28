// each participant represented by Participant object
class Participant {
    constructor(name) {
      this.name = name;
    }
     getParticiantDetails() {
      return this.name;
    }
   }
    
   // Mediator
   class Chatroom {
    constructor() {
      this.participants = {};
    }
    
    register(participant) {
      console.log(participant, 'participant');
      this.participants[participant.name] = participant;
      participant.chatroom = this;
    }
    
    send(message, from, to) {
      if (to) {
        // single message
        to.receive(message, from);
      } else {
        // broadcast message to everyone
        for (key in this.participants) {
          if (this.participants[key] !== from) {
            this.participants[key].receive(message, from);
          }
        }
      }
    }
   }
    
   // usage
   // Create two participants  
    const john = new Participant('John');
    const snow = new Participant('Snow');
   // Register the participants to Chatroom
    var chatroom = new Chatroom();
    chatroom.register(john);
    chatroom.register(snow);

   // Participants now chat with each other
    john.send('Hey, Snow!');
    john.send('Are you there?');
    snow.send('Hey man', yoko);
    snow.send('Yes, I heard that!');
   
   // node Behavioural/Mediator.js
