function TestClass(name, year) {
  this.name = name;
  this.year = year;
}

Object.assign(TestClass.prototype, {
  testMethod: function testMethod() {
    console.log("From test method");
  }
});

let test = new TestClass();
test.testMethod();
