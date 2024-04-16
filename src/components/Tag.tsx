import clsx from "clsx";

// fix type extract to keys array type
const KEYS: { [key: string]: string } = {
  Sort: "badge-primary",
  Stable: "badge-secondary",
};

export default function Tag({ name }: Props) {
  return <div className={clsx("badge mx-1 mb-1", KEYS[name])}>{name}</div>;
}

interface Props {
  name: string;
}
