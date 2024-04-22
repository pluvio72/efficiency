import _Algorithms from "./algorithms.json";

const ALGORITHMS = _Algorithms;
export { ALGORITHMS };

const ALGORITHM_KEYS = ALGORITHMS.map((e) => e.key);
export type AlgorithmKeys = (typeof ALGORITHM_KEYS)[number];

export const ALGORITHM_KEYS_MAP = ALGORITHM_KEYS.reduce(
  (a, v) => ({ ...a, [v]: v }),
  {}
) as { [Key in AlgorithmKeys]: AlgorithmKeys };
