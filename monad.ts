
// Constant Function Expression
const Identity = x => ({
    emit: () => x,
    chain: f => f(x),
    // map: f => Identity(f(x)),
    map: f => exportIdentity.of(f(x)),
    inspect: () => `Identity(${x})`,
    IdentityOf: x => (x)
});

const IdentityOf = x => Identity(x);

const exportIdentity = {
    of: IdentityOf
}

export {
    exportIdentity as Identity
}
// example use:
const one = Identity(1);
console.log(one.emit(), 'emit');
console.log(one.chain(a => a + 1), 'chain');
const two = one.map(a => a + 1);
console.log(two, 'map')
console.log(two.inspect(), 'inspect');
// const one1 = Identity.of(1);
const onee = one.IdentityOf(1);
console.log(onee, 'IdentityOf'); 


interface IdentityMonad<A> {
  /**
   * method that just returns the value contained within.
   */
  emit: () => A

  /**
   * method which is intended to chain various monads together
   */
  chain: <B>(f: (x: A) => B) => B
  /**
   * `map` it is the chain function with a built-in rewrapping of the resulting value into a
   * new Identity, which itself can be subject to map, chain, and emit on and on for as many
   * functions you'd like to apply to it.
   */
  map: <B>(f: (x: A) => B) => IdentityMonad<B>

  inspect: () => string
}

interface IdentityFactory {
  <A>(x: A): IdentityMonad<A>
}


const List = x => ({
    emit: () => x,
    chain: f => f(x),
    map: f => List(f(x)),
    inspect: () => `List(${x})`,

    concat: a => List(x.concat(a)),
    head: () => x[0],
});

const myNumbers = List([1, 3, 4, 7, 10]);
const test = myNumbers.concat([12]).inspect();
// > List(1,3,4,7,10,12);
console.log(test, 'concat')

const myNumbers1 = List([1, 3, 4, 7, 10]);
const test1 = myNumbers.head()
console.log(test1, 'head')


const Just = (x) => ({
  chain: f => f(x),
  emit: () => x,
  map: f => MaybeOf(f(x)),
  fork: (_, g) => g(x),
  isJust: true,
  isNothing: false,
  inspect: () => `Just(${x})`,
});

const Nothing = (x) => ({
  chain: _ => Nothing(''),
  emit: () => Nothing(''),
  map: _ => Nothing(''),
  fork: (f, _) => f(),
  isJust: false,
  isNothing: true,
  inspect: () => `Nothing`,
});

const MaybeOf = x => x === null || x === undefined || x.isNothing ? Nothing('') : Just(x);

const exportMaybe = {
  of: MaybeOf
};

export { 
    exportMaybe as Maybe
}

const fahrenheitToCelsius = a => (a - 32) * 0.5556;

const reading1 = 15;
const reading2 = null;

const temp1C = MaybeOf(reading1)
                    .map(fahrenheitToCelsius);

console.log(temp1C.inspect());
// > Just(-9.4444)

const temp2C = MaybeOf(reading2)
                    .map(fahrenheitToCelsius);

console.log(temp2C.inspect());
// > Nothing()



// assume a `display` function to display the temperature reading, and act like console.log

const fahrenheitToCelsius2 = a => (a - 32) * 0.5556;
const display = a => {
    console.log(a);
    return a;
};
const reading11 = 15;
const reading22 = null;

const temp3C = MaybeOf(reading11)
    .map(fahrenheitToCelsius2)
    .fork(
        _ => display('ERR!'),
        t => display(`${t}°C`) // will read `-9.4452°C`
    );

MaybeOf(reading22)
    .map(fahrenheitToCelsius2)
    .fork(
        _ => display('ERR!'), // will read `ERR!`
        t => display(`${t}°C`)
    );

    console.log(temp3C)