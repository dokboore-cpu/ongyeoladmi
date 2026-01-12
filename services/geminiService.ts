
import { GoogleGenAI } from "@google/genai";

// Fix: Initialize GoogleGenAI using process.env.API_KEY directly as required by the SDK guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getLegalAdvice = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are a professional administrative attorney (행정사) assistant for 'Ongyeol Administrative Office' (온결행정사사무소). 
        Location: Busan, Sasang-gu, South Korea.
        Specialties: Administrative appeals (행정심판), licensing (인허가), corporate setup (법인설립), and immigration (출입국).
        Tone: Professional, helpful, reliable, and concise. 
        Language: Always respond in Korean. 
        Goal: Provide basic information about administrative procedures and encourage users to book a consultation for detailed legal advice. 
        Do not provide definitive legal judgments, but explain general procedures and criteria.`,
        temperature: 0.7,
      },
    });

    // The .text property directly returns the generated string
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "죄송합니다. 현재 AI 비서가 잠시 휴식 중입니다. 잠시 후 다시 시도해 주시거나 대표 번호로 문의해 주세요.";
  }
};