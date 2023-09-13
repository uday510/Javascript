// Importing events
const EventEmitter = require('events');
   
// Initializing event emitter instances 
const eventEmitter = new EventEmitter();
  
// Registering to myEvent 
// eventEmitter.on('newEvent', (msg) => {
//    console.log(msg);
// });

// Triggering myEvent
// eventEmitter.emit('newEvent', "First event");

const event1 = (msg) => {
    console.log(`Event ${msg} has occurred`);
}

eventEmitter.on('Event1', event1);

eventEmitter.emit('Event1', 1);

// eventEmitter.removeListener('Event1', event1);



