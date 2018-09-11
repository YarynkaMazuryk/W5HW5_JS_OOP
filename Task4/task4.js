if (!Function.prototype.bind) {
  Function.prototype.bind = function (context) {
    let func = this;
    let bindArgs = [].slice.call(arguments, 1);
    return function () {
      let fnArgs = [].slice.call(arguments);
      return func.apply(context, bindArgs.concat(fnArgs));
    }
  }
}

function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);
console.log(double(3));
console.log(double(4));
console.log(double(5));



