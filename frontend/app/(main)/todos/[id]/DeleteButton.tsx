"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({
  id,
}: {
  id: string;
}) {
  const router = useRouter();

  async function deleteTodo() {
   const response = await fetch(`/api/todos/${id}`, {
  method: "DELETE",
});

    if (response.ok) {
      router.push("/todos");
      router.refresh();
    }
  }

  return (
    <button onClick={deleteTodo}>
      Delete Todo
    </button>
  );
  
}