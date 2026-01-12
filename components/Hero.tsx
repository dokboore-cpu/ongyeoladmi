
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Professional Office Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-emerald-500"></span>
            <span className="text-emerald-400 font-semibold text-sm tracking-widest uppercase">Professional Administrative Attorney</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            당신의 정당한 <br />
            <span className="text-emerald-400">권익을 수호하는</span> <br />
            최고의 행정 파트너.
          </h1>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg font-light">
            행정 심판부터 인허가 대행까지, <br />
            온결행정사사무소가 전문성과 정직함으로 <br /> 
            의뢰인의 든든한 버팀목이 되겠습니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="tel:010-9961-0700" 
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 group shadow-xl shadow-emerald-900/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              010-9961-0700 상담예약
            </a>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              주요 서비스 안내
            </button>
          </div>

          <div className="flex flex-wrap gap-8 text-slate-400 text-sm border-t border-white/10 pt-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>국가공인 행정사 자격 보유</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              <span>실시간 비대면 상담 가능</span>
            </div>
          </div>
        </div>

        {/* Visual Trust Element: Work Desk Image and Direct Contact */}
        <div className="relative lg:ml-auto w-full max-w-lg">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group bg-slate-900/50">
            {/* 인물이 아닌, 책상에서 서류 업무를 보는 전문적인 이미지로 교체 */}
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000" 
              alt="Administrative Professional at Work" 
              className="w-full h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
            
            {/* Floating Phone Card */}
            <div className="absolute bottom-8 left-8 right-8 glass-morphism p-6 rounded-2xl border border-white/20 shadow-2xl transform transition-all group-hover:-translate-y-2">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Expert Service</p>
              <h4 className="text-white text-sm font-medium mb-2 opacity-80">대표 행정사 직통 번호</h4>
              <a href="tel:010-9961-0700" className="text-white text-3xl font-black tracking-tight flex items-center gap-3 hover:text-emerald-400 transition-colors">
                010-9961-0700
                <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center animate-pulse">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.45 2.33.69 3.58.69a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.24 2.46.69 3.58a1 1 0 01-.27 1.11l-2.2 2.2z" /></svg>
                </div>
              </a>
            </div>
          </div>

          {/* Decorative Blur Backgrounds */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600/30 blur-3xl rounded-full z-0 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full z-0"></div>
          
          {/* Badge */}
          <div className="absolute top-12 -left-8 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-slate-100">
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-none mb-1">Administrative</p>
              <p className="text-sm font-black text-slate-900 leading-none">온결행정사사무소</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
