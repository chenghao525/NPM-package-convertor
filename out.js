function ObjectAssign(target, properties) {
  for (var key in properties) {
    target[key] = properties[key];
  }
}

var cp = require("child_process");

function foo(input) {
  this.src = input;
}

Object.assign(foo.prototype, {
  vul: function vul() {
    cp.exec(this.src);
  }
});


function expolit(input) {
  var f = new foo(input);
  f.vul();
}

module.exports = {
  foo: foo,
  expolit: expolit
};
