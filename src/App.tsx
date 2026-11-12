import React from "react";
import { FirstSection } from "@/components/FirstSection";

function App(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-background text-slate-900">
      {/* ファーストビュー */}
      <FirstSection />

      {/* 今後ここに次のセクション（手順解説やFAQなど）を追加していきます */}
    </main>
  );
}
export default App;
