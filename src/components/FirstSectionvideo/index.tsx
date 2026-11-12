import React from "react";

/**
 * ファーストビュー内で自動再生のプロモーション動画を表示するコンポーネント。
 * 音声なし（ミュート）、ループ再生、モバイルのインライン再生対応の動画を配置します。
 */
export const FirstSectionVideo: React.FC = () => {
  return (
    <video
      src="/videos/firstSectionMovie.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto object-cover block sm:rounded-b-xl shadow-md lg:shadow-xl border-t-0 border-slate-200"
    />
  );
};
export default FirstSectionVideo;
