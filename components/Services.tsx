
import React, { useState } from 'react';

interface ServiceDetail {
  id: string;
  title: string;
  motto: string;
  tasks: string[];
  // Fix: Make target optional to resolve 'Property target is missing' error in serviceDetails for services using features
  target?: string[];
  features?: string[];
  process: { step: string; desc: string }[];
  img: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
  'administrative-appeals': {
    id: 'administrative-appeals',
    title: '행정심판 & 구제',
    motto: '부당한 행정처분으로 인한 권익 침해, 온결행정사사무소가 끝까지 함께 해결합니다.',
    tasks: [
      '영업정지·과징금 처분 구제',
      '허가·등록 취소 처분에 대한 불복',
      '과태료·이행강제금 감경 및 취소',
      '행정처분 사전통지 의견서 제출',
      '행정심판 청구서 작성 및 대리',
      '행정청 이의신청·재심청구 지원'
    ],
    target: [
      '억울한 행정처분을 받은 사업자·개인',
      '소송 전, 신속한 행정적 구제를 원하시는 분',
      '복잡한 절차와 서류 준비가 부담스러운 경우'
    ],
    process: [
      { step: '01', desc: '사안 검토 및 상담' },
      { step: '02', desc: '구제 가능성 분석' },
      { step: '03', desc: '서류 작성 및 제출' },
      { step: '04', desc: '진행 상황 관리 및 결과 안내' }
    ],
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200'
  },
  'licensing': {
    id: 'licensing',
    title: '인허가 전문 대행',
    motto: '복잡하고 까다로운 인허가 절차, 전문 행정사가 원스톱으로 대행합니다.',
    tasks: [
      '공장설립 승인 및 등록',
      '식품위생업 영업신고·허가',
      '건설업·전문건설업 등록',
      '학원·체육시설·의료 관련 인허가',
      '환경·위생·안전 관련 신고',
      '각종 변경·갱신·양도양수 신고'
    ],
    features: [
      '관할 행정청 기준에 맞춘 맞춤 서류',
      '보완·반려 최소화',
      '일정 관리까지 책임지는 실무 중심 대행'
    ],
    process: [
      { step: '01', desc: '업종 및 요건 검토' },
      { step: '02', desc: '현장·서류 사전 점검' },
      { step: '03', desc: '인허가 서류 작성' },
      { step: '04', desc: '행정청 접수 및 보완 대응' },
      { step: '05', desc: '최종 허가 완료' }
    ],
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200'
  },
  'corporate': {
    id: 'corporate',
    title: '법인 인증 및 설립',
    motto: '법인 설립부터 각종 인증까지, 기업 성장의 시작을 함께합니다.',
    tasks: [
      '주식회사·유한회사 설립',
      '비영리법인·사단·재단법인 설립',
      '메인비즈·이노비즈 인증',
      '벤처기업 인증',
      '기업부설연구소 설립',
      '정책자금·지원사업 연계 자문'
    ],
    target: [
      '처음 법인을 설립하는 예비 창업자',
      '인증을 통해 신뢰도와 경쟁력을 높이고 싶은 기업',
      '행정 절차에 시간 투입이 어려운 대표님'
    ],
    process: [
      { step: '01', desc: '설립 목적 및 요건 상담' },
      { step: '02', desc: '정관·서류 작성' },
      { step: '03', desc: '설립 등기 및 신고' },
      { step: '04', desc: '인증 신청 및 사후 관리' }
    ],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
  },
  'immigration': {
    id: 'immigration',
    title: '출입국 및 외국인',
    motto: '출입국·체류·고용 문제, 전문 행정사가 정확하게 해결합니다.',
    tasks: [
      '각종 비자 발급 (E-7, F-2, F-5 등)',
      '외국인 체류자격 변경·연장',
      '영주권 및 국적 취득',
      '외국인 근로자 초청 및 고용 신고',
      '다문화·외국인 행정 컨설팅'
    ],
    target: [
      '외국인 직원 채용이 필요한 기업',
      '장기 체류·영주를 계획 중인 외국인',
      '출입국 규정 변경으로 혼란을 겪는 경우'
    ],
    process: [
      { step: '01', desc: '체류 자격 및 요건 검토' },
      { step: '02', desc: '필요 서류 안내 및 작성' },
      { step: '03', desc: '출입국청 접수' },
      { step: '04', desc: '보완 대응 및 결과 안내' }
    ],
    img: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=1200'
  }
};

