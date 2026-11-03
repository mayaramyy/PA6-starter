"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        style={{ fontWeight: pathname === "/" ? "bold" : "normal" }}
      >
        Home
      </Link>
      {" | "}

      <Link
        href="/todos"
        style={{ fontWeight: pathname.startsWith("/todos") ? "bold" : "normal" }}
      >
        Todos
      </Link>
      {" | "}

      <Link
        href="/todos/new"
        style={{ fontWeight: pathname === "/todos/new" ? "bold" : "normal" }}
      >
        Create Todo
      </Link>
      {" | "}

      <Link
        href="/dashboard"
        style={{ fontWeight: pathname.startsWith("/dashboard") ? "bold" : "normal" }}
      >
        Dashboard
      </Link>
    </nav>
  );
}