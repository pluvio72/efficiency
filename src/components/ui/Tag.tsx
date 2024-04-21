import clsx from "clsx";
import { Badge } from "./badge";

// fix type extract to keys array type
const KEYS: { [key: string]: string } = {
  Sort: "badge-primary",
  Stable: "badge-secondary",
};

export default function Tag({ name }: Props) {
  return <Badge className={clsx("badge mx-1 mb-1", KEYS[name])}>{name}</Badge>;
}

interface Props {
  name: string;
}
