function Log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  console.log('aapl', descriptor)
  descriptor.value = function (...args: any[]) {
    console.log('veeve')
    return original.apply(this, args);
  };

  return descriptor;
}

function goida(target: any, propertyKey: string) {
  console.log({propertyKey})
}

function classDecorator(constructor: Function) {
  console.log({constructor: constructor.name})
}

@classDecorator
class UserService {
  static testos = 'asd'

  @goida
  goi: number = 123;

  @Log
  getUser(id: number) {
    return { id };
  }
}

// const s = new UserService();
// s.getUser(1);
// s.getUser(1);
// s.getUser(1);
// s.getUser(1);
// s.getUser(1);
// s.getUser(1);

// s.goi
// s.goi
// s.goi
// s.goi
// s.goi