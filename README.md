# food_test_lp

フード系ランディングページ（LP）のフロントエンドプロジェクトです。

## 🛠 技術スタック

- **UI Framework**: React 19 / TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Component Library**: shadcn/ui
- **Icons**: Lucide React

## 🚀 開発コマンド

- **開発サーバーの起動**: `npm run dev`（HMR対応のローカルサーバーが起動します）
- **ビルド**: `npm run build`（本番用の静的ファイルを `dist` に生成します）
- **プレビュー**: `npm run preview`（ビルド後のファイルを確認できます）
- **リント**: `npm run lint`（コードの静的解析を実行します）

## 🧩 shadcn/ui コンポーネントの追加

新しいUIコンポーネントを追加したい場合は、プロジェクトルートで以下のコマンドを実行します。

`npx shadcn@latest add [component-name]`
（例: `npx shadcn@latest add dialog` / `npx shadcn@latest add card` など）

## 📁 ディレクトリ構成の主要ポイント

food_test_lp/
├── src/
│ ├── components/ # 共通コンポーネント
│ │ ├── home/ # 各画面・機能ごとのコンポーネント
│ │ └── ui/ # shadcn/ui のUIコンポーネント
│ ├── lib/
│ │ └── utils.ts # ユーティリティ関数（cn等）
│ ├── App.tsx # メインコンポーネント
│ └── main.tsx # エントリーポイント
├── components.json # shadcn/ui 設定ファイル
├── tsconfig.json # TypeScript 設定ファイル（パスエイリアス `@/*` 設定済）
└── vite.config.js # Vite 設定ファイル

## 🔗 パスエイリアスについて

`@/` は `./src/` ディレクトリを指すように設定されています。

使用例:
`import { Button } from "@/components/ui/button";`
`import { cn } from "@/lib/utils";`
