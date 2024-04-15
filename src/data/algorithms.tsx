import { Algorithm } from "@/types";

export const ALGORITHMS = [
  {
    key: "bubble_sort",
    name: "Bubble Sort",
    tags: ["Greedy", "Sorting"],
    complexity: "n^2",
  },
  {
    key: "insertion_sort",
    name: "Insertion Sort",
    tags: ["Space-efficient", "Low scalability", "Stable"],
    complexity: "n^2",
  },
  {
    key: "quick_sort",
    name: "Quick Sort",
    tags: ["Divide-and-Conquer", "High scalability"],
    complexity: "2n",
  },
  {
    key: "merge_sort",
    name: "Merge Sort",
    tags: ["Stable"],
    complexity: "nlog(n)",
  },
  {
    key: "heap_sort",
    name: "Heap Sort",
    tags: ["High scalability"],
    complexity: "nlog(n)",
  },
  {
    key: "count_sort",
    name: "Count Sort",
    tags: ["Stable"],
    complexity: "n+m",
  },
  {
    key: "radix_sort",
    name: "Radix Sort",
    tags: [],
    complexity: "d(n+b)",
  },
  {
    key: "bucket_sort",
    name: "Bucket Sort",
    tags: [],
    complexity: "n^2",
  },
  {
    key: "bingo_sort",
    name: "Bingo Sort",
    tags: [],
    complexity: "n+m^2",
  },
  {
    key: "shell_sort",
    name: "Shell Sort",
    tags: [],
    complexity: "n^2",
  },
  {
    key: "tim_sort",
    name: "Tim Sort",
    tags: ["Stable"],
    complexity: "nlog(n)",
  },
] as const satisfies Algorithm[];

const ALGORITHM_KEYS = ALGORITHMS.map((e) => e.key);
export type AlgorithmKeys = (typeof ALGORITHM_KEYS)[number];

export const ALGORITHM_KEYS_MAP = ALGORITHM_KEYS.reduce(
  (a, v) => ({ ...a, [v]: v }),
  {}
) as { [Key in AlgorithmKeys]: AlgorithmKeys };
