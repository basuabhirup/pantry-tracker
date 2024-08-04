export const promptAI = async (prompt: string): Promise<string> => {
  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3-8b-instruct:free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    const json = await res.json();
    return json.choices[0].message.content as string;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err);
      return err.message;
    } else {
      console.error("An unknown error occurred", err);
      return `Unknown error:, ${err}`;
    }
  }
};
