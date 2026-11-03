import { getTodo } from "../../../../lib/todos";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function TodoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const todo = await getTodo(id);

  if (!todo) {
    notFound();
  }

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "25%",
        background: "white",
        border: "2px solid black",
        padding: "30px",
        zIndex: 10,
      }}
    >
      <h2>Todo Details</h2>

      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Done: {String(todo.done)}</p>

      <Link href="/todos">Close</Link>
    </div>
  );
}