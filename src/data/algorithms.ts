export const ALGORITHMS = [
  {
    key: "bubble_sort",
    name: "Bubble Sort",
    animation: "",
    tags: ["Sort"],
    complexity: {
      bigO: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
      bestCase: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
      averageCase: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
    },
    description:
      "Bubble sort is your 'Hello World' algorithm: a good introduction. It works by 'bubbling' (moving) the largest unsorted to the end of the array. It is inneffective for any large data-sets.",
    strengths: ["Stable", "Easy to understand & implement"],
    weaknesses: ["Poor scalability"],
  },
  {
    key: "insertion_sort",
    name: "Insertion Sort",
    animation: "",
    tags: ["Sort", "Stable"],
    complexity: {
      bigO: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
      bestCase: {
        value: "n",
        type: "Linear",
        toolTip: "",
      },
      averageCase: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
    },
    description:
      "Insertion sort splits the array into two sections: sorted and unsorted. It iteratively adds each element into the sorted array. It is an 'in-place' and 'stable' sorting algorithm. It is similar to sorting playing cards in your hand.",
    strengths: [
      "Easy to understand & implement",
      "Stable sorting algorithm",
      "Efficient for nearly sorted lists",
      "Space-efficient",
    ],
    weaknesses: ["Poor scalability", "Beaten by most algorithms"],
  },
  {
    key: "quick_sort",
    name: "Quick Sort",
    animation: "",
    tags: ["Sort"],
    complexity: {
      bigO: {
        value: "n^2",
        type: "Exponential",
        toolTip: "",
      },
      bestCase: {
        value: "nlog(n)",
        type: "Log Linear",
        toolTip: "",
      },
      averageCase: {
        value: "nlog(n)",
        type: "Log Linear",
        toolTip: "",
      },
    },
    description:
      "Quick sort places a 'pivot' in the array (this is usually at the start or at the end but can also be random) and recursively splits the remaining elements into sub-arrays of elements larger and smaller than the pivot until an array of size 1 is made. Then the pivots of each are concatenated in order to generate the final sorted array. Note: the worst case complexity occurs when a poor pivot is chosen.",
    strengths: ["Efficient on large data sets", "Low memory overhead"],
    weaknesses: [
      "Worst case is exponential complexity",
      "Inneficient for small data-sets",
      "Not-stable",
    ],
  },
  {
    key: "merge_sort",
    name: "Merge Sort",
    tags: ["Stable", "Sort"],
    animation: "",
    complexity: {
      bigO: {
        value: "nlog(n)",
        type: "Log Linear",
        toolTip: "",
      },
      bestCase: {
        value: "nlog(n)",
        type: "Log Linear",
        toolTip: "",
      },
      averageCase: {
        value: "nlog(n)",
        type: "Log Linear",
        toolTip: "",
      },
    },
    description:
      "Merge sort is a Divide-and-Conquer algorithm. It recursively divides the array into subarrays until it reaches the base case of arrary length 1. Then proceeds into the 'conquer' phase in which is builds the array up by concatenating each of the arrays into a sorted sub-array until the largest array is reconstructed.",
    strengths: [
      "Stable sorting algorithm",
      "Performs the same regardless of input",
    ],
    weaknesses: ["Requires additional memory, not 'in-place'."],
  },
  {
    key: "heap_sort",
    animation: "",
    name: "Heap Sort",
    tags: ["Sort"],
    complexity: {
      bigO: {
        value: "nlog(n)",
        type: "Log Linear",
        toolTip: "",
      },
      bestCase: {
        value: "nlog(n)",
        type: "Log Linear",
        toolTip: "",
      },
      averageCase: {
        value: "nlog(n)",
        type: "Log Linear",
        toolTip: "",
      },
    },
    description: "Is an algorithm based off the 'binary heap' data structure. ",
    strengths: [],
    weaknesses: [],
  },
  {
    key: "count_sort",
    name: "Count Sort",
    animation: "",
    tags: ["Sort", "Stable"],
    complexity: {
      bigO: {
        value: "n+m",
        type: "Linear",
        toolTip: "",
      },
      bestCase: {
        value: "",
        type: "Linear",
        toolTip: "",
      },
      averageCase: {
        value: "",
        type: "Linear",
        toolTip: "",
      },
    },
    description: "",
    strengths: [],
    weaknesses: [],
  },
  {
    key: "radix_sort",
    name: "Radix Sort",
    animation: "",
    tags: ["Sort"],
    complexity: {
      bigO: {
        value: "d(n+b)",
        type: "Linear",
        toolTip: "",
      },
      bestCase: {
        value: "",
        type: "Linear",
        toolTip: "",
      },
      averageCase: {
        value: "",
        type: "Linear",
        toolTip: "",
      },
    },
    description: "",
    strengths: [],
    weaknesses: [],
  },
  {
    key: "bucket_sort",
    name: "Bucket Sort",
    animation: "",
    tags: ["Sort"],
    complexity: {
      bigO: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
      bestCase: {
        value: "",
        type: "Quadratic",
        toolTip: "",
      },
      averageCase: {
        value: "",
        type: "Quadratic",
        toolTip: "",
      },
    },
    description: "",
    strengths: [],
    weaknesses: [],
  },
  {
    key: "bingo_sort",
    name: "Bingo Sort",
    animation: "",
    tags: ["Sort"],
    complexity: {
      bigO: {
        value: "n+m^2",
        type: "Quadratic",
        toolTip: "",
      },
      bestCase: {
        value: "",
        type: "Quadratic",
        toolTip: "",
      },
      averageCase: {
        value: "",
        type: "Quadratic",
        toolTip: "",
      },
    },
    description: "",
    strengths: [],
    weaknesses: [],
  },
  {
    key: "shell_sort",
    name: "Shell Sort",
    animation: "",
    tags: ["Sort"],
    complexity: {
      bigO: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
      bestCase: {
        value: "",
        type: "Quadratic",
        toolTip: "",
      },
      averageCase: {
        value: "",
        type: "Quadratic",
        toolTip: "",
      },
    },
    description: "",
    strengths: [],
    weaknesses: [],
  },
  {
    key: "tim_sort",
    name: "Tim Sort",
    animation: "",
    tags: ["Stable", "Sort"],
    complexity: {
      bigO: {
        value: "nlog(n)",
        type: "Linear",
        toolTip: "",
      },
      bestCase: {
        value: "",
        type: "Linear",
        toolTip: "",
      },
      averageCase: {
        value: "",
        type: "Linear",
        toolTip: "",
      },
    },
    description: "",
    strengths: [],
    weaknesses: [],
  },
  {
    key: "linear_search",
    name: "Linear Search",
    animation: "",
    tags: ["Search"],
    complexity: {
      bigO: {
        value: "n",
        type: "Linear",
        toolTip: "",
      },
      bestCase: {
        value: "1",
        type: "Constant",
        toolTip: "",
      },
      averageCase: {
        value: "n",
        type: "Linear",
        toolTip: "",
      },
    },
    description:
      "Search through an array each element at a time for the desired element. Most basic search algorithm possible.",
    strengths: ["Simplicity"],
    weaknesses: ["Poor scalability"],
  },
  {
    key: "binary_search",
    name: "Linear Search",
    animation: "",
    tags: ["Search"],
    complexity: {
      bigO: {
        value: "log(n)",
        type: "Log",
        toolTip: "",
      },
      bestCase: {
        value: "1",
        type: "Constant",
        toolTip: "",
      },
      averageCase: {
        value: "log(n)",
        type: "Log",
        toolTip: "",
      },
    },
    description:
      "Repeatedly split array in half until desired element is found.",
    strengths: ["Simplicity"],
    weaknesses: [""],
  },
];

const ALGORITHM_KEYS = ALGORITHMS.map((e) => e.key);
export type AlgorithmKeys = (typeof ALGORITHM_KEYS)[number];

export const ALGORITHM_KEYS_MAP = ALGORITHM_KEYS.reduce(
  (a, v) => ({ ...a, [v]: v }),
  {}
) as { [Key in AlgorithmKeys]: AlgorithmKeys };
