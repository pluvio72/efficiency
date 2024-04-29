import { DataStructure } from "@/types";
import Array from "./array.mdx";
import LinkedList from "./linked-list.mdx";
import HashTable from "./hash-table.mdx";
import Stack from "./stack.mdx";
import Queue from "./queue.mdx";
import Tree from "./tree.mdx";

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
  {
    key: "hash_table",
    name: "Hash Table",
    type: "",
    content: HashTable,
  },
  {
    key: "stack",
    name: "Stack",
    type: "",
    content: Stack,
  },
  {
    key: "queue",
    name: "Queue",
    type: "",
    content: Queue,
  },
  {
    key: "tree",
    name: "Tree",
    type: "",
    content: Tree,
  },
];
