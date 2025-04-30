import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const { prompt } = body;

  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
  }

  try {
    const openRouterResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          // "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
          "X-Title": "Prompt Helper", // Optional. Site title for rankings on openrouter.ai.
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "microsoft/mai-ds-r1:free",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await openRouterResponse.json();
    const finalData = data.choices?.[0]?.message ?? "RED RED RED";

    {
      /* FIXME: витягнути з data тільки те, що потрібно, а потім повернути це, замість data */
    }

    return NextResponse.json({ optimizedPrompt: finalData });
  } catch (error) {
    console.error("OpenRouter error: ", error);
    return NextResponse.json(
      { error: "Failed to fetch from OpenRouter" },
      { status: 500 }
    );
  }
}
