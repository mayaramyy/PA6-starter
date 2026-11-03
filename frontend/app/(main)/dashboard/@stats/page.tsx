import { getTodos } from "../../../lib/todos";

export default async function StatsPage() {
  const todos = await getTodos();

  const total = todos.length;

  const done = todos.filter((todo: any) => todo.done).length;

  const open = total - done;

  return (
    <div>
      <p>Total: {total}</p>
      <p>Done: {done}</p>
      <p>Open: {open}</p>
    </div>
  );
}