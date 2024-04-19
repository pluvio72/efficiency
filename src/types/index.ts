export type Algorithm = {
  key: string;
  name: string;
  tags: string[];
  complexity: {
    bigO: ComplexityItem;
    bestCase: ComplexityItem;
    worstCase: ComplexityItem;
  };
  description: string;
  strengths: string[];
  weaknesses: string[];
};

type ComplexityItem = {
  value?: string;
  type: "Linear" | "Quadratic" | "Exponential";
  toolTip?: string;
};
