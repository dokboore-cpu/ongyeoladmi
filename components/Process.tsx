
import React from 'react';

const steps = [
  {
    num: '01',
    title: '상담 및 사실관계 분석',
    desc: '의뢰인의 상황을 청취하고 관련 법령 및 판례를 통해 구제 가능성을 정밀하게 검토합니다.'
  },
  {
    num: '02',
    title: '전략 수립 및 로드맵 제시',
    desc: '가장 효율적이고 성공 확률이 높은 행정 절차와 구체적인 실행 계획을 제안합니다.'
  },
  {
    num: '03',
    title: '전문 서류 작성 및 접수',
    desc: '법률적 논리를 담은 청구서, 답변서 등 전문 서류를 작성하여 소관 관공서에 신속히 접수합니다.'
  },
  {
    num: '04',
    title: '결과 통보 및 사후 관리',
    desc: '진행 상황을 실시간 공유하며, 최종 결과 도출 후 필요한 사후 행정 절차까지 케어합니다.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-emerald-400 tracking-widest uppercase mb-4">Work Flow</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            체계적이고 투명한 업무 절차
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[1px] bg-emerald-500/20 z-0"></div>
              )}
              <div className="relative z-10 flex flex-col">
                <div className="w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-400 font-black text-xl mb-8 bg-slate-900 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col lg:flex-row items-center justify-between gap-10 backdrop-blur-sm">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-emerald-500 rounded-2xl flex items-center justify-center text-white animate-float">
               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <div>
              <h5 className="text-2xl font-bold text-white mb-2">실시간 상담이 필요하신가요?</h5>
              <p className="text-slate-400">카카오톡으로 문의하시면 담당 행정사가 가장 빠르게 답변해 드립니다.</p>
            </div>
          </div>
          
          <a 
            href="https://pf.kakao.com/_hbconsult" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#FEE500] text-[#191919] px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#FADB00] transition-all shadow-xl shadow-yellow-900/20 flex items-center justify-center gap-3 group"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.458 1.636 4.63 4.14 5.92-.15.55-.54 1.98-.62 2.27-.1.38.13.38.28.28.12-.08 1.93-1.31 2.68-1.82.5.07 1.01.11 1.52.11 4.97 0 9-3.134 9-7s-4.03-7-9-7z"/>
            </svg>
            카카오톡 상담하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
