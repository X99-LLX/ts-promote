
export function kForeach<T>(
    array: T[], 
    callback: (value: T, index: number) => void
) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i);
    }
}

export function kConcat<T>(
    array1: T[],
    array2: T[],
) {
    return [...array1, ...array2];
}

export function kCopyWithin<T>(
    array: T[], 
    target: number, 
    start: number, 
    end: number,
) {
    const newArray = [...array];
    const length = newArray.length;
  
    target = target < 0 ? Math.max(length + target, 0) : Math.min(target, length);
    start = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    end = end < 0 ? Math.max(length + end, 0) : Math.min(end, length);
  
    const count = Math.min(end - start, length - target);
  
    if (target < start && target + count > start) {
      for (let i = count - 1; i >= 0; i--) {
        newArray[target + i] = newArray[start + i];
      }
    } else {
      for (let i = 0; i < count; i++) {
        newArray[target + i] = newArray[start + i];
      }
    }
  
    return newArray;    
}

export function kFilter<T>(
    array: T[], 
    callback: (value: T, index: number) => boolean
) {
    const newArray: T[] = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

export function kMap<T>(
    array: T[], 
    callback: (value: T, index: number) => T
) {
    const newArray: T[] = [];
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i)); 
    }
    return newArray;
}

export function kShift<T>(array: T[]) {
    if (array.length === 0) {
        return undefined;
    }

    const shiftedElement = array[0];

    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }

    array.length -= 1;

    return shiftedElement;
}

export function kUnshift<T>(array: T[], insertArr: T[]) {
    const originalLength = array.length;

    for (let i = originalLength - 1; i >= 0; i--) {
        array[i + insertArr.length] = array[i];
    }
  
    for (let i = 0; i < insertArr.length; i++) {
        array[i] = insertArr[i];
    }
  
    return originalLength + insertArr.length;
}

export function kReduce<T>(
    array: T[], 
    callback: (accumulator: T, value: T, index: number) => T
) {
    let accumulator = array[0];

    for (let i = 1; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i);
    }
  
    return accumulator;
  }

export function kReverse<T>(array: T[]): T[] {
    const newArray = [...array];
    let left = 0;
    let right = newArray.length - 1;
  
    while (left < right) {
        const temp = newArray[left];
        newArray[left] = newArray[right];
        newArray[right] = temp;
        
        left++;
        right--;
    }
    return newArray;
}

export function kFlat<T>(array: (T | T[])[]): T[] {
    const flattenedArray: T[] = [];
  
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flattenedArray.push(...kFlat(array[i] as T[]));
        } else {
            flattenedArray.push(array[i] as T);
        }
    }
  
    return flattenedArray;
}

export function kFindIndex<T>(array: T[], element: T) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === element) {
            return i;
        }
    }
    return -1;
}

export function kFind<T>(
    array: T[], 
    callback: (value: T, index: number) => boolean
) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            return array[i];
        }
    }
  
    return undefined;
}

export function kSome<T>(
    array: T[], 
    callback: (value: T, index: number) => boolean
) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i)) {
            return true;
        }
    }
  
    return false;
}

export function kSort<T>(array: T[]) {
    const length = array.length;
  
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
            const temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            }
        }
    }
  
    return array;
} 

export function kSlice<T>(array: T[], start: number, end?: number) {
    const length = array.length;
  
    let startIndex = start >= 0 ? start : Math.max(length + start, 0);
    startIndex = Math.min(startIndex, length);
  
    let endIndex = end !== undefined ? (end >= 0 ? end : Math.max(length + end, 0)) : length;
    endIndex = Math.min(endIndex, length);
  
    const result: T[] = [];
    for (let i = startIndex; i < endIndex; i++) {
        result.push(array[i]);
    }
  
    return result;
}

export function kSplice<T>(
    array: T[], 
    start: number, 
    deleteCount: number, 
    ...items: T[]
) {
    const length = array.length;

    const removed: T[] = [];
    for (let i = 0; i < deleteCount; i++) {
        removed.push(array[start + i]);
    }
  
    const numToInsert = items.length;
    const newLength = length - deleteCount + numToInsert;
  
    for (let i = newLength - 1; i > start; i--) {
        array[i] = array[i - 1];
    }
  
    for (let i = 0; i < numToInsert; i++) {
      array[start + i] = items[i];
    }
  
    array.length = newLength;
  
    return removed;
  }