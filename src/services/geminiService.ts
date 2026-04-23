import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export interface Feedback {
  score: number;
  grammar: string[];
  vocabulary: { original: string; suggestion: string; reason: string }[];
  overall: string;
}

export async function analyzeEssay(essay: string, taskType: string, prompt: string): Promise<Feedback> {
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `You are an expert IELTS Writing Examiner. 
  Analyze the student's essay based on the prompt and task type (${taskType}).
  Focus heavily on "Lexical Resource" (Vocabulary).
  Provide feedback in JSON format.
  Include:
  - Estimated score (0-9).
  - Grammar points to improve (list of strings).
  - Vocabulary suggestions (list of objects with original word, high-level/idiomatic suggestion, and briefly why it's better).
  - A concise overall summary.`;

  const response = await ai.models.generateContent({
    model,
    contents: `Task: ${taskType}\nPrompt: ${prompt}\n\nEssay:\n${essay}`,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER },
          grammar: { type: Type.ARRAY, items: { type: Type.STRING } },
          vocabulary: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                original: { type: Type.STRING },
                suggestion: { type: Type.STRING },
                reason: { type: Type.STRING }
              }
            }
          },
          overall: { type: Type.STRING }
        },
        required: ["score", "grammar", "vocabulary", "overall"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
}

export async function analyzeSentence(sentence: string, context: string, targetVocab: string[]): Promise<{
  feedback: string;
  score: number;
  usedVocab: string[];
}> {
  const model = "gemini-3-flash-preview";
  const systemInstruction = `You are an IELTS tutor. 
  Check the sentence for:
  1. Grammar and naturalness.
  2. Relevance to the context: ${context}.
  3. Usage of target vocabulary: ${targetVocab.join(", ")}.
  Provide feedback in JSON. 
  - score: 0-9.
  - feedback: short, encouraging but professional critique.
  - usedVocab: list of phrases from target vocab actually used (or close variations).`;

  const response = await ai.models.generateContent({
    model,
    contents: `Sentence: ${sentence}`,
    config: {
      systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER },
          feedback: { type: Type.STRING },
          usedVocab: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ["score", "feedback", "usedVocab"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
}
