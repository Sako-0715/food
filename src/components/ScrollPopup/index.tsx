import React from "react";

/**
 * スクロール位置に応じて画面下部にスライドイン/アウトする追従ポップアップバナーコンポーネント。
 */
interface ScrollPopupProps {
  /** ポップアップ内に表示する画像のソース（パスまたはURL） */
  imageSrc: string;
  /** ポップアップを表示するかどうかのフラグ（trueで表示、falseで非表示） */
  isVisible: boolean;
  /** 画像の代替テキスト（アクセシビリティ用） */
  altText?: string;
  /** バナーをクリックした際の遷移先URL（指定がない場合は "#"） */
  linkUrl?: string;
}

/**
 * 画面下部に固定表示されるスクロール連動型ポップアップ
 */
export const ScrollPopup: React.FC<ScrollPopupProps> = ({
  imageSrc,
  isVisible,
  altText = "キャンペーンバナー",
  linkUrl = "#",
}) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-md mx-auto p-2 bg-slate-900/95 backdrop-blur shadow-2xl rounded-t-2xl border-t border-slate-700">
        <a href={linkUrl} className="block overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-auto object-cover"
          />
        </a>
      </div>
    </div>
  );
};

export default ScrollPopup;
