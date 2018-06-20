var list = [11, 12, 31, 42, 5, 48, 122, 0, 2];

console.log(list.join(", "));
list.sort(function (a, b) {
    return b - a;
});
console.log(list.join(", "));

var numbers = 5;

var list1 = list.slice(0, numbers);
console.log(list1.join(", "));

var list2 = list.slice(list.length - numbers);
console.log(list2.join(", "));


function isEven(arg) {
    return arg % 2 === 0;
}

var evenSum = list.reduce(function (sum, current) {
    if (isEven(current)) {
        return sum += current;
    } else return sum;
}, 0);
console.log(evenSum);

var list100 = [];
console.log(list100.join(", "));
for (var i = 1; i <= 100; i++) {
    list100.push(i);
}
console.log(list100.join(", "));

var evenSum2 = list100.reduce(function (sum, current) {
    if (isEven(current)) {
        return sum += current;
    } else return sum;
}, 0);
console.log(evenSum2);
