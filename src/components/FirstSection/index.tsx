import React, { useState, useEffect, useRef } from "react";
import { ScrollPopup } from "@/components/ScrollPopup";
//import { FirstSectionVideo } from "@/components/FirstSectionvideo";
import tomatoSoup from "@/assets/tomatoSoup.png";
import firstHeader from "@/assets/firstHeader.png";
import totalSoup from "@/assets/totalSoup.png";
import calotSoup from "@/assets/calotSoup.png";
import saleBanner from "@/assets/saleBanner.png";

/**
 * LPのファーストビューセクションを表示するコンポーネント。
 * 複数の商品画像（スープ等）を配置し、スクロール位置に連動して
 * キャンペーン用の追従ポップアップバナーの表示・非表示を切り替えます。
 */
export const FirstSection: React.FC = () => {
  /** ポップアップバナーの表示状態を管理するフラグ */
  const [showPopup, setShowPopup] = useState(false);

  /** ポップアップ表示のトリガーとなる3枚目の画像（トータルスープ）の参照 */
  const totalSoupRef = useRef<HTMLImageElement>(null);
  /** ポップアップ非表示のトリガーとなる4枚目の画像（カロトスープ）の参照 */
  const calotSoupRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalElement = totalSoupRef.current;
      const calotElement = calotSoupRef.current;

      if (!totalElement || !calotElement) return;

      const totalRect = totalElement.getBoundingClientRect();
      const calotRect = calotElement.getBoundingClientRect();

      // 3枚目の画像の下部75%の位置が画面内に入ってきたら表示
      const triggerPoint = totalRect.top + totalRect.height * 0.75;
      const isTotalPassed = triggerPoint <= window.innerHeight;

      // 4枚目の画像の下端が画面の下端に到達したら非表示
      const isCalotPassed = calotRect.bottom <= window.innerHeight;

      if (isTotalPassed && !isCalotPassed) {
        setShowPopup(true);
      } else {
        setShowPopup(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white lg:bg-(--bg) text-slate-900 px-4 sm:px-6 lg:px-8 transition-colors duration-300 pb-24">
      <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none sm:max-w-2xl sm:left-auto sm:translate-x-0 sm:mx-auto">
        <img
          src={firstHeader}
          alt="ヘッダー"
          className="w-full object-cover block sm:rounded-t-xl shadow-md lg:shadow-xl border-b-0 border-slate-200"
        />
        <img
          src={tomatoSoup}
          alt=""
          className="w-full h-auto object-cover block shadow-md lg:shadow-xl border-t-0 border-slate-200"
        />
        <img
          ref={totalSoupRef}
          src={totalSoup}
          alt="トータルスープ"
          className="w-full h-auto object-cover block shadow-md lg:shadow-xl border-t-0 border-slate-200"
        />
        <img
          ref={calotSoupRef}
          src={calotSoup}
          alt="カロトスープ"
          className="w-full h-auto object-cover block sm:rounded-b-xl shadow-md lg:shadow-xl border-t-0 border-slate-200"
        />
      </div>
      <ScrollPopup imageSrc={saleBanner} isVisible={showPopup} />
    </section>
  );
};

export default FirstSection;
