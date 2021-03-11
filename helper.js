class TestClass{
    constructor(name, year){
      this.name = name;
      this.year = year;
    }

    testMethod(){
      console.log("From test method");
    }
  }

  let test = new TestClass();
  test.testMethod();



  Object.create = function (prototype) {
    function F() {}
    F.prototype = prototype;
    return new F();
  }



  ObjectAssign = function(target, properties) {
    for (var key in properties) {target[key] = properties[key];}
  };

// function vul(input) {
//   var src = input + '/cmd';
//   cp.exec(src);
// }

// foo.prototype["vul"] = vul;

// Object.assign(foo.prototype, {
//   vul: function vul(input) {
//     var src = input + '/cmd';
//     cp.exec(src);
//   }
// });

module.exports = {
  TestClass: TestClass
}