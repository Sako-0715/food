import React from "react";
import { HeroSection } from "@/components/HeroSection";

function App(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-background text-slate-900">
      {/* ファーストビュー */}
      <HeroSection />

      {/* 今後ここに次のセクション（手順解説やFAQなど）を追加していきます */}
    </main>
  );
}
export default App;
