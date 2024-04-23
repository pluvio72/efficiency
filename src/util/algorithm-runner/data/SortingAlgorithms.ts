import { ALGORITHM_KEYS_MAP } from "@/data/algorithms";

export const KEY_MAP = {
  [ALGORITHM_KEYS_MAP.bubble_sort]: bubbleSort,
  [ALGORITHM_KEYS_MAP.insertion_sort]: insertionSort,
  [ALGORITHM_KEYS_MAP.quick_sort]: quickSort,
  [ALGORITHM_KEYS_MAP.merge_sort]: mergeSort,
};

export const GENERATOR_KEY_MAP = {
  [ALGORITHM_KEYS_MAP.bubble_sort]: generatorBubbleSort,
  [ALGORITHM_KEYS_MAP.insertion_sort]: generatorInsertionSort,
  [ALGORITHM_KEYS_MAP.quick_sort]: generatorQuickSort,
  [ALGORITHM_KEYS_MAP.merge_sort]: generatorMergeSort,
};

export function bubbleSort(arr: number[]) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function* generatorBubbleSort(arr: number[]) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        yield arr;
      }
    }
  }
}

export function insertionSort(arr: number[]) {
  let j, key;

  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

function* generatorInsertionSort(arr: number[]) {
  let j, key;

  for (let i = 1; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    yield arr;
  }
}

export function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

function* generatorQuickSort(arr: number[]) {}

function mergeSort(arr: number[]) {
  return arr;
}

function* generatorMergeSort(arr: number[]) {
  function merge(arr: number[], l: number, m: number, r: number) {
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    var i = 0;
    var j = 0;
    var k = l;

    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  function* mergeSort(arr: number[], l: number, r: number) {
    if (l >= r) {
      return;
    }
    var m = l + parseInt(((r - l) / 2).toString());
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
    yield arr;
  }

  yield mergeSort(arr, 0, arr.length - 1);
}
