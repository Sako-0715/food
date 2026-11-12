import React from "react";

/**
 * ファーストビュー内で自動再生のプロモーション動画を表示するコンポーネント。
 * 音声なし（ミュート）、ループ再生、モバイルのインライン再生対応の動画を配置します。
 */
export const FirstSectionVideo: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white lg:bg-(--bg) text-slate-900 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none sm:max-w-2xl sm:left-auto sm:translate-x-0 sm:mx-auto">
        <video
          src="/videos/firstSectionMovie.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-cover block sm:rounded-xl shadow-md lg:shadow-xl border border-slate-200"
        />
      </div>
    </section>
  );
};

export default FirstSectionVideo;
