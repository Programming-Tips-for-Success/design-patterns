class Video {
  constructor(observable, name, content) {
    this.observable = observable;
    this.name = name;
    this.content = content;
    // publish the ‘video-uploaded’ event
    this.observable.publish("video-uploaded", {
      name,
      content,
    });
  }
}
// Subscriber
class User {
  constructor(observable) {
    this.observable = observable;
    this.intrestedVideos = [];
    // subscribe with the event naame and the call back function
    this.observable.subscribe("video-uploaded", this.addVideo.bind(this));
  }

  addVideo(video) {
    this.intrestedVideos.push(video);
  }
}
// Observer
class Observable {
  constructor() {
    this.handlers = [];
  }

  subscribe(event, handler) {
    this.handlers[event] = this.handlers[event] || [];
    this.handlers[event].push(handler);
  }

  publish(event, eventData) {
    const eventHandlers = this.handlers[event];

    if (eventHandlers) {
      for (var i = 0, l = eventHandlers.length; i < l; ++i) {
        eventHandlers[i].call({}, eventData);
      }
    }
  }
}
// usage
const observable = new Observable();
const user = new User(observable);
const videoFile = "";
const video = new Video(observable, "ES6 Design Patterns", videoFile);

// eg2

function Observable2(observer) {
  this.subscribe = (...fns) => {
    if (observer) {
      const obs = new Observer(...fns);
      observer(obs);
    }
  };

  this.unsubscribe = () => {
    observer = null;
  };
}

function Observer(onNext, onError = () => {}, onComplete = () => {}) {
  const def = () => {};
  if (typeof onNext === "object") {
    onError = onNext.error || def;
    onComplete = onNext.complete || def;
    onNext = onNext.next || def;
  }
  this.completed = false;
  this.withError = false;
  this.next = (val) => {
    if (!this.completed) onNext(val);
  };
  this.error = (err) => {
    if (!this.completed) {
      this.completed = true;
      this.withError = true;
      onError(err);
    }
  };
  this.complete = () => {
    if (!this.completed) {
      this.completed = true;
      onComplete();
    }
  };
}

const obs = new Observable2((observer) => {
  observer.next(10);
  observer.next(20);
  observer.complete(new Error());
  observer.error(new Error());
});
obs.subscribe({
  next(value) {
    console.log("next", value);
  },
  error(err) {
    console.log("err", err);
  },
  complete() {
    console.log("complete");
  },
});
obs.unsubscribe();


// another example
// The subject that updates the observers

class CategoryDropdown {
  constructor() {
    this.categories = ['appliances', 'doors', 'tools']
    this.subscriber = []
  }
  
  // pretend there's some fancy code here
  
  subscribe(observer) {
    this.subscriber.push(observer)
  }
  
  onChange(selectedCategory) {
    this.subscriber.forEach(observer => observer.update(selectedCategory))
  }
}

// A potential observer of the subject

class FilterDropdown {
  constructor(filterType) {
    this.filterType = filterType
    this.items = []
  }
  
  // more fancy code here; maybe make that API call to get items list based on filterType
  
  update(category) {
    fetch('https://example.com')
      .then(res => this.items(res))
  }
}

const CategoryDropdown = require('./CategoryDropdown')
const FilterDropdown = require('./FilterDropdown')

const categoryDropdown = new CategoryDropdown() 

const colorsDropdown = new FilterDropdown('colors')
const priceDropdown = new FilterDropdown('price')
const brandDropdown = new FilterDropdown('brand')

categoryDropdown.subscribe(colorsDropdown)
categoryDropdown.subscribe(priceDropdown)
categoryDropdown.subscribe(brandDropdown)
// node Behavioural/Observer.js
