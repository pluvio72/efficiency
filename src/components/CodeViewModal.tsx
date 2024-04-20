"use client";

import { ClipboardDocumentIcon } from "@heroicons/react/16/solid";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeViewModal() {
  const copyToClipboard = () => {};

  return (
    <dialog id="code_view" className="modal">
      <div className="modal-box w-[60%] p-0">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <span
            className="absolute right-10 top-3 text-sm flex items-center cursor-pointer"
            onClick={copyToClipboard}
          >
            Copy <ClipboardDocumentIcon className="h-4 w-4" />
          </span>
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <SyntaxHighlighter language="javascript" style={atomOneDark}>
          {`
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length - i - 1; j++) {
      if (data[j] > data[j + 1]) {
        var temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
          `}
        </SyntaxHighlighter>
      </div>
    </dialog>
  );
}
