Iterator Pattern- [Behavioural]

Iterators are pretty much everywhere in Javascript. It is such a fundamental pattern that it is built-in into the language itself. You can use it to iterate anything from the array, dictionaries to tree data Structures.

A cool thing about it is that it provides the same interface for you to iterate any data container instead of looping arrays and traversing trees and graphs. allows sequential traversal through a complex data structure without exposing its internal details. Lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

Iterators are stateful objects since we have to keep track of the current item and you can use generators to implement them which makes them even more powerful.

A perfect example of its usage is in dynamically generating data instead of keeping large data stored in memory.

Let's say you need a list of numbers from 1 to 1000. The naive way would be to actually create an array of actually 1 thousand items and iterate it. But with an iterator, you can calculate the next item when you are actually accessing it which allows you to save on memory.

Another use case for iterators is, let's say you have a tree and you have to pass it to something else in your application. You decide to make a copy of the tree beforehand to make sure whatever modifications do not affect the original tree before you pass that tree around.

The problem with cloning the tree is that it can grow to be big with different processes and eventually take longer to fully copy it. Instead, you can pass an iterator that allows the recipient to traverse the tree one node at a time where you only clone the node when they are accessing it and remove the need to clone the whole thing at once.

An even better solution would be to use a proxy to the above solution but iterators are super powerful as well and you rarely need to implement your own for native data structures as they all come with an iterator option to use.

Prototype Pattern- [Creational ]

Prototype Oriented Programming is a type of Object-Oriented Programming and Javascript is a prototypical inheritance language.

Way before class was introduced, the only way to do OOP was through prototypes, and as matter of fact, the Javascript class is just syntactic sugar on top of the prototype and constructor function. So why use this instead of classes then?

Learn Javascript prototypical inheritance nature;

Improve your ability to debug Javascript weird behaviors;

Understand how everything works under the hood;

More control over the members of the object that a class can give you;

Allows you to create library and frameworks more efficiently by manipulating lower-level logic;

Ability to extend from multiple sources for much better composability;

Better control on what you are inheriting with Object.create a second argument.

Below is an example of how to implement a calculator using the constructor function and prototype manipulation instead of a class. It is for sure more robust and complex which makes you appreciate javascript class even more but it does allow you more control as long as you know what you are doing.

copy existing objects without making your code dependent on their classes. basically used to create duplicate object while keeping performance in mind. clone your object and make copy

Prototype patterns is required, when object creation is time consuming, and costly operation, so we create object with existing object itself.

Decorator Pattern- [Structural ]

The decorator pattern is also another way to meta-program similar to the Proxy pattern. As a matter of fact, you can use a Proxy to implement a decorator. It is a simple technique to hijack objects to introduce additional reusable functionalities without having to modify the object or function directly.

There are mainly three methods you can implement decorators through:

Composition — wrapping an object around another that it inherits from to implement new or changed things to it. This is popularly known as an inheritance in Object-Oriented Programming;

Object Augmentation — attach or change things directly on the object (monkey patching);

Proxy Object — intercept and react to object actions and updates in order to alter the data or the result.

Javascript allows you to implement decorators which you can actually try through Typescript or by using the decorator's Babel plugin as it is still in the early steps(proposal). Decorators can be done by manipulating object property definition and descriptors for the desired effect.

Below is an example of how we can use monkey patching to modify the calculator property descriptors to log a message whenever the total is updated or the add method is called. This can be useful for debugging purposes and it is also a common decorator to find in programs.

It does not change the calculator class implementation directly but rather operates on the instance of the class to avoid affect other instances in your program.

Decorating in programming is simply wrapping one piece of code with another, thereby decorating it.

Decorators enable us to write cleaner code by providing an efficient and understandable way of wrapping one piece of code with another.

It also provides a clean syntax for applying this wrapper.

It lets you attach new behaviours to objects by placing these objects inside special wrapper objects that contain the behaviors.

decorators are a tool for reusing common logic. They are complementary to Object-Oriented Programming.

Decorators encapsulate responsibility shared by different objects.

Decorators let programmers modify and/or tag methods, classes, properties and parameters.

