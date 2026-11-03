"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
const router = useRouter();

async function handleLogin() {
try {
const response = await fetch("/api/login", {
method: "POST",
});

  if (!response.ok) {
    alert("Login failed!");
    return;
  }

  alert("Login successful!");
  router.push("/dashboard");
} catch (error) {
  alert("Could not connect to login API.");
}

}

return ( <main> <h1>Login</h1> <button onClick={handleLogin}>Login</button> </main>
);
}
