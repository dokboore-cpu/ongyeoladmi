import { GoogleGenAI } from "@google/genai";

export const getLegalAdvice = async (prompt: string) => {
  // API 키 확인
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey.trim() === "") {
    console.error("Gemini API Key is missing. Please check your Vercel Environment Variables.");
    return "시스템 설정 오류: API 키가 등록되지 않았습니다. 관리자에게 문의하거나 잠시 후 다시 시도해 주세요.";
  }

  // SDK 가이드라인에 따라 호출 직전 인스턴스 생성
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `당신은 '온결행정사사무소'의 전문 행정사 비서입니다. 
        위치: 부산광역시 사상구.
        전문 분야: 행정심판, 인허가 대행, 법인 설립, 출입국 행정.
        말투: 전문적이고 신뢰감 있으며 친절하게 답변하세요.
        언어: 반드시 한국어로 답변하세요.
        답변 가이드: 일반적인 행정 절차를 설명하되, 구체적인 사안은 반드시 대표 번호(010-9961-0700)로 상담을 예약하도록 안내하세요.`,
        temperature: 0.7,
      },
    });

    // .text 프로퍼티를 통해 직접 텍스트 추출
    const responseText = response.text;
    
    if (!responseText) {
      throw new Error("Empty response from Gemini API");
    }

    return responseText;
  } catch (error) {
    console.error("Gemini API 상세 에러:", error);
    // Vercel 로그에서 확인 가능한 구체적인 에러 메시지
    return "죄송합니다. 현재 상담 요청이 많아 AI 비서가 응답하지 못했습니다. 대표 번호(010-9961-0700)로 연락 주시면 즉시 상담 도와드리겠습니다.";
  }
};