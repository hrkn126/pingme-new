// src/app/tokutei/page.tsx
export default function TokuteiPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-sm leading-7">
      <h1 className="text-xl font-bold mb-6">特定商取引法に基づく表記</h1>

      <p><strong>販売事業者：</strong>PingMe（個人）</p>
      <p><strong>運営統括責任者名：</strong>Harune</p>
      <p><strong>所在地：</strong>大阪府茨木</p>
      <p><strong>メールアドレス：</strong>mping7649@gmail.com</p>
      <p><strong>販売価格：</strong>商品ページに記載</p>
      <p><strong>お支払い方法：</strong>クレジットカード（Stripe決済）</p>
      <p><strong>商品引渡し時期：</strong>決済完了後、即時閲覧可能</p>
      <p><strong>返品・キャンセル：</strong>デジタル商品の性質上、購入後の返金には対応できません</p>
    </div>
  );
}
