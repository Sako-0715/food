import React from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export const HeroSection: React.FC = () => {
  const scrollToSteps = () => {
    const stepsElement = document.getElementById('steps-section');
    if (stepsElement) {
      stepsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* 背景の装飾エフェクト */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* バッジ */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
          {/* インラインスタイルでサイズを完全に固定 */}
          <ShieldCheckIcon
            style={{
              width: '20px',
              height: '20px',
              minWidth: '20px',
              minHeight: '20px',
            }}
            className="text-blue-400 shrink-0"
          />
          <span>公式対応・安心の簡単ガイド</span>
        </div>

        {/* メインキャッチコピー */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white">
          Google Payで
          <span className="text-blue-400">もっと簡単・スムーズ</span>に
          <br className="hidden sm:inline" />
          購入・お申し込みを完了する方法
        </h1>

        {/* サブコピー */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          「決済方法で迷いたくない」「スマホからサクッと安全に購入したい」方へ。
          画面の操作手順を分かりやすくステップ順に徹底解説します。
        </p>

        {/* 特徴のハイライト（3つのメリットなど） */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left text-sm text-slate-200">
          <div className="flex items-center gap-2 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
            <CheckCircleIcon
              style={{
                width: '20px',
                height: '20px',
                minWidth: '20px',
                minHeight: '20px',
              }}
              className="text-blue-400 shrink-0"
            />
            <span>最短1分で完了</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
            <CheckCircleIcon
              style={{
                width: '20px',
                height: '20px',
                minWidth: '20px',
                minHeight: '20px',
              }}
              className="text-blue-400 shrink-0"
            />
            <span>面倒な入力が不要</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
            <CheckCircleIcon
              style={{
                width: '20px',
                height: '20px',
                minWidth: '20px',
                minHeight: '20px',
              }}
              className="text-blue-400 shrink-0"
            />
            <span>スマホ対応で安心</span>
          </div>
        </div>

        {/* アクションボタン */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToSteps}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-6 text-base rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>購入手順を見る</span>
            <ArrowDownIcon
              style={{
                width: '16px',
                height: '16px',
                minWidth: '16px',
                minHeight: '16px',
              }}
              className="text-white shrink-0 animate-bounce"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