you can think of Decorators as dynamic inheritance because even though you’re not creating a new class in order to add the behavior, you’re creating a new object with the extended functionality.

Two types-

Function decorators

take a function as an argument and return a new function that enhances the function argument without modifying it.

Class Decorators

A Class Decorator is declared just before a class declaration. The class decorator is applied to the constructor of the class and can be used to observe, modify, or replace a class definition

Composite Pattern- [Structural ]

This pattern allows you to have a group of objects that are treated the same way with the main objective of composing them in a hierarchical structure much like a tree data structure. Its main advantage or purpose is to allow you to use a collection of many entities as one.

For example, when you interact with your file system you don't think of its many components. All you know is that you are interacting with the file system. As a matter of fact, when I made my video on creating a file system I used this pattern to give users the feeling they are interacting with one thing (the system) but it was actually composed of different parts that are simply implementing the same interface.

When you use React and are creating class components, notice that all of them are implementing the same interface — the Component interface — and you compose these different components to shape your application. By creating and nesting components you are composing your app view.

aka Object Tree. compose objects into tree structures and then work with these structures as if they were individual objects

Another example-

Let's break it down a bit. Let's say we buy a Printer at the store. It comes in a Box. When we open the Box, we see there is a Printer in the Box, but that there is also another Box along side it. This Box contains a Power Lead and a USB Adapter for the Printer.

We can think of the Printer itself as a Single Object, whilst the Box is a Composite Object. It is has a Printer and it has another Box. This nested Box has a Power Lead and a USB Adapter, both Single Objects, making this Box a Composite Object.

Another example-

In an organization, It have general managers and under general managers, there can be managers and under managers there can be developers. Now you can set a tree structure and ask each node to perform common operation like getSalary()

https://betterprogramming.pub/5-reasons-why-you-should-know-the-composite-design-pattern-226ecc651ce9

Bridge- [Structural ]

split a large class or a set of closely related classes into two separate hierarchies— abstraction and implementation—which can be developed independently of each other. The Implementation defines the interface for all implementation classes. It   doesn't have to match the Abstraction's interface. In fact, the two interfaces can be entirely different. Typically the Implementation interface provides only primitive operations, while the Abstraction defines higher-level operations based on those primitives.

The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.

An example of the Bridge pattern is an application (the client) and a database driver (the service). The application writes to a well-defined database API, for example ODBC, but behind this API you will find that each driver's implementation is totally different for each database vendor (SQL Server, MySQL, Oracle, etc.).

Gestures (finger movements) and the Mouse are very different input devices, but their actions map to a common set of output instructions: click, move, drag, etc. Screen and Audio are very different output devices, but they respond to the same set of instructions. Of course, the effects are totally different, that is, video updates vs. sound effects. The Bridge pattern allows any input device to work with any output device.

Another example-

We can create multiple colors, or multiple shapes, without worrying about one impacting the other, therefore increasing loose coupling in our codebase!

Angular uses it! 

They use it in their Forms API to bridge a gap between any NgControl and any ControlValueAccessor.

The ControlValueAccessor is an interface with methods that must be implemented for any class that implements it. Angular provides it's own concreate implementations of the ControlValueAccessor Implementation, but any developer can implement the interface and any NgControl will be able to use it!

Chain of Responsibility- [Behavioural ]

lets you pass requests along a chain of handlers. creates a chain of receiver objects for a request. a source of command objects and a series of processing objects.

Memento- [Behavioural ]

provides the ability to restore an object to its previous state (undo via rollback). The memento pattern is implemented with three objects: the originator, a caretaker and a memento. The originator is some object that has an internal state.

State- [Behavioural ]

allows an object to alter its behavior when its internal state changes. The state pattern can be interpreted as a strategy pattern, which is able to switch a strategy through invocations of methods defined in the pattern's interface. allow the object for changing its behavior without changing its class. example  vending machine.

Strategy- [Behavioural ]

enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.

Template Method- [Behavioural ]

ḍefines a skeleton of an algorithm in an operation, and defers some steps to subclasses.

Visitor-[Behavioural ]

lets you separate algorithms from the objects on which they operate. represents an operation to be performed on the elements of an object structure without changing the classes on which it operates. manages algorithms, relationships, and responsibilities between objects.

