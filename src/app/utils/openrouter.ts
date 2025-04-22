export async function fetchOptimizedPrompt(
  rawUserPrompt: string
): Promise<string> {
  const response = await fetch("/api/optimize", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: rawUserPrompt }),
  });

  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch optimized prompt");
  }

  const data = await response.json();
  return data.optimizedPrompt;
}
