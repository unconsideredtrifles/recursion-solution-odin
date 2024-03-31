const merge = function merge(arr, low, mid, high) {
  const arrToSort = arr;
  let mergedResult = [];

  let i = low;
  const m = mid;
  let j = mid + 1;
  const n = high;

  while(i <= m && j <= n) {
    if ( arrToSort[i] <= arrToSort[j]) {
      mergedResult.push(arrToSort[i]);
      i += 1;
    } else {
      mergedResult.push(arrToSort[j]);
      j += 1;
    }
  }

  if (i > m) {
    mergedResult = [ ...mergedResult, ...arrToSort.slice(j, n + 1)];
  } else if (j > n) {
    mergedResult = [ ...mergedResult, ...arrToSort.slice(i, m + 1)];
  }

  return mergedResult;
};


const mergeSort = function mergeSort(arrToSort, lowIndex, highIndex) {
  if (!Array.isArray(arrToSort) || arrToSort.length === 0) {
    return arrToSort;
  }

  if (lowIndex === highIndex) {
    return [arrToSort[lowIndex]];
  } 

  const midIndex = Math.floor((lowIndex + highIndex) / 2);
  const leftSideArr = mergeSort(arrToSort, lowIndex, midIndex);
  const rightSideArr = mergeSort(arrToSort, midIndex + 1, highIndex);
  const mergedArr = merge(
    [...leftSideArr, ...rightSideArr], 
    0, 
    midIndex - lowIndex, 
    highIndex - lowIndex,
  );

  return mergedArr;
}


const testArr = [3, 5, 2, 4, 8, 3, 6, 1];
console.log(mergeSort(testArr, 0, testArr.length - 1));
