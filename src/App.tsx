import React from "react";
import { HeroSection } from "@/components/HeroSection";
import "./App.css";
function App(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-(--bg) text-slate-900">
      {/* ファーストビュー */}
      <HeroSection />

      {/* 今後ここに次のセクション（手順解説やFAQなど）を追加していきます */}
    </main>
  );
}
export default App;
