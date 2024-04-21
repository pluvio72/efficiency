"use client";

import { ClipboardDocumentIcon } from "@heroicons/react/16/solid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { bubbleSort } from "@/util/algorithm-runner/data/SortingAlgorithms";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

export default function CodeViewModal({ open, setOpen, func }: Props) {
  const copyToClipboard = () => {
    console.log(bubbleSort.toString());
    // navigator.clipboard.writeText(bubbleSort.toString());
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[60%]">
        <DialogHeader>
          <span
            className="absolute right-12 top-3 text-sm flex items-center cursor-pointer"
            onClick={copyToClipboard}
          >
            Copy <ClipboardDocumentIcon className="h-4 w-4" />
          </span>
        </DialogHeader>
        <SyntaxHighlighter
          customStyle={{ padding: 30, paddingLeft: 25 }}
          language="javascript"
          style={atomOneDark}
        >
          {func.toString()}
        </SyntaxHighlighter>
      </DialogContent>
    </Dialog>
  );
}

interface Props {
  open: boolean;
  setOpen: (newVal: boolean) => void;
  func: (data: number[]) => void;
}
