const API_URL = process.env.API_URL;

export async function getTodos() {
  const response = await fetch(`${API_URL}/todos`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return response.json();
}

export async function getTodo(id: string) {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch todo");
  }

  return response.json();
}