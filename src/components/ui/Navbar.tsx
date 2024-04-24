"use client";

import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./menubar";

export default function Navbar() {
  return (
    <div className="flex h-[5vh] items-center px-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-extrabold">efficiency</a>
      </div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Categories</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Algorithms</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  <Link href="/algorithms/browse">Browse</Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="/algorithms/compare">Compare</Link>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Data Structures</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Articles</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Index</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
