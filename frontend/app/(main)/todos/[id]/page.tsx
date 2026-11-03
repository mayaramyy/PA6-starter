import Link from "next/link";
import { notFound } from "next/navigation";
import { getTodo } from "../../../lib/todos";
import DeleteButton from "./DeleteButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const todo = await getTodo(id);

  return {
    title: todo ? todo.title : "Todo Not Found",
  };
}

export default async function TodoDetails({
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
    <div>
      <h1>Todo Details</h1>

      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Done: {todo.done ? "Yes" : "No"}</p>

      <DeleteButton id={id} />

      <br />

      <Link href="/todos">Back to Todos</Link>
    </div>
  );
}