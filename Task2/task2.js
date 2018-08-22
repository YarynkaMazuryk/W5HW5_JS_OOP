//Task2 Object.prototype: numberOfProps
Object.prototype.numberOfProps = function () {
    let count = 0;
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            count++;
        }
    }
    return count;
}
let bob = {
    name: 'Bob',
    age: 22
}
let joe = {
    name: 'Joe',
    lastname: 'Doe',
    age: 21,
    location: 'NY'
}
console.log("Object.prototype: numberOfProps");
console.log(bob.numberOfProps());
console.log(joe.numberOfProps());
//Task 2 Object.prototype: sumOfNumberProps
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
Object.prototype.sumOfNumberProps = function () {
    let sum = 0;
    for (let key in this) {
        if (this.hasOwnProperty(key) && isNumeric(this[key])) {
            sum += + this[key];
        }
    }
    return sum;
}
let obj1 = {
    item1: 23,
    item2: 'none',
    item3: '11',
    item4: NaN,
    item5: 0
}

let obj2 = {
    item1: 3,
    item2: -1
}
console.log("Object.prototype: sumOfNumberProps");
console.log(obj1.sumOfNumberProps());
console.log(obj2.sumOfNumberProps());
//Task 2 Object.prototype: objectMap
Object.prototype.objectMap = function (callback) {
    let newObject = {};
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            newObject[key] = callback(this[key], key);
        }
    }
    return newObject;
}
let obj3 = {
    item1: 23,
    item2: 'none',
    item3: '11',
    item4: NaN,
    item5: 0
}
let obj4 = {
    item1: 3,
    item2: -1
}
console.log('Object.prototype: objectMap');
console.log(obj3.objectMap(item => {
    return item + 1
}));
console.log(obj4.objectMap(item => {
    return item + 1
}));
// Task 2 Number.prototype: increment
Number.prototype.increment = (function () {
    let currentValue = null;
    return function (number = 1) {
        if (currentValue == null) {
            currentValue = this;
        }
        currentValue += number;
        return currentValue;
    }
})();
let num = 4;
console.log('Number.prototype: increment');
console.log(num.increment());
console.log(num.increment(5));
console.log(num.increment(8));
console.log(num.increment());
//Task 2 Number.prototype: decrement
Number.prototype.decrement = (function () {
    let currentValue = null;
    return function (number = 1) {
        if (currentValue == null) {
            currentValue = this;
        }
        currentValue -= number;
        return currentValue;
    }
})();
let num2 = 30;
console.log('Number.prototype: decrement');
console.log(num2.decrement())
console.log(num2.decrement(5))
console.log(num2.decrement(8))
console.log(num2.decrement())
//Task 2 Number.prototype: sumOfDigits
Number.prototype.sumOfDigits = function () {
    const digits = ("" + this).split("");
    let sumOfDigits = digits.reduce(function (prev, current) {
        return (+prev) + (+current);
    }, 0);
    return sumOfDigits;
}
let num3 = 123;
let num4 = 479;
console.log('Number.prototype: sumOfDigits');
console.log(num3.sumOfDigits())
console.log(num4.sumOfDigits())
//Task 2 Array.prototype: sumOfFirstLast
Array.prototype.sumOfFirstLast = function () {
    return this[0] + this[this.length - 1];
}
let arr1 = [3, 5, 6, 8, 2];
let arr2 = [8, 6, 11, 4, 13];
console.log('Array.prototype: sumOfFirstLast');
console.log(arr1.sumOfFirstLast());
console.log(arr2.sumOfFirstLast());
// Task 2 Array.prototype: innerMap
Array.prototype.innerMap=function(callback){
    const currentArray = this;
    let newArray = [];
    for (let i = 0; i < currentArray.length; i++) {
        if ( !Array.isArray(currentArray[i]) ) {
            newArray.push(callback(currentArray[i]))
        }
        if ( Array.isArray(currentArray[i]) ) {
            newArray[i] = currentArray[i].innerMap(callback);
        }
    }
    return newArray;
};
let arr5 = [3, [5, 19, 18], 6, [[7, 19, 31], [14, 18, 20]], 2];
let arr6 = [6, [4, 8], 11, [9, [10]], 13];
console.log('Array.prototype: innerMap');
console.log(arr1.innerMap(item => {
  return item + 2;
})) 
console.log(arr2.innerMap(item => {
  return item + 2;
})) 




