export type Algorithm = {
  key: string;
  name: string;
  tags: string[];
  complexity: {
    bigO: string;
    bestCase?: string;
    worstCase?: string;
  };
  description: string;
  strengths: string[];
  weaknesses: string[];
};
