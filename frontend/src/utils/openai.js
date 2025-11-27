import OpenAI from 'openai';

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const openai = API_KEY ? new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true // Required for client-side usage
}) : null;

export const getOpenAIResponse = async (prompt, history = [], systemInstruction = "") => {
    if (!openai) {
        return "API key missing. Please set REACT_APP_OPENAI_API_KEY in your .env file.";
    }

    try {
        // Convert history to OpenAI format
        const messages = [
            { role: "system", content: systemInstruction },
            ...history.map(msg => ({
                role: msg.isBot ? "assistant" : "user",
                content: msg.text
            })),
            { role: "user", content: prompt }
        ];

        const completion = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-3.5-turbo",
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("OpenAI error:", error);
        return `Error: ${error.message}`;
    }
};
