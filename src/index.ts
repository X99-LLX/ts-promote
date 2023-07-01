import { kConcat, kCopyWithin, kFilter, kFind, kFindIndex, kFlat, kForeach, kMap, kReduce, kReverse, kShift, kSlice, kSome, kSort, kSplice, kUnshift } from "./KArrayLibrary/array";

console.log("hello kworld");

const array1 = [1, 2, 3, 4];

kForeach(array1,(value, index) => {
    console.log(value);
});

const combineArr = kConcat(array1, [5,6,7]);
console.log(combineArr);

const copyWithin = kCopyWithin(array1,0,1,2);
console.log(copyWithin);

const filter = kFilter(array1, (value) => { return value % 2 === 0});
console.log(filter);

const map = kMap(array1, (value) => { return value * 2});
console.log(map);

const shift = kShift(array1);
console.log(shift);

const unshift = kUnshift(array1, [5,5,5]);
console.log(unshift);
console.log(array1);

const reduse = kReduce(array1, (accumulater, value) => { return accumulater + value});
console.log(reduse);

const reverse = kReverse(array1);
console.log(reverse);

const flat = kFlat([1,[2,3]]);
console.log(flat);

const flat1 = kFlat(array1);
console.log(flat1);

const findIndex = kFindIndex(array1, 2);
console.log(findIndex);

const find = kFind(array1, (_, index) => { return index > 2});
console.log(find);

const some = kSome(array1, (value) => {return value > 5});
console.log(some);

const sort = kSort(array1);
console.log(sort);

const slice = kSlice(array1, 3, 5);
console.log(slice);

const array2 = [1,2,3,4,5];
const splice = kSplice(array2, 1, 2, 8, 9, 0);
console.log(splice);
console.log(array2);