Abstract factory- [Creational ]

lets you produce families of related objects without specifying their concrete classes. we get rid of if-else block and have a factory class for each sub-class.

Builder- [Creational ]

provide a flexible solution to various object creation problems. construct complex objects step by step. provides clear separation between the construction and representation of an object. gives better control and return final object.

Module design Pattern-

The Module pattern can be considered a creational pattern and a structural pattern. It manages the creation and organization of other elements, and groups them as the structural pattern does.

Modules are an integral piece of any robust application's architecture and typically help in keeping the units of code for a project both cleanly separated and organized.

Object literals don't require instantiation using the new operator. Using object literals can assist in encapsulating and organizing your code. The Module pattern was originally defined as a way to provide both private and public encapsulation for classes in conventional software engineering.

Modules promote encapsulation, which means the variables and functions are kept private inside the module body and can't be overwritten.

The Module pattern encapsulates "privacy", state and organization using closures.

Module patterns, variables or methods declared are only available inside the module itself thanks to closure. Variables or methods defined within the returning object however are available to everyone.

it is used to wrap a set of variables and functions.

The central principle of the Revealing Module pattern is that all functions and variables should be hidden unless deliberately exposed.

code encapsulation can be achieved using Modules Patterns. In addition, it is used to create private and public properties

JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of others.

All the variables and functions which are not exported are private within the module and cannot be used outside. Only the exported members are public and can be used by importing them.

The module pattern is perfect for grouping logic related to a specific feature with the advantage of hiding or controlling what can be accessed from the outside.

A module does not even need to return anything. You may pass it some data and it will execute it in its own ecosystem continuously which can be great for when you need to react to a bunch of events.

The module pattern is quite similar to an IIFE (immediately invoked functional expression), but a module always returns an object instead of a function.

syntax-

(function() {
// The private variables or functions goes here.

return {
    // We return the variables or functions here.
}

})();

example-

function EmployeeDetails() {
var name: "Mayank";
var age = 30;
var designation = "Developer",
var salary = 10000;

var calculateBonus = function(amount) {
salary = salary + amount;
}

return {
name: name,
age: age,
designation: designation,
calculateBonus: calculateBonus
}
}

var newEmployee = EmployeeDetails()

var userName = newEmployee.calculateBonus(1000);

The function above uses the private variable “salary” to calculate the value of “bonus” that need to be provided to the employee. So although the “salary” cannot be accessed directly using newEmployee, it still remains in the scope so that other components can use this value for other calculations. Although the variable is “private” to the scope of EmployeeDetails functions, even after the function has executed, the “salary” variable is retained in the scope so that other functions can use these values to provide further functionality.

The salary here is a sort of private variable that can be accessed by other functions that are exposed publicly from the function. It can be equivalent to a private hidden variable that is accessible by its member function. Hence providing the idea of data hiding.

Factory pattern- [Creational ]

(Method - Virtual Constructor) It creates an object without exposing the creation logic to the client and refers to the newly created object using a common interface. basically use factory methods to deal with the problem of creating objects.

It allows you to separate the implementation from the creation details of a particular object by abstracting away any complexity related to interacting with a particular API. Another thing it allows us to do is to create an object whose class or constructor is only known at runtime. 

If you ever used Express.js for Node you used its app factory(createApplication) when you created the express app. The constructor that creates the app for you is created at runtime and the factory exposes just enough stuff for you to interact with it.

Imagine creating a Notification Management application where your application currently only allows for a notification through Email, so most of the code lives inside the EmailNotification class. And now there is a new requirement for PushNotifications. So, to implement the PushNotifications, you have to do a lot of work as your application is mostly coupled with the EmailNotification. You will repeat the same thing for future implementations.

it provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.
provides an interface for creating objects in a superclass [which is the Vehicle interface] but allows subclasses [CAR or BIKE sub classes] to alter the type of objects that will be created.

Method Overriding is the process in which a method belonging to the base (or parent) class is overridden by the same method (same method and signature) of the derived (child) class.
In this process, a child (derived) class method may or may not use the logic defined in the parent (base) class method.
if we include super then you can use new implementation otherwise it will work same

