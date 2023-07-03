
import { kArrayLib } from "./KArrayLibrary";

export function arrayTest() {
    const array1 = [1, 2, 3, 4];

    kArrayLib.kForeach(array1,(value, index) => {
        console.log(value);
    });

    const combineArr = kArrayLib.kConcat(array1, [5,6,7]);
    console.log(combineArr);

    const copyWithin = kArrayLib.kCopyWithin(array1,0,1,2);
    console.log(copyWithin);

    const filter = kArrayLib.kFilter(array1, (value) => { return value % 2 === 0});
    console.log(filter);

    const map = kArrayLib.kMap(array1, (value) => { return value * 2});
    console.log(map);

    const shift = kArrayLib.kShift(array1);
    console.log(shift);

    const unshift = kArrayLib.kUnshift(array1, [5,5,5]);
    console.log(unshift);
    console.log(array1);

    const reduse = kArrayLib.kReduce(array1, (accumulater, value) => { return accumulater + value});
    console.log(reduse);

    const reverse = kArrayLib.kReverse(array1);
    console.log(reverse);

    const flat = kArrayLib.kFlat([1,[2,3]]);
    console.log(flat);

    const flat1 = kArrayLib.kFlat(array1);
    console.log(flat1);

    const findIndex = kArrayLib.kFindIndex(array1, 2);
    console.log(findIndex);

    const find = kArrayLib.kFind(array1, (_, index) => { return index > 2});
    console.log(find);

    const some = kArrayLib.kSome(array1, (value) => {return value > 5});
    console.log(some);

    const sort = kArrayLib.kSort(array1);
    console.log(sort);

    const slice = kArrayLib.kSlice(array1, 3, 5);
    console.log(slice);

    const array2 = [1,2,3,4,5];
    const splice = kArrayLib.kSplice(array2, 1, 2, 8, 9, 0);
    console.log(splice);
    console.log(array2);
}