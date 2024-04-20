import { ALGORITHM_KEYS_MAP } from "@/data/algorithms";

export const KEY_MAP = {
  [ALGORITHM_KEYS_MAP.bubble_sort]: bubbleSort,
  [ALGORITHM_KEYS_MAP.insertion_sort]: insertionSort,
  [ALGORITHM_KEYS_MAP.quick_sort]: quickSort,
};

export const GENERATOR_KEY_MAP = {
  [ALGORITHM_KEYS_MAP.bubble_sort]: generatorBubbleSort,
  [ALGORITHM_KEYS_MAP.insertion_sort]: generatorInsertionSort,
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