Observer - publish/subscribe pattern [Behavioural ]

in this, an object named the subject, maintains a list of its dependents, is called observers, and notifies them automatically of any state changes, usually by calling one of their methods. use it when there is a one-to-many relationship between objects such as if one object is modified, all the dependent objects should be notified and updated automatically.

specifies the communication between objects: observable and observers

If you ever used RxJs you already felt the power of the observer pattern. What it allows you to do is, well, observe another object. With this pattern, you have the Observable which is the object that handles the observing that consumes an Observer which does all the notifications.

The Event Bus idea is generally associated with the Publish-subscribe pattern.
Publish–subscribe is a messaging pattern through which message senders, called "publishers", do not program the messages to be sent directly to specific receivers, called "subscribers". Instead, they classify published messages without knowledge of which subscribers sent them.
an Event Bus can be considered a global way to transport messages or events to make them accessible from any place within the application.
Event Bus can be accessed from any place in the application, it's important to have a unique instance. you can implement the Singleton Pattern here.

An observer pattern maintains the list of subscribers so that whenever an event occurs, it will notify them. An observer can also remove the subscriber if the subscriber no longer wishes to be notified.

On YouTube, many times, the channels we’re subscribed to will notify us whenever a new video is uploaded.\

medium.com/frontend-canteen/publish-subscribe-pattern-in-javascript-17bf1e94e83d

Mediator- [Behavioural ]

defines an object that encapsulates how a set of objects interact. ... Objects no longer communicate directly with each other, but instead communicate through the mediator. This reduces the dependencies between communicating objects, thereby reducing coupling. promotes a "many-to-many relationship network" to "full object status".

The mediator pattern provides a unified interface through which different components of an application can communicate with each other. If a system appears to have too many direct relationships between components, it may be time to have a central point of control that components communicate through instead. 

The mediator promotes loose coupling. 

A real-time analogy could be a traffic light signal that handles which vehicles can go and stop, as all the communications are controlled by a traffic light.

example is a chatroom (mediator) through which the participants can register themselves. The chatroom is responsible for handling the routing when the participants chat with each other. 

Command- [Behavioural ]

data-driven design pattern. in this, an object is used to encapsulate all information needed to perform an action or trigger an event at a later time.  Four terms always associated with the command pattern are command, receiver, invoker and client turn a request into a stand-alone object that contains all information about the request.

In the command pattern, an operation is wrapped as a command object and passed to the invoker object. The invoker object passes the command to the corresponding object, which executes the command.

The command pattern decouples the objects executing the commands from the objects issuing the commands. The command pattern encapsulates actions as objects. It maintains a stack of commands whenever a command is executed and pushed to the stack. To undo a command, it will pop the action from the stack and perform reverse action.

You can consider a calculator as a command that performs addition, subtraction, division and multiplication, and each operation is encapsulated by a command object.

Facade- [Structural ]

It hides the complexities of the system and provides an interface to the client using which the client can access the system. the facade pattern is appropriate when you have a complex system that you want to expose to clients in a simplified way. The facade pattern is used when we want to show a higher level of abstraction and hide the complexity behind the large codebase.

A great example of this pattern is used in the common DOM manipulation libraries like jQuery, which simplifies the selection and events-adding mechanism of the elements.

This is a simple pattern used to shield you from complex APIs or to unify multiple separate APIs. If you ever used jQuery then you have used Facade before. jQuery is a facade for the complex DOM API and it simplifies all the complexity of working with DOM by exposing the same API which is easier to reason with.

So, facades let you abstract away any complexity of the subsystem allowing you to interact with it directly instead of the system. This is probably the most common pattern when it comes to libraries on the web. This pattern can help you turn powerful and complex things out there into something much simpler to consume.

Adapter- [Structural ]

allows objects with incompatible interfaces to collaborate. The adapter pattern converts the interface of a class to another expected interface, making two incompatible interfaces work together. 

With the adapter pattern, you might need to show the data from a 3rd party library with the bar chart representation, but the data formats of the 3rd party library API and the display bar chart are different. 

