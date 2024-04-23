export type Algorithm = {
  key: string;
  animation: string;
  name: string;
  tags: string[];
  complexity: {
    bigO: ComplexityItem;
    bestCase: ComplexityItem;
    averageCase: ComplexityItem;
  };
  description: string;
  strengths: string[];
  weaknesses: string[];
};

type ComplexityItem = {
  value?: string;
  type: string;
  // type: "Linear" | "Quadratic" | "Exponential";
  toolTip?: string;
};
