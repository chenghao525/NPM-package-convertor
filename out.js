function objectCreate(prototype) {
  function F() {}

  F.prototype = prototype;
  return new F();
}

function objectAssign(target, properties) {
  for (var key in properties) {
    target[key] = properties[key];
  }
}

function AbstractClass(a) {}

objectAssign(AbstractClass.prototype, {
  publicMethod: function publicMethod(foo, bar) {
    console.log('Abstract', this.constructor);
    this.bar = bar;
  }
});

function MyClass(a) {
  AbstractClass.call(this, a);
  this.bar = 51;
}

MyClass.prototype = objectCreate(AbstractClass.prototype);
objectAssign(MyClass.prototype, {
  publicMethod: function publicMethod(foo, bar) {
    AbstractClass.prototype.publicMethod.call(this, foo, bar);
    console.log('MyClass', this.constructor);
  },
  constructor: MyClass
});
objectAssign(MyClass, {
  staticMethod: function staticMethod(a, b) {
    console.log('static', a, b);
  }
});