Core UI components in the app such as buttons can change a lot, which can be a pain to maintain if you have to fix this in a lot of places. One example is using Angular Material buttons and then your UX’er wants to change the buttons to something different and now you need to find all the places in your application where the Angular Material buttons are used and fix them. Does this sound DRY to you?

The solution is to apply the adapter pattern which means to separate the abstraction and the implementation. This means that the interface can stay the same while you can change the implementation. Also, it gives the benefit that you can get to choose the interface you find useful and use that everywhere. Now, as a contrast to using “raw” Angular material buttons, you only need to change the adapter component one place to change all buttons in the application.

example: stock market data, conversion of units

Imagine that you have a card and you want to read that card using your laptop, the problem is that your card is not compatible with the USB port so you need a card reader to do this. Card reader is the adapter here! It let you read your card.

Another well-known example of adapter design pattern is a translator who translates words of a person to another person.

This design pattern is also known as Wrapper Design Pattern.

What are real-world examples of this design pattern?

When new components need to be integrated and work together with existing components in the application.

Parts of the program are rewritten with an improved interface, but the old code still expects the original interface.

When you have a third party API that there is a chance it changes.

Design Pattern UML

Adapter Design Pattern

Client is the class that contains our application logic

Adaptee is the class that is incompatible with Target interface.

Adapter is the class that let the client use Adaptee class.

proxy pattern- [Structural ]

lets you provide a substitute or placeholder for another object. proxy means an object representing another object. The proxy pattern introduces you to a new type of programming called metaprogramming.

Javascript comes with the Proxy object which literally gives you superpowers and pushes you to the next level. It helps you control access to another object — called subject —by implementing the same interface. The Proxy helps you intercept operations to the subject which makes it great for:

Validation — validate data to the subject to make sure it is valid before it reaches the subject;

Security — ensures that any access to the subject is authorized and the one doing it has all necessary privileges;

Caching — keep an internal cache to make future expensive operations do not go through the expensive calculation in the subject;

Lazy initialization — ensure that expensive initialization of the subject is delayed for when it is actually needed;

Debugging/Logging — intercept all the data in and out to create a realistic report of usage of the subject;

Remote Object Access — makes remote objects appear local;

It can be used with the third-party API or library to ensure things are checked and handled beforehand or that the results coming out has a certain format your application needs. This is a great way to patch or extend third-party libraries without having to touch their code.

Let's take a look at a simple validator to ensure the age of the person is set with a valid value at anytime.

https://saisrikanthavadhanula.wordpress.com/2022/10/01/builder-design-pattern

https://www.codementor.io/@zekenie/semantic-operation-layer-1thzgs0hqm?ref=newsletter design pattertn

There are 23 popular Design patterns.

Design patterns are typical solutions to commonly occurring problems. Design patterns also provide us with a common vocabulary to describe solutions. Patterns are proven solutions. They have less impact on the codebase. The term "design" is used with a strong aspect of the software product's behaviour as recognized by end-users.

These patterns can be used to solve smaller problems throughout the application, and are much easier to inject, change, and add than the overall architecture. Patterns can be easily reused.

Creational Design Patterns- handling object creation mechanisms.

Some of the patterns that fall under this category are:

Constructor

Factory (Method - Virtual Constructor)

Abstract

Prototype

Singleton

Builder

Structural Design Patterns- it includes object composition and typically identifies simple ways to realize relationships between different objects.

Patterns that fall under this category include:

Decorator

Facade

Flyweight

Adapter

Proxy

Bridge

Composite

Behavioural Design Patterns-

Behavioural patterns focus on improving or streamlining the communication between disparate objects in a system. Some behavioural patterns include:

Iterator, Mediator, Observer, State, Chain of Responsibility, Command, Memento, Strategy, Template Method, visitor.

intersection observer  

Concurrency Design Patterns

Transducer design pattern  - Transducers are another name for reducers that take an input and return another reducer, forming a composition between them

These types of design patterns deal with multi-threaded programming paradigms.

Active object

Nuclear reaction

Scheduler

Architecture Design patterns:

Architecture is both the process and the product of planning, designing, and constructing buildings or any other structures. All architectures are designs but not all designs are architectures. Architectural Patterns have an extensive impact on the codebase.

