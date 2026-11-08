import { useEffect, useState } from 'react';
import { client } from './lib/microcms';
import './App.css';

type MicroCMSItem = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

function App() {
  const [contents, setContents] = useState<MicroCMSItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // ※ "blogs" の部分はご自身のmicroCMSで作成したAPIのエンドポイント名に書き換えてください
    client
      .get({
        endpoint: 'blogs',
      })
      .then((res) => {
        console.log('microCMS 接続成功:', res);
        setContents(res.contents);
        setLoading(false);
      })
      .catch((err) => {
        console.error('microCMS 接続エラー:', err);
        setError(
          'データの取得に失敗しました。エンドポイント名やAPIキーを確認してください。',
        );
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          microCMS 接続テスト
        </h1>

        {loading && <p className="text-gray-500">データを読み込み中...</p>}

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {!loading && !error && (
          <div>
            <p className="text-green-600 font-medium mb-4">
              ✨ 接続成功！取得件数: {contents.length} 件
            </p>

            {contents.length === 0 ? (
              <p className="text-gray-500 text-sm">
                microCMS側にまだコンテンツが登録されていないか、エンドポイント名が違う可能性があります。
              </p>
            ) : (
              <ul className="space-y-3">
                {contents.map((item) => (
                  <li
                    key={item.id}
                    className="p-4 border rounded-lg bg-gray-50"
                  >
                    <h2 className="font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="text-xs text-gray-400 mt-1">ID: {item.id}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
