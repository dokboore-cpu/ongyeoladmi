
import React from 'react';

const About: React.FC = () => {
  const NAVER_MAP_URL = "https://map.naver.com/v5/search/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%82%AC%EC%83%81%EA%B5%AC%20%EA%B4%91%EC%9E%A5%EB%A1%9C37%EB%B2%88%EA%B8%B8%2066";

  return (
    <section id="about" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Map Visual Element */}
          <div className="relative group">
            <div className="absolute -inset-10 bg-emerald-500/10 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
            
            <a 
              href={NAVER_MAP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative z-10 w-full aspect-square overflow-hidden rounded-3xl shadow-2xl border border-slate-200 transition-transform duration-500 hover:scale-[1.02]"
            >
              {/* Stylized Map Background */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="사무소 위치 지도" 
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100"
              />
              
              {/* Map Overlay UI */}
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
              
              {/* Location Marker Animation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                  <div className="absolute -inset-4 bg-emerald-500 rounded-full animate-ping opacity-25"></div>
                  <div className="relative w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* View in Naver Maps Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-slate-200 flex items-center gap-2 transition-all group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-500">
                <span className="text-sm font-bold">네이버 지도로 보기</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            {/* Address Info Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-8 rounded-2xl shadow-xl max-w-xs border border-slate-100 hidden md:block transition-transform duration-500 group-hover:-translate-y-2">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                  </div>
                  <h5 className="font-bold text-slate-900">상담 오시는 길</h5>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed">
                  부산광역시 사상구 광장로37번길 66 <br />
                  <span className="text-emerald-600 font-semibold mt-1 inline-block">사상역 5번 출구 도보 5분</span>
               </p>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:pl-10">
            <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-4">Office & People</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
               정직과 실력으로 <br /> 증명하는 행정 전문가.
            </h3>
            <div className="space-y-8">
               <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-slate-900 mb-2">행정 전문가 상담</h4>
                     <p className="text-slate-500 leading-relaxed">
                        최신 판례와 법리적 해석을 바탕으로 행정 심판에서 독보적인 논리를 구축합니다.
                     </p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-slate-900 mb-2">기업의 동반자</h4>
                     <p className="text-slate-500 leading-relaxed">
                        지역적 특성을 이해하고 지자체와의 원활한 소통을 통해 인허가 절차를 단축시킵니다.
                     </p>
                  </div>
               </div>
            </div>
            
            <div className="mt-12 pt-10 border-t border-slate-200 flex items-center gap-6">
               <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-2xl">
                  OG
               </div>
               <div>
                  <h5 className="text-xl font-bold text-slate-900">대표 행정사 채 영 재 </h5>
                  <p className="text-emerald-600 font-semibold mb-2">행정사 / 공인중개사</p>
                  <p className="text-sm text-slate-500">
                     "의뢰인의 정당한 권리가 훼손되지 않도록 <br />
                     처음부터 끝까지 책임지고 함께하겠습니다."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
