import { DataStructure } from "@/types";
import Array from "./array.mdx";
import LinkedList from "./linked-list.mdx";

export const DATA_STRUCTURES: DataStructure[] = [
  {
    key: "array",
    name: "Array",
    type: "Linear",
    content: Array,
  },
  {
    key: "linked_list",
    name: "Linked List",
    type: "Linear",
    content: LinkedList,
  },
];
