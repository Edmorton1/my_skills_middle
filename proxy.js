'use strict';

const person = {
  name: "John Doe",
  age: 42,
  nationality: "American",
};

const personProxy = new Proxy(person, {
  get(obj, prop, receiver) {
    if (prop === 'fullName') {
      return obj.name + " " + obj.nationality;
    }
    console.log({receiver: receiver === personProxy, obj: obj === receiver});
    console.log(`${prop} запросили`);
    return obj[prop];
  },

  set(obj, prop, newValue, receiver) {
    console.log(`${prop} изменился`);
    obj[prop] = newValue;
    console.log(obj, receiver);

    return true;
  },

  has({name}) {
    console.log('Asdasdasd', name);
  }
  
});

console.log(personProxy.age);
personProxy.name = "Matvey";
personProxy.nationality = "Uzbek";

console.log(Object.hasOwn(personProxy, 'asd'));
console.log('name' in personProxy);

const asd = () => {
  console.log('penis');
};

const asdProxy = new Proxy(asd, {
  apply(target) {
    console.log('XONA', target);
  }
});

asdProxy();