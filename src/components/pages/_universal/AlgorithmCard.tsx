import Tag from "@/components/ui/Tag";
import { Algorithm } from "@/types";
import Tex from "@matejmazur/react-katex";
import clsx from "clsx";

export default function AlgorithmCard({
  parentClassName,
  isSelected,
  details,
  onClick,
}: Props) {
  const name = details.name.split(" ");

  return (
    <div
      className={clsx(
        "flex flex-row justify-evenly transition cursor-pointer rounded-lg hover:bg-accent border px-6 py-2",
        parentClassName,
        isSelected && "bg-accent"
      )}
      onClick={onClick}
    >
      <div className="flex flex-col justify-center border-r w-full">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {name[0]}
        </h4>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {name[1]}
        </h4>
      </div>
      <div className="flex flex-col items-center justify-evenly border-r w-full">
        <div className="font-light text-sm text-muted-foreground">
          Description
        </div>
        <div className="text-sm">
          {details.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full border-l">
        <div className="font-light text-sm text-muted-foreground">
          Complexity
        </div>
        <div className="stat-value text-3xl">
          <Tex>{details.complexity.bigO.value}</Tex>
        </div>
      </div>
    </div>
  );
}

interface Props {
  parentClassName?: string;
  isSelected?: boolean;
  onClick?: () => void;
  details: Algorithm;
}
