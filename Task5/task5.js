function multiple(a) {
    let curentValue = a;
    function multipleCurrent(b) {
        curentValue *= b;
        return multipleCurrent;
    }
    multipleCurrent.toString = function() {
        return curentValue;
      };
    return multipleCurrent;
}
console.log(multiple(2)); 
console.log(multiple(2)(3)); 
console.log(multiple(7)(2)(3)); 
console.log(multiple(1)(2)(3)(4)); 
console.log(multiple(0)(1)(2)(3)(4)(5));
