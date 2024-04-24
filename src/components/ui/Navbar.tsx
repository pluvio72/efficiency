"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex h-[5vh] items-center px-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-extrabold">efficiency</a>
      </div>
      <div className="flex-none gap-x-8 flex">
        <Link
          href="/browse"
          className="hover:bg-neutral-800 py-2 px-4 rounded-md font-light"
        >
          Categories
        </Link>
        <Link
          href="/compare"
          className="hover:bg-neutral-800 py-2 px-4 rounded-md font-light"
        >
          Articles
        </Link>
      </div>
    </div>
  );
}
