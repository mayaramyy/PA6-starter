"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewTodo() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function createTodo(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    const response = await fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      const data = await response.json();
      setError(data.message || data.error || "Failed to create todo");
      return;
    }

    router.push("/todos");
    router.refresh();
  }

  return (
    <div>
      <h1>Create Todo</h1>

      <form onSubmit={createTodo}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />

        <button type="submit">Create</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}