The technical structure of software, i. e. the components, libraries, protocols and whatever it needs to fulfil the design. Architectural elements tend towards collections of classes or modules, generally represented as boxes.

You also must have knowledge of these patterns: MVP  vs MVC vs MVVM

MVP - Model–view–presenter, MVC  - model–view–controller, MVVM - Model–view–ViewModel

MVC (full form Model View Controller)is a software architecture or application design model containing 3 interconnected verticals or portions. These 3 portions are the model (data associated with the application), the view (which is the user interface of an MVC application), and the controller (the processes that are responsible for handling the input).

The MVC model is normally used to develop modern applications with user interfaces. It provides the central pieces for designing a desktop or mobile application, as well as modern web applications.

MVP is a derivative of the MVC design pattern which focuses on improving presentation logic. MVVM is better than MVC/MVP because of its unidirectional data and dependency flow. MVC is suitable for basic app development whereas MVP and MVVM are more suitable to use when the app needs to undergo complex operations.
User Inputs are handled by the Controller.
MVVM - The difference here is the presence of the View Model. It is a kind of implementation of Observer Design Pattern, where changes in the model are represented in the view as well, by the VM. Eg: If a slider is changed, not only the model is updated but the data which may be text, that is displayed in the view is updated as well. So there is a two-way data binding.
These pattern goals are to increase:
Modularity
Flexibility
Testability
Maintainability

Extensible, Readable

Scalable (Data Structures & Algorithms)

Algorithm vs Design pattern-

An algorithm always defines a clear set of actions that can achieve some goal, a pattern is a more high-level description of a solution.

Importance of design patterns-

It makes code reusable, bug-free, and clean.

Speed up the development process.

Changes or modifications become easier.

Reduce common problems developers face during the development process.

Improve object-oriented skills.

Easy to understand the flow of code.

Less code is so easy to maintain.

design Patterns1

SOLID  Principles 

The Single-Responsibility Principle (SRP)                                                           

The Open-Closed Principle (OCP)                                                                                   

The Liskov Substitution Principle (LSP)                                                                           

The Interface Segregation Principle (ISP)                                                                         The Dependency inversion Principle (DIP)- Dependency Injection- Inversion of Control     

https://www.interviewbit.com/mvc-interview-questions/

https://www.digitalocean.com/community/tutorial_series/javascript-design-patterns

https://sourcemaking.com/design_patterns

https://refactoring.guru/design-patterns/

https://www.vertabelo.com/blog/design_patterns/

https://addyosmani.com/resources/essentialjsdesignpatterns/book/

https://www.patterns.dev/posts/classic-design-patterns/#factorypatternjavascript

https://javascriptpatterns.vercel.app/patterns/design-patterns/module-pattern
https://www.patterns.dev/

https://blog.bitsrc.io/the-singleton-pattern-in-typescript-b906303fda93

https://www.youtube.com/playlist?list=PLF206E906175C7E07

monad design pattern-

monad is a powerful design pattern. If you've struggled with null and undefined causing havoc in functions that can't handle them, a Maybe monad would solve that problem. A monad is best thought of as a container of a value: much like how the container-like types Array and Object can hold a collection of values, a monad does the same.

As Array has methods like forEach, and as Object has methods like keys, a monad will have standard methods, and methods you can add on a case-by-case basis.

Method: emit
Alternative names: join, value, valueOf

Method: chain
Alternative names: flatMap, bind

Method: map
Alternative name: fmap ("functional map")

ackblitz.com/edit/typescript-6f3bd1?

Constructor- [Creational]

In classical object-oriented programming languages, a constructor is a special method used to initialize a newly created object once the memory has been allocated for it. Object constructors are used to create specific types of objects - both preparing the object for use and accepting arguments that a constructor can use to set the values of member properties and methods when the object is first created.

Singleton- [Creational ]

ensure that a class has only single instance and provide a global point to access it

Flyweight -[Structural ]

aka Cache. It lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.   The Flyweight stores a common portion of the state (also called intrinsic state) that belongs to multiple real business entities. The Flyweight accepts the rest of the state (extrinsic state, unique for each entity) via its   method parameters.