const services = [
  {
    id: 'administrative-appeals',
    title: '행정 심판 & 구제',
    desc: '부당한 영업정지, 이행강제금, 행정 처분에 대한 전문적인 구제 절차를 진행합니다.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  },
  {
    id: 'licensing',
    title: '인허가 전문 대행',
    desc: '공장 등록, 식품 위생, 건설업 면허 등 복잡한 관공서 인허가 업무를 원스톱으로 처리합니다.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'corporate',
    title: '법인 인증 및 설립',
    desc: '주식회사 설립, 비영리 법인, 메인비즈/벤처기업 인증 등 기업 성장의 파트너가 되어 드립니다.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'immigration',
    title: '출입국 및 외국인',
    desc: '비자 발급(E7, F2, F5 등), 영주권 신청, 국적 취득 및 외국인 고용 컨설팅을 제공합니다.',
    img: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?auto=format&fit=crop&q=80&w=600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const detail = selectedId ? serviceDetails[selectedId] : null;

  const handleConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      setSelectedId(null);
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4">Core Expertise</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              행정 법률의 문턱을 <br /> 낮추고 결과를 만듭니다.
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm">
            온결은 단순 대행을 넘어, 의뢰인의 비즈니스와 삶이 안정될 수 있도록 법률적 근거를 바탕으로 최고의 전략을 수립합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => (
            <div 
              key={s.id} 
              onClick={() => setSelectedId(s.id)}
              className="group flex flex-col h-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {s.desc}
                </p>
                <div className="text-emerald-600 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  자세히 보기
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAIL VIEW OVERLAY */}
      {detail && (
        <div className="fixed inset-0 z-[60] bg-white overflow-y-auto animate-in fade-in slide-in-from-right duration-500">
          <div className="relative min-h-screen flex flex-col">
            
            {/* Header Area */}
            <div className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
              <img src={detail.img} className="absolute inset-0 w-full h-full object-cover" alt={detail.title} />
              <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="mb-8 flex items-center gap-2 text-emerald-400 font-bold hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  목록으로 돌아가기
                </button>
                <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">{detail.title}</h1>
                <p className="text-xl md:text-2xl font-light text-slate-200 max-w-3xl leading-relaxed">
                  {detail.motto}
                </p>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow bg-white py-20">
              <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
                
                {/* Left: Main Tasks & Targets */}
                <div className="lg:col-span-8 space-y-16">
                  
                  {/* Tasks Section */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-2 h-8 bg-emerald-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-slate-900">주요 업무 범위</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {detail.tasks.map((task, idx) => (
                        <div key={idx} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors">
                          <svg className="w-6 h-6 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                          <span className="text-slate-700 font-medium">{task}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Features or Target Section */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                      <h2 className="text-2xl font-bold text-slate-900">
                        {detail.features ? '온결만의 강점' : '이런 분들께 필요합니다'}
                      </h2>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                      {(detail.features || detail.target || []).map((item, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                          <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                          <span className="text-slate-600 text-lg">{item}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Right: Process & CTA */}
                <div className="lg:col-span-4 space-y-10">
                  <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl">
                    <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                      업무 진행 절차
                    </h3>
                    <div className="space-y-6">
                      {detail.process.map((p, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                          {idx < detail.process.length - 1 && (
                            <div className="absolute left-[15px] top-8 w-[2px] h-10 bg-slate-700"></div>
                          )}
                          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 z-10">
                            {p.step}
                          </div>
                          <p className="text-slate-300 font-medium text-lg pt-0.5">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={handleConsultation}
                      className="w-full mt-12 bg-white text-slate-900 py-4 rounded-xl font-bold hover:bg-emerald-500 hover:text-white transition-all transform hover:scale-105"
                    >
                      상담 예약하기
                    </button>
                  </div>
                  
                  <div className="p-8 border border-slate-200 rounded-3xl text-center">
                    <p className="text-slate-500 text-sm mb-4">대표 행정사 직통 상담</p>
                    <p className="text-2xl font-black text-slate-900 mb-2">010.8114.4300</p>
                    <p className="text-xs text-slate-400">평일 09:00 - 18:00 (주말 예약 상담 가능)</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simple Footer */}
            <div className="bg-slate-50 py-10 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="text-slate-400 hover:text-emerald-600 transition-colors font-medium flex items-center gap-2 mx-auto"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                  다른 업무 더 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
