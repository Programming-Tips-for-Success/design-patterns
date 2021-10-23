abstract class Company {

    name: string;
  
    constructor(name: string) {
  
        this.name = name;
  
    }
  
    display(): void{
  
        console.log(this.name);
  
    }
  
    abstract createObj(string): Company;
  
  }
  
  class PersonDetails extends Company { 
  
    empCode: number;
  
    constructor(name: string, code: number) { 
  
        super(name); // must call super()
  
        this.empCode = code;
  
    }
  
    createObj(name:string): Company { 
  
        return new PersonDetails(name, 1);
  
    }
  
  }
  
  let emp: Company = new PersonDetails("Sam", 100);
  
  emp.display(); //Sam
  
  let emp2: Company = emp.createObj('smith');
  console.log(emp2);  // PersonDetails { name: 'smith', empCode: 1 }
  
//   tsc oops-concept/abstract.ts