


class Target {
    public request(): string {
        return 'Target: The default target\'s behavior. Target-request()';
    }
}
 
/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
class Adaptee {
    public specificRequest(): string {
        return 'Adaptee-specificRequest';
    }
}
 
/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    private adaptee: Adaptee;
 
    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }
 
    public request(): string {
        // const result = this.adaptee.specificRequest().split('').reverse().join('');
        const result = this.adaptee.specificRequest();
        return `Adapter: (TRANSLATED) ${result}`;
    }
}


  /**
 * The client code supports all classes that follow the Target interface.
 */
function clientCode(target: Target) {
    console.log(target.request(), 'clientCode');
  }

const target = new Target();
clientCode(target);
 

const adaptee = new Adaptee();
console.log(`instance Adaptee: ${adaptee.specificRequest()}`);
 

const adapter = new Adapter(adaptee);
clientCode(adapter);
 



// ts-node Structural/adapter.ts
