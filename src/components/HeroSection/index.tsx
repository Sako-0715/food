import React from 'react';
// import { Button } from '@/components/ui/button';
// import {
//   ArrowDownIcon,
//   CheckCircleIcon,
//   ShieldCheckIcon,
// } from '@heroicons/react/24/outline';
import firstSectionImage from '@/assets/firstSection.png';
import firstBanner from '@/assets/firstBanner.png';

export const HeroSection: React.FC = () => {
  //   const scrollToSteps = () => {
  //     const stepsElement = document.getElementById('steps-section');
  //     if (stepsElement) {
  //       stepsElement.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   };

  return (
    <section className="relative overflow-hidden bg-white lg:bg-(--bg) text-slate-900 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none sm:max-w-2xl sm:left-auto sm:translate-x-0 sm:mx-auto">
        <img
          src={firstBanner}
          alt="キャンペーンバナー"
          style={{ aspectRatio: '375 / 123' }}
          className="w-full object-cover block sm:rounded-t-xl shadow-md lg:shadow-xl border-b-0 border-slate-200"
        />
        <img
          src={firstSectionImage}
          alt=""
          className="w-full h-auto object-cover block sm:rounded-b-xl shadow-md lg:shadow-xl border-t-0 border-slate-200"
        />
      </div>
    </section>
  );
};
