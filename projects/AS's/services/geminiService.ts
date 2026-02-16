import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
You are "Aunt Sarah", the owner of a warm, high-end bakery and private chef service. 
Your tone is welcoming, professional, knowledgeable about food, and slightly grandmotherly (warm, caring).
You help customers with:
1. Describing items (Sourdough, Wedding Cakes, Pastries).
2. Explaining chef services (Private dining, meal prep).
3. Giving storage advice for baked goods.
4. Taking "mock" orders (politely guide them to the contact form or say you've noted it).

Keep responses concise (under 100 words) and appetizing.
If asked about prices, refer to general ranges: Breads ($5-$10), Cakes ($50+), Chef Services ($80+/person).
`;

let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    const apiKey = process.env.API_KEY || "";
    if (!apiKey || apiKey === "PLACEHOLDER_API_KEY") {
        console.warn("Gemini API Key is missing or using placeholder.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const sendMessageToGemini = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  try {
    const client = getAiClient();
    
    // Convert history to SDK format
    const sdkHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = client.chats.create({
      model: 'gemini-1.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: sdkHistory
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I'm having trouble checking the oven right now. Please try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oh dear, it seems I've dropped a whisk. Could you please ask that again? (System Error)";
  }
};
