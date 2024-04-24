import { CogIcon, PlayIcon } from "@heroicons/react/16/solid";

export default function ControlBar({ actions }: Props) {
  return (
    <div className="absolute bottom-10 flex gap-x-8">
      <div
        className="text-neutral-400 cursor-pointer flex items-center justify-center"
        onClick={actions.run}
      >
        <span className="mr-2">Run</span>
        <PlayIcon className="h-4 w-4" />
      </div>
      <div
        className="text-neutral-400 cursor-pointer flex items-center justify-center"
        // onClick={actions.options}
      >
        <span className="mr-2">Options</span>
        <CogIcon className="h-4 w-4" />
      </div>
    </div>
  );
}

interface Props {
  actions: {
    run: () => void;
  };
}
