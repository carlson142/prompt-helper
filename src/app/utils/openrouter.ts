// prettier-ignore
{ /* ОТРИМАННЯ ЗГЕНЕРОВАНОГО ПРОМПТА */ }

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

  if (!response.ok) {
    throw new Error("Failed to fetch optimized prompt");
  }

  const data = await response.json();
  return data.optimizedPrompt;
}

// prettier-ignore
{/* ОТРИМАННЯ СТВОРЕНОГО ПРОМПТА */}

export async function fetchCreatedPrompt(dataForPrompt: any): Promise<string> {
  const response = await fetch("/api/createdPrompt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ createdPrompt: dataForPrompt }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch created prompt");
  }

  const res = await response.json();

  return res.createdFinalPrompt;
}
