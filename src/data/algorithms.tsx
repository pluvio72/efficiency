import { Algorithm } from "@/types";

export const ALGORITHMS = [
  {
    key: "bubble_sort",
    name: "Bubble Sort",
    tags: ["Sort"],
    complexity: {
      bigO: "n^2",
      bestCase: "",
      worstCase: "",
    },
    description:
      "Sunt in esse ipsum sunt excepteur proident occaecat.Sit aute tempor ex elit culpa sunt.Et deserunt reprehenderit aliqua elit mollit adipisicing aute. Eu veniam ullamco amet fugiat ut est reprehenderit deserunt ex ex aliquip incididunt culpa. Non irure dolore sit qui amet nisi laborum ea. Cupidatat officia eu adipisicing qui labore laboris eiusmod sint elit nulla esse aliqua. Reprehenderit exercitation consequat sint voluptate sit ullamco duis do ullamco esse nulla exercitation ut.",
  },
  {
    key: "insertion_sort",
    name: "Insertion Sort",
    tags: ["Sort", "Stable"],
    complexity: {
      bigO: "n^2",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "quick_sort",
    name: "Quick Sort",
    tags: ["Sort"],
    complexity: {
      bigO: "2n",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "merge_sort",
    name: "Merge Sort",
    tags: ["Stable", "Sort"],
    complexity: {
      bigO: "nlog(n)",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "heap_sort",
    name: "Heap Sort",
    tags: ["Sort"],
    complexity: {
      bigO: "nlog(n)",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "count_sort",
    name: "Count Sort",
    tags: ["Sort", "Stable"],
    complexity: {
      bigO: "n+m",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "radix_sort",
    name: "Radix Sort",
    tags: ["Sort"],
    complexity: {
      bigO: "d(n+b)",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "bucket_sort",
    name: "Bucket Sort",
    tags: ["Sort"],
    complexity: {
      bigO: "n^2",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "bingo_sort",
    name: "Bingo Sort",
    tags: ["Sort"],
    complexity: {
      bigO: "n+m^2",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "shell_sort",
    name: "Shell Sort",
    tags: ["Sort"],
    complexity: {
      bigO: "n^2",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
  {
    key: "tim_sort",
    name: "Tim Sort",
    tags: ["Stable", "Sort"],
    complexity: {
      bigO: "nlog(n)",
      bestCase: "",
      worstCase: "",
    },
    description: "",
  },
] as const satisfies Algorithm[];

const ALGORITHM_KEYS = ALGORITHMS.map((e) => e.key);
export type AlgorithmKeys = (typeof ALGORITHM_KEYS)[number];

export const ALGORITHM_KEYS_MAP = ALGORITHM_KEYS.reduce(
  (a, v) => ({ ...a, [v]: v }),
  {}
) as { [Key in AlgorithmKeys]: AlgorithmKeys };
