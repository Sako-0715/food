export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  imagePlaceholder?: string;
  tips?: string;
}

export const purchaseSteps: StepItem[] = [
  {
    stepNumber: 1,
    title: '公式サイトへアクセス',
    description:
      'まずは対象の公式サイトにアクセスし、購入ページまたは専用リンクを開きます。',
    tips: 'スマホから操作する場合は、画面を横にせず縦のままで進めるとスムーズです。',
  },
  {
    stepNumber: 2,
    title: '支払い方法で Google Pay を選択',
    description:
      '決済画面にて、お支払い方法の中から「Google Pay」を選択します。',
  },
  {
    stepNumber: 3,
    title: 'アカウント認証と決済の確定',
    description:
      'Googleアカウントにログインし、登録済みのカード情報を選択して決済を完了させます。',
  },
];
