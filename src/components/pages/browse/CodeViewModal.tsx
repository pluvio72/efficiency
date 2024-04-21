"use client";

import { ClipboardDocumentIcon } from "@heroicons/react/16/solid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { bubbleSort } from "@/util/algorithm-runner/data/SortingAlgorithms";

export default function CodeViewModal({ func }: Props) {
  const copyToClipboard = () => {
    console.log(bubbleSort.toString());
    // navigator.clipboard.writeText(bubbleSort.toString());
  };

  return (
    <dialog id="code_view" className="modal">
      <div className="modal-box w-[60%] p-0">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <span
            className="absolute right-12 top-3 text-sm flex items-center cursor-pointer"
            onClick={copyToClipboard}
          >
            Copy <ClipboardDocumentIcon className="h-4 w-4" />
          </span>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <SyntaxHighlighter
          customStyle={{ padding: 30, paddingLeft: 25 }}
          language="javascript"
          style={atomOneDark}
        >
          {func.toString()}
        </SyntaxHighlighter>
      </div>
    </dialog>
  );
}

interface Props {
  func: (data: number[]) => void;
}
