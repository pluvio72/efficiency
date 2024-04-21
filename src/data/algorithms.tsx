import { Algorithm } from "@/types";

export const ALGORITHMS = [
  {
    key: "bubble_sort",
    name: "Bubble Sort",
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
      worstCase: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
    },
    description:
      "Bubble sort is your 'Hello World' algorithm: a good introduction. It works by 'bubbling' (moving) the largest unsorted to the end of the array. It is inneffective for any large data-sets.",
    strengths: ["Stable", "Easy to understand & implement"],
    weaknesses: ["Slow for large data sets"],
  },
  {
    key: "insertion_sort",
    name: "Insertion Sort",
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
      worstCase: {
        value: "n^2",
        type: "Quadratic",
        toolTip: "",
      },
    },
    description:
      "Insertion sort splits the array into two sections: sorted and unsorted. It iteratively adds each element into the sorted array. It is an 'in-place' and 'stable' sorting algorithm. It is similar to sorting playing cards in your hand.",
    strengths: [],
    weaknesses: [],
  },
  {
    key: "quick_sort",
    name: "Quick Sort",
    tags: ["Sort"],
    complexity: {
      bigO: {
        value: "2n",
        type: "Linear",
        toolTip: "",
      },
      bestCase: {
        value: "",
        type: "Linear",
        toolTip: "",
      },
      worstCase: {
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
    key: "merge_sort",
    name: "Merge Sort",
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
      worstCase: {
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
    key: "heap_sort",
    name: "Heap Sort",
    tags: ["Sort"],
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
      worstCase: {
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
    key: "count_sort",
    name: "Count Sort",
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
      worstCase: {
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
      worstCase: {
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
      worstCase: {
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
      worstCase: {
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
      worstCase: {
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
      worstCase: {
        value: "",
        type: "Linear",
        toolTip: "",
      },
    },
    description: "",
    strengths: [],
    weaknesses: [],
  },
] as const satisfies Algorithm[];

const ALGORITHM_KEYS = ALGORITHMS.map((e) => e.key);
export type AlgorithmKeys = (typeof ALGORITHM_KEYS)[number];

export const ALGORITHM_KEYS_MAP = ALGORITHM_KEYS.reduce(
  (a, v) => ({ ...a, [v]: v }),
  {}
) as { [Key in AlgorithmKeys]: AlgorithmKeys };
