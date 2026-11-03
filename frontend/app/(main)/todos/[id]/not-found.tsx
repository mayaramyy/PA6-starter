import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Todo Not Found!</h1>

      <p>This todo does not exist.</p>

      <Link href="/todos">Back to Todos</Link>
    </div>
  );
}