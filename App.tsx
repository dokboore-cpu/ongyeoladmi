
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        
        {/* Contact CTA Strip */}
        <section id="contact" className="py-24 bg-emerald-600 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">지금 바로 전문가와 상의하세요.</h3>
                <p className="text-emerald-100 text-lg">초기 상담은 무료로 진행되며, 귀하의 고민에 명확한 해답을 드립니다.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:010-9961-0700" className="bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-3">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   전화 상담 예약
                </a>
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
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Floating AI Assistant Widget */}
      <AIAssistant />
    </div>
  );
};

export default App;
