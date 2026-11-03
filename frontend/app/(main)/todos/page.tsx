import Link from "next/link";
import { getTodos } from "../../lib/todos";

export default async function TodosPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;

  const todos = await getTodos();

  const filteredTodos = todos.filter((todo: any) => {
    if (status === "open") {
      return !todo.done;
    }

    if (status === "done") {
      return todo.done;
    }

    return true;
  });

  return (
    <div>
      <h1>All Todos</h1>

      <div>
        <Link href="/todos">All</Link> {" | "}
        <Link href="/todos?status=open">Open</Link> {" | "}
        <Link href="/todos?status=done">Done</Link>
      </div>

      <br />

      <Link href="/todos/new">Create New Todo</Link>

      <ul>
        {filteredTodos.map((todo: any) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`}>
              {todo.title}
            </Link>

            {" - "}

            {todo.done ? "Completed" : "Open"}
          </li>
        ))}
      </ul>
    </div>
  );
}