import { getTodos } from "../../lib/todos";

export async function GET() {
  try {
    const todos = await getTodos();

    const total = todos.length;

    const done = todos.filter((todo: any) => todo.done).length;

    const open = total - done;

    return Response.json({
      total,
      done,
      open,
    });
  } catch {
    return Response.json(
      { error: "Failed to get statistics" },
      { status: 500 }
    );
  }
}