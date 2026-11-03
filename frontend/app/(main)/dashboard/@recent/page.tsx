import { getTodos } from "../../../lib/todos";

export default async function RecentPage() {
  const todos = await getTodos();

  const recent = todos.slice(-3).reverse();

  return (
    <ul>
      {recent.map((todo: any) => (
        <li key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}