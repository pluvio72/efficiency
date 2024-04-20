import { KEY_MAP } from "./data/SortingAlgorithms";

export class AlgorithmRunner {
  LOOP_TIMES = 10000;

  run(keys: string[], data: number[]): string[] {
    const runTimes = [];

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i],
        sum = 0;
      for (let j = 0; j < this.LOOP_TIMES; j++) {
        let startTime = performance.now();
        // shallow copy of data
        let _data = [...data];
        KEY_MAP[key](_data);
        let endTime = performance.now();
        sum += endTime - startTime;
      }
      runTimes.push((sum / this.LOOP_TIMES).toFixed(3));
    }

    return runTimes;
  }

  // mergeSort() {
  //   function merge(arr: number[], left: number, middle: number, right: number) {
  //     // Length of both sorted aub arrays
  //     let l1 = middle - left + 1;
  //     let l2 = right - middle;
  //     // Create new subarrays
  //     let arr1 = new Array(l1);
  //     let arr2 = new Array(l2);

  //     // Assign values in subarrays
  //     for (let i = 0; i < l1; ++i) {
  //       arr1[i] = arr[left + i];
  //     }
  //     for (let i = 0; i < l2; ++i) {
  //       arr2[i] = arr[middle + 1 + i];
  //     }

  //     // To travesrse and modify main array
  //     let i = 0,
  //       j = 0,
  //       k = left;

  //     // Assign the smaller value for sorted output
  //     while (i < l1 && j < l2) {
  //       if (arr1[i] < arr2[j]) {
  //         arr[k] = arr1[i];
  //         ++i;
  //       } else {
  //         arr[k] = arr2[j];
  //         j++;
  //       }
  //       k++;
  //     }
  //     // Update the remaining elements
  //     while (i < l1) {
  //       arr[k] = arr1[i];
  //       i++;
  //       k++;
  //     }
  //     while (j < l2) {
  //       arr[k] = arr2[j];
  //       j++;
  //       k++;
  //     }
  //   }

  //   function mergeSort(arr: number[], left: number, right: number) {
  //     if (left >= right) {
  //       return;
  //     }

  //     // Middle index to create subarray halves
  //     let middle = left + parseInt(((right - left) / 2).toString());

  //     // Apply mergeSort to both the halves
  //     mergeSort(arr, left, middle);
  //     mergeSort(arr, middle + 1, right);

  //     // Merge both sorted parts
  //     merge(arr, left, middle, right);
  //   }

  //   const data = [...this.data];
  //   mergeSort(data, 0, data.length - 1);
  // }

  // heapSort() {
  //   function sort(arr: number[]) {
  //     var N = arr.length;

  //     // Build heap (rearrange array)
  //     for (var i = Math.floor(N / 2) - 1; i >= 0; i--) heapify(arr, N, i);

  //     // One by one extract an element from heap
  //     for (var i = N - 1; i > 0; i--) {
  //       // Move current root to end
  //       var temp = arr[0];
  //       arr[0] = arr[i];
  //       arr[i] = temp;

  //       // call max heapify on the reduced heap
  //       heapify(arr, i, 0);
  //     }
  //   }

  //   // To heapify a subtree rooted with node i which is
  //   // an index in arr[]. n is size of heap
  //   function heapify(arr: number[], N: number, i: number) {
  //     var largest = i; // Initialize largest as root
  //     var l = 2 * i + 1; // left = 2*i + 1
  //     var r = 2 * i + 2; // right = 2*i + 2

  //     // If left child is larger than root
  //     if (l < N && arr[l] > arr[largest]) largest = l;

  //     // If right child is larger than largest so far
  //     if (r < N && arr[r] > arr[largest]) largest = r;

  //     // If largest is not root
  //     if (largest != i) {
  //       var swap = arr[i];
  //       arr[i] = arr[largest];
  //       arr[largest] = swap;

  //       // Recursively heapify the affected sub-tree
  //       heapify(arr, N, largest);
  //     }
  //   }

  //   const data = [...this.data];
  //   sort(data);
  // }

  // countSort() {
  //   const data = [...this.data];

  //   const N = data.length;

  //   // Finding the maximum element of inputArray
  //   let M = 0;
  //   for (let i = 0; i < N; i++) {
  //     M = Math.max(M, data[i]);
  //   }

  //   // Initializing countArray with 0
  //   const countArray = new Array(M + 1).fill(0);

  //   // Mapping each element of inputArray as an index of countArray
  //   for (let i = 0; i < N; i++) {
  //     countArray[data[i]]++;
  //   }

  //   // Calculating prefix sum at every index of countArray
  //   for (let i = 1; i <= M; i++) {
  //     countArray[i] += countArray[i - 1];
  //   }

  //   // Creating outputArray from countArray
  //   const outputArray = new Array(N);
  //   for (let i = N - 1; i >= 0; i--) {
  //     outputArray[countArray[data[i]] - 1] = data[i];
  //     countArray[data[i]]--;
  //   }

  //   return outputArray;
  // }

  // radixSort() {
  //   const getNum = (num: number, index: number) => {
  //     const strNum = String(num);
  //     let end = strNum.length - 1;
  //     const foundNum = parseInt(strNum[end - index]);

  //     if (foundNum === undefined) return 0;
  //     else return foundNum;
  //   };

  //   const largestNum = (arr: number[]) => {
  //     let largest = "0";

  //     arr.forEach((num) => {
  //       const strNum = String(num);

  //       if (strNum.length > largest.length) largest = strNum;
  //     });

  //     return largest.length;
  //   };

  //   let data = [...this.data];

  //   let maxLength = largestNum(data);

  //   for (let i = 0; i < maxLength; i++) {
  //     let buckets: number[][] = Array.from({ length: 10 }, () => []);

  //     for (let j = 0; j < data.length; j++) {
  //       let num = getNum(data[j], i);

  //       if (num !== undefined) buckets[num].push(data[j]);
  //     }
  //     data = buckets.flat();
  //   }

  //   return data;
  // }
}
