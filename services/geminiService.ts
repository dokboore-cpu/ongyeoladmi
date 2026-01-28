import { GoogleGenAI } from "@google/genai";

export const getLegalAdvice = async (prompt: string) => {
  // Vite의 define으로 주입된 process.env.API_KEY를 직접 사용
  const apiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey === "") {
    console.error("Vercel 환경 변수에 API_KEY가 설정되지 않았거나 빌드 타임에 주입되지 않았습니다.");
    return "현재 시스템 설정 문제로 AI 상담이 불가능합니다. 잠시 후 다시 시도해 주시거나 대표 번호로 문의해 주세요.";
  }

  // 매 요청마다 새로운 인스턴스 생성 (최신 환경 변수 반영 및 안정성)
  const ai = new GoogleGenAI({ apiKey });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `당신은 '온결행정사사무소'의 전문 행정사 비서입니다. 
        위치: 부산광역시 사상구 (사상역 인근).
        전문 분야: 행정심판, 인허가 대행, 법인 설립, 출입국 행정.
        말투: 전문적이고 신뢰감 있으며 친절하게 답변하세요.
        언어: 반드시 한국어로 답변하세요.
        답변 가이드: 일반적인 행정 절차를 설명하되, 구체적인 상담 예약은 반드시 홈페이지에 명시된 대표 번호(010-8114-4300)로 안내하세요.`,
        temperature: 0.7,
      },
    });

    // response.text는 getter이므로 호출하지 않고 속성으로 접근
    const responseText = response.text;
    
    if (!responseText) {
      throw new Error("API로부터 빈 응답을 받았습니다.");
    }

    return responseText;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // 할당량 초과나 인증 에러 등 구체적인 에러 대응
    if (error?.message?.includes('429')) {
      return "죄송합니다. 현재 상담 요청이 너무 많습니다. 잠시 후 다시 시도해 주시거나 대표 번호(010-8114-4300)로 직접 전화 주시면 감사하겠습니다.";
    }
    
    return "죄송합니다. 현재 AI 비서가 잠시 휴식 중입니다. 잠시 후 다시 시도해 주시거나 대표 번호(010-8114-4300)로 문의해 주세요.";
  }
};