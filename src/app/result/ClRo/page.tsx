'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'


export default function ClRoPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#0d1124] via-[#131a33] to-[#1b203c] flex flex-col items-center justify-start px-4 py-12 text-white text-center"
    >
      {/* 🛡️ キャラクター画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="w-full max-w-md"
      >
        <Image
          src="/2EFE668E-CD8C-4644-A54F-5D8A5C5D37A5.png"
          alt="ClRoキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain rounded-xl shadow-lg"
        />
      </motion.div>

      {/* タイプ名・キャラネーム・キャッチ */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">ClRo 論理戦士</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          感情よりも正しさを。沈着冷静な理論型リーダー。
        </p>
        </div>
      

      {/* 🧠 タイプ解説 */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-white">【タイプ構成】</h2>
          <p>表：Cl（クールリーダー） × 裏：Ro（ロジカルストライカー）</p>
        </div>

        <div>
         <h2 className="text-lg font-semibold text-white">【根本動機】</h2>
<p>
  自分にも他人にも“正しさ”を求めるタイプ。<br />
  その根底には「間違えたくない」「弱さを見せたくない」という無意識の防衛本能があります。<br />
  常に冷静さと論理性を重視し、感情や空気に流されることを極端に嫌う傾向があります。<br /><br />

  感情を優先すると判断がブレることを知っているからこそ、<br />
  筋の通った考え方や根拠ある判断を何よりも大切にする。<br />
  複雑な状況や意見が入り乱れる場でも、論点を構造的に整理し、<br />
  誰よりも冷静に問題の本質を突くことができます。<br /><br />

  ただしその「正しさ」があまりに鋭いために、ときに周囲の人の言葉を一瞬で黙らせてしまうことも。<br />
  本人に悪気はなくても、<strong>“あ、それ言われたら返せんやつ…”</strong>というような、<br />
  正論の一撃で場を凍りつかせてしまうことがあります。<br /><br />

  まわりからは「頼れる」「ブレない」「論破の人」と評価される一方で、<br />
  「冷たい」「融通がきかない」と言われたり、<br />
  感情的な話をしている人に「話通じなさそう…」と思われがちな一面も。<br /><br />

  自分なりのルールとロジックを大事にしているからこそ、<br />
  曖昧な対応や感情論には強いストレスを感じやすい。<br />
  でもそのブレない頭脳は、<strong>場の混乱を整理し、核心を突く言葉で人を導く強さ</strong>を持っています。<br />
  ClRoの“冷静なロジック”は、まさに戦場で光る知性の武器なのです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【価値観】</h2>
          <p>
            「正しいかどうか」「論理的かどうか」が判断軸。<br />
            感情論や根拠のないふわっとした話に振り回されるのを嫌う。<br />
            ただし、親しい人に対しては不器用なまでに真面目で誠実。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【思考傾向】</h2>
          <p>
            感情の起伏よりも「どうするべきか」を優先して考える。
            相手の発言や行動の矛盾点を冷静に見抜く力があるが、時にそれが“冷たい”印象を与えてしまうことも。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【行動傾向】</h2>
          <p>
            感情に流されず淡々としている。<br />
            周囲の動揺にも惑わされず、状況を俯瞰して判断する。<br />
            ただし、内心では人一倍「信頼されたい」「認められたい」という気持ちを抱えている。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>論理的思考力と冷静な判断力</li>
            <li>自分にも他人にも厳しくブレない姿勢</li>
            <li>困難な状況でも動じない安定感</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情を表現するのが苦手</li>
            <li>他人に弱みを見せられない</li>
            <li>完璧主義ゆえに自分を追い詰めやすい</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【一言で言うと】</h2>
          <p>「理屈で世界を切り取る、静かな闘志を秘めた戦士。」</p>
        </div>

        
       <div>
  <h2 className="text-lg font-semibold text-white">【成長ポイント】</h2>
  <p>
    Cl×Roタイプのあなたは、とにかく「正しさ」や「筋の通った考え方」にこだわる傾向が強いですね。<br />
    物事を冷静に判断できる力、合理的に整理できる頭脳、それ自体は素晴らしい強みです。<br />
    ただ、<strong>その“正しさ”を絶対視しすぎて、まわりとの距離がどんどん開いてしまっていませんか？</strong><br /><br />

    「その考えは矛盾してますよね？」「論理的におかしいですよね？」——たしかにそうかもしれません。<br />
    でも、<strong>人間関係は論理だけじゃ動きません</strong>。<br />
    そこに“情け”や“気持ち”が入って初めて、関係があたたかくなるんです。<br /><br />

    論理で物事を整理する力は、あなたの武器。でもその武器を振り回しすぎると、<strong>「冷たい人」「分かってくれない人」と誤解されて孤立しがち</strong>です。<br />
    本当は誠実で、相手に対してちゃんと向き合いたいと思っているのに、<strong>“正しさ”の仮面のせいでその気持ちが届かなくなってしまう</strong>こと、ありませんか？<br /><br />

    完璧を目指すのではなく、「これぐらいでいいか」と思える“余白”を自分に与えてください。<br />
    そして、感情もまた立派な“判断材料”であることを、もう少し信じてみましょう。<br />
    <strong>正しさばかりを優先しすぎると、正しさに縛られて一番苦しむのは自分自身</strong>です。<br /><br />

    人に頼ること、弱みを見せること、それは“負け”じゃありません。<br />
    <strong>「正しいだけじゃ人は動かない」ことを理解したとき、あなたの論理は初めて“人に届く言葉”になりますよ。</strong>
  </p>
</div>

      </div>
<PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold text-white">【恋愛傾向】</h2>
      <p>
  ClRoタイプは、<strong>「恋愛もまた論理で制す」タイプ</strong>です。<br />
  感情に任せて動く恋は<strong>“不安定すぎてリスクが高い”</strong>と考えており、まず最初に来るのは「この関係性、構造的に成立してるか？」という検証。<br />
  「この人と一緒にいて、将来的な利得はあるのか？」「この交際は人生設計においてプラスか？」など、<strong>頭の中では常に因果と最適解を探ってる</strong>状態です。<br /><br />

  「気持ちが通じ合う」とか「運命の人っぽい」とか、そういうフワっとした根拠では動けません。<br />
  感情は<strong>揺らぐ変数</strong>やからこそ、それを信じる前に<strong>根拠と再現性</strong>を求めます。<br />
  相手がいきなり感情的にぶつかってきたり、「なんで好きかわからんけど好き」と言ってきたら、<strong>正直“地雷フラグ”やと思ってしまう</strong>ところも。<br /><br />

  恋愛においても、ClRoの愛は<strong>計画と積み重ねの上に成立する信頼ベース</strong>。<br />
  感情の起伏に合わせて一喜一憂するのではなく、<strong>相手の生活・価値観・未来像を精査しながらじっくり近づく</strong>タイプです。<br />
  その過程では<strong>「今この話をする意味は？」「将来的にどう繋がるか？」</strong>みたいな、“空気読まなさすぎるタイミング”で鋭い話をぶっこんでしまうこともありますが、<strong>悪気は一切なし。ただし論理的整合性が優先</strong>。<br /><br />

  恋人との会話の中で、「それ、論点ずれてる」「今は感情を聞いてるの！」と言われがちですが、ClRoからすれば<strong>“冷静に整理して解決することが誠実”</strong>なんです。<br />
  逆に、情緒で押されると「いや、それは感情論でしょ」と身構えてしまうので、感情ファーストの人と付き合うと、<strong>地獄のようにすれ違う可能性も</strong>あります。<br /><br />

  ただ、ここまで堅物に見えても、<strong>一度信頼した相手には真面目すぎるほど真剣</strong>。<br />
  付き合いが長くなるほど、<strong>パートナーの生活効率や未来の安定のために、自分の時間や労力を惜しまず注ぐ</strong>ようになります。<br />
  「サプライズ」や「突然の愛の言葉」は苦手でも、<strong>地味に毎日送る朝のコーヒー</strong>とか、<strong>デートの最短ルートを調べ尽くす計画性</strong>で、静かに愛を届ける堅実派。<br /><br />

  最後に一言。ClRoにとって、恋愛とは「感情の流れに乗るもの」ではなく、<strong>「共に未来をデザインする共同プロジェクト」</strong>です。<br />
  感情がブレすぎる人、ノリで生きてる人とは、申し訳ないですが<strong>“最初の選考で落とさせていただきます”</strong>。<br />
  合理的な愛こそが最強。…何か文句ありますか？
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【仕事傾向】</h2>
      <p>
        とにかく「正しさ」と「合理性」にこだわるタイプ。<br />
        仕事の中でも効率化・改善・戦略立てなど、頭を使う業務に向いてる。<br />
        感情論で動く職場より、評価基準がはっきりしてる組織や役割のほうが力を発揮しやすい。<br />
        ミスが許されない環境でも安定してパフォーマンスを出せるけど、柔軟性を求められすぎるとちょっと不安定になることも。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【相性の良いタイプ】</h2>
      <p>
        ClRoにとって居心地いいのは、「感情より論理で通じ合える相手」。<br />
        相性がいいのは以下のタイプ👇
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>
            <strong>ViRo（未来型ロジック）</strong>：同じく思考重視。議論もできるし、価値観の整合性が合いやすい。
          </li>
          <li>
            <strong>LaRo（理論派アイドル）</strong>：表現は派手でも思考は論理的。テンションのバランスが心地いい。
          </li>
          <li>
            <strong>ClCe（冷静エンパス）</strong>：論理と共感の絶妙なバランスで、思考が混乱せずに保てる。
          </li>
        </ul>
        感情をぶつけてくる相手や、思いつきで動く人にはちょっと戸惑いがち。  
        「安定した関係性」がClRoの安心ポイントやで。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【親密になるまでのステップ】</h2>
      <p>
        ClRoは感情より「納得感」で心が動く。<br />
        「この人は信頼できる」「この人とは話が通じる」と判断できたときに、じわじわ距離を詰めていく。<br /><br />
        🔽 ClRoが親密になるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>思考や行動に一貫性を感じる</li>
          <li>感情を押し付けてこない</li>
          <li>論理的な会話が成り立つ</li>
          <li>相手の行動に根拠がある</li>
          <li>自分の価値観に干渉してこない</li>
        </ol>
        共通の価値観や「考え方が似てる」と感じた瞬間から、一気に信頼を深めていけるタイプやで。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【恋愛でのNGパターン】</h2>
<p>
  ClRoが一番しんどいのは、<strong>矛盾した行動</strong>と<strong>感情優先のコミュニケーション</strong>。<br />
  理屈が通らないまま責められたり、理由なく不機嫌になられると、「なんで？」「どうして？」が頭の中で無限ループします。<br />
  感情よりも<strong>納得・論理・整合性</strong>を大切にしているから、<strong>曖昧な言動や話し合いのできない空気</strong>には強くストレスを感じがちです。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>理由もなく気分が変わる</li>
    <li>「察してよ」的なやりとり</li>
    <li>話し合いができないまま一方的に決められる</li>
    <li>正論を否定されて感情だけで進められる</li>
  </ul>

  ClRoは<strong>理屈に裏付けされた信頼関係</strong>を求めるタイプ。<br />
  「なんとなく」「気持ちが冷めたから」みたいな雑な終わらせ方は、心の中で一生反論され続けることになります。<br />
  感情だけで動かれると混乱しやすいし、<strong>無駄な感情の爆発にはエラー表示を出す</strong>くらい繊細なOSを持ってると自覚しておくのが吉です。<br /><br />

  一方で、<strong>正論で相手を封じたあとに自分だけポツンと孤立する</strong>のもこのタイプのよくあるパターン。<br />
  論理で勝って、感情で負けて、孤独で病むという<strong>地味にしんどいコース</strong>に入ることも多めです。<br /><br />

  だからこそ必要なのは、<strong>“正しさ”だけじゃなく“気持ち”を翻訳する力</strong>。<br />
  相手の感情が理解できないときも、「これは理屈じゃなく、ただ気持ちが動いただけなんだな」と認識することで、<br />
  <strong>思考を止めて、共感を挟む余白</strong>が生まれます。<br /><br />

  <strong>完璧な答え</strong>がなくても、<strong>正しくなくても大丈夫な時間</strong>を持てるかどうか。<br />
  そこに気づけるようになったとき、ClRoの恋愛は<strong>やっと“勝ち負け”から“関係性”にシフト</strong>し始めるんです。
</p>
<div>
  <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
  <p>
    共感タイプ（Ce, Hu, Tf, In）とは<strong>価値観のギャップ</strong>が大きくなりやすい傾向あり。<br />
    感情重視の相手（St, La）には「冷たい」「理屈っぽい」と思われやすく、<strong>会話の温度差</strong>が摩擦になることも。<br />
    同じロジック型（Cl, Ro, Vi）とは話が合う一方で、ぶつかると<strong>ガチ論破バトルに発展</strong>しやすいので注意が必要。
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold">【向いてる職業】</h2>
  <p>
    論理的思考と構造化が得意なClRoは、<strong>頭脳で勝負する職種</strong>に向いてます。<br />
    例：法律・コンサル・エンジニア・データ分析・プランナー・経営企画・教育など。<br />
    感情よりも<strong>正確性・整合性・効率性</strong>を求められる環境で、その能力が最大限発揮されます。
  </p>
</div>

    </div>

  </div>
</PremiumReveal>
<PremiumSection />


    </motion.div>
  )
}
