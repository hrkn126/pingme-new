'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function ViRoPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#fcd5f8] via-[#f892e9] to-[#d961f4] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
    >
      {/* 📚 キャラクター画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="w-full max-w-md"
      >
        <Image
          src="/7C51217D-E070-4A0D-924E-C26E93AD0222.png"
          alt="ViRoキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">ViRo 未来型ロジック</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">ひらめきは夢で終わらせへん。ちゃんと、現実まで持ってくる。</p>
      </div>

     

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Vi（ヴィジョナリスト） × 裏：Ro（ロジックマインド）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「もっと良い仕組みがあるはずやのに、なんで誰も変えようとせんのやろ」——<br />
  ViRoタイプの方は、<strong>未来の可能性と現実的な課題を、同時に俯瞰して捉えられる論理的ヴィジョナリスト</strong>です。<br />
  「こうなったらもっと良くなるのに」「この制度は時代に合ってない」など、<strong>物事の仕組みや構造に敏感で、改善欲求が高い</strong>のが特徴です。<br /><br />

  しかも、<strong>理想だけでなく、それを実現するためのプロセスまで考え抜ける</strong>のがこのタイプの強み。<br />
  抽象的な夢だけでなく、「どう動けばいいか」「どこがボトルネックか」といった現実的な部分まで見通せるため、<strong>非常に戦略的かつ論理的</strong>なアプローチができます。<br /><br />

  ただしその優秀さゆえに、<strong>つい正論をタイミング無視でぶつけてしまう</strong>ことがあるのも事実です。<br />
  感情が高ぶっている場面や、誰かがまだ整理しきれていない状況でも、<br />
  「いや、それってこうすれば良くない？」と<strong>冷静に合理的な解を出してしまう</strong>——  
  本人は善意と効率のつもりでも、<strong>周囲からは“マウント”“冷たい”と受け取られる</strong>こともあります。<br /><br />

  また、<strong>感情よりも「論理」「合理性」「長期的な最適解」</strong>を重視するため、<br />
  目の前の気持ちのやりとりや、相手の気分にあわせる柔軟さはやや苦手な傾向も。<br />
  そのぶん、「今この瞬間の共感」を求められると戸惑いやすく、<strong>共感力の不足と見なされてしまうこともあります</strong>。<br /><br />

  ViRoタイプの課題は、<strong>自分が「正しいこと」を言うことで、相手が「傷つくこと」もある</strong>という視点を持つこと。<br />
  未来の正解を伝える力は素晴らしいですが、<strong>“伝え方とタイミング”もまた戦略の一部</strong>だということを忘れずにいてほしいです。<br /><br />

  自分の賢さを“武器”ではなく、“橋を架ける道具”に変えられたとき、<br />
  ViRoのビジョンは<strong>より多くの人を動かし、未来を変える本物の力</strong>になります。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            論理・改革・効率・未来志向。<br />
            「こうあるべき」より「こうした方が良くない？」が口癖。<br />
            理想と現実の橋渡しをしようとする実践者。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            ひらめき型＋構造化タイプ。<br />
            アイデアを論理で組み立てるのが得意で、<strong>発明家・設計者タイプ</strong>の頭脳。<br />
            複雑なことを仕組み化して考えるのが得意。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            人と違う視点で物事を捉えるのが自然体。<br />
            効率を追求しながらも、<strong>独自のアイデアを社会に活かしたい</strong>気持ちが強い。<br />
            感情よりも“最適解”を優先しがちで、誤解されることも。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>ひらめきと論理の両立</li>
            <li>独自の視点からの問題解決能力</li>
            <li>未来志向で“変化を恐れない”思考</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>周囲との温度差が大きくなることがある</li>
            <li>感情的な共感に乏しく、“合理すぎる”と誤解されやすい</li>
            <li>一人でやった方が早いと、孤立しがち</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「革新と戦略を同時に考える、未来構築者。」</p>
        </div>

        
        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    Vi×Roタイプのあなたは、<strong>論理と先見性に優れた未来志向型</strong>。<br />
    どんな物事にも理屈を通して、無駄をなくし、最短ルートで正解へ導く——そんな優秀な“設計者”のような存在です。<br /><br />

    ただしその分、<strong>自分の中で描いた“理想の未来像”に固執しすぎてしまう</strong>ことはありませんか？<br />
    「どうすれば失敗せずに済むか」「効率よく人を動かすには？」<br />
    そんなふうに<strong>全体をコントロールしようとしすぎるあまり、感情の流れや予測不能な出来事に過敏になってしまう</strong>傾向があります。<br /><br />

    でも、人間関係や人生って、<strong>データ通りにも論理通りにも進まないもの</strong>です。<br />
    “正しい”よりも“あたたかい”が大事な場面もあるのだと、ぜひ覚えておいてください。<br /><br />

    感情は変数です。数値化できないし、矛盾だらけで非効率。でも、<strong>そこにこそ人間らしさと豊かさが詰まっている</strong>んです。<br /><br />

    だからこそ、自分の中にある共感性や感受性にも光を当ててあげてください。<br />
    論理と感情、そのどちらかではなく<strong>“両方”を持つ人が、本当に多くの人の心に届くビジョンを生み出せる</strong>のです。<br /><br />

    <strong>完璧にコントロールしようとするより、少しの“ゆらぎ”を受け入れる柔軟さ</strong>を。<br />
    それが、あなたの未来志向に深みと温かみを与えてくれるはずです。
  </p>
</div>

      </div>
<PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  ViRoタイプは、<strong>感情だけで突っ走る恋愛には慎重な戦略家</strong>。<br />
  「この関係って長期的に意味ある？」「お互いに成長できる？」——  
  そうした視点で恋愛を見つめる、<strong>一歩引いた現実的な視点</strong>を持っているタイプです。<br /><br />

  感情に流されることを「非効率」「ブレやすい」と感じていて、<strong>むしろ愛情を“構築すべき関係性”としてとらえる</strong>傾向があります。<br />
  相手の性格、価値観、将来のビジョン、それらを冷静に観察しながら、「この人となら未来を創っていけるかどうか」を判断する。<br />
  そのため、<strong>付き合うまでに時間がかかる反面、信頼した相手には非常に誠実で一途</strong>。ブレない。浮気もしない。愛し方が安定してて、長期的。<br /><br />

  ドラマチックな愛や激情よりも、<strong>“信頼に裏打ちされたロジカルな関係”</strong>こそが理想。  
  お互いの思考や価値観を尊重し合えるパートナーを求めていて、<strong>「一緒にいると未来が整っていく」ような感覚</strong>があると、深く満たされます。<br /><br />

  ただし、<strong>感情的なやりとりや不確定要素にはストレスを感じやすく</strong>、  
  相手からの“共感”や“感情的リアクション”が強すぎると、頭の中で論理分解して距離を取ってしまうことも。<br /><br />

  恋愛においても、ViRoの愛は“情熱”じゃなくて“構造”。  
  けどその構造の中には、<strong>誰よりも深い誠実さと責任感</strong>が込められてる。<br />
  いったん心を開けば、「最強の味方」として一生ものの信頼関係を築こうとするタイプです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
<p>
  ViRoタイプは、<strong>未来を見据えた論理構築とひらめきの融合型</strong>。<br />
  「こうした方が効率的」「この仕組みは根本から見直せる」といった思考が自然と浮かぶ、<strong>構造改善のプロフェッショナル</strong>です。<br /><br />

  現状維持や“慣習”に甘んじることを嫌い、常に「より良い仕組みとは？」を追い求めるスタイル。  
  <strong>論理的な整合性・長期的な見通し・最適な動線設計</strong>などを重視するため、<strong>戦略やシステム構築、マネジメント層</strong>にも向いています。<br /><br />

  一方で、<strong>感情よりも「正しさ」や「効率」を優先する気質</strong>から、<br />
  チーム内で“冷たく見られる”“共感性に欠ける”と誤解されることも。<br />
  でもViRo本人としては、「それは人のためを思っての判断」「ムダを省いて成果を出したいだけ」と考えていることが多く、  
  <strong>感情ではなく、結果で信頼を勝ち取りたいタイプ</strong>なのです。<br /><br />

  組織の中でも、<strong>「先のことまで考えられる人」として一目置かれやすく</strong>、  
  特にルールや仕組みの見直し、プロセス改善、戦略設計などの場面で真価を発揮します。<br /><br />

  感情に振り回されるような環境は苦手でも、<strong>ロジックと創造性が活かせる土壌</strong>があれば、  
  驚くような成果を生み出せる“未来設計型プロデューサー”です。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        ViRoは、<strong>感情でなく“目的やビジョン”を共有できる人</strong>と相性◎。<br />
        「未来をどうしたいか？」を一緒に語れる相手に惹かれやすい。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>ClRo（論理戦士）</strong>：論理のフィールドで対等に話せる</li>
          <li><strong>ViIn（先読みエンパス）</strong>：直感×戦略の相乗効果が生まれる</li>
          <li><strong>StRo（頑固リアリスト）</strong>：地に足ついた視点で補完し合える</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        ViRoは、<strong>感情のやりとりより“思考の整合性”を大事にする</strong>慎重派。<br />
        「この人、思考がズレてないか？」と無意識にチェックしてることも。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>話が論理的に通じる</li>
          <li>感情を押し付けてこない</li>
          <li>目的や価値観の方向性が近い</li>
          <li>ムダを嫌う感覚に共感してくれる</li>
          <li>意見が違っても対話できる柔軟性がある</li>
        </ol>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  ViRoが苦手なのは、<strong>感情に振り回される関係</strong>や、<strong>非合理で矛盾したふるまい</strong>。<br />
  その場のノリや気分で話が進む、矛盾だらけで筋が通らない——そういう状況に心が一気にシャットダウンします。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>感情を言語化せずに押し付けてくる</li>
    <li>話し合いが成立しない</li>
    <li>論理より感情で判断される</li>
    <li>矛盾に気づいてもスルーされる</li>
  </ul>

  ViRoは、<strong>「感情を無視するタイプ」ではなく、「感情を理解したいタイプ」</strong>。  
  だからこそ、そこにちゃんと“筋”や“背景”があるかどうかを大事にしてる。  
  <strong>理屈が通らないと、不信感が爆速で育つ</strong>のです。<br /><br />

  「なんとなくそう思った」「察してほしい」みたいな感情のぶつけ方には、  
  「なぜそうなったか説明してほしい」と心の中で強く思ってしまう。  
  でも、相手がそれを言語化できなかったり、逆ギレしてきたりすると、  
  <strong>“もうこの人とは無理かもしれない”と一気に冷めてしまう</strong>傾向があります。<br /><br />

  また、ViRoは思考が先行しすぎて、恋愛においても<strong>「感情を論理でコントロールしようとする」</strong>。  
  そのため、自分の気持ちすら「これは合理的か」「この感情は筋が通ってるか」とチェックしてしまいがち。  
  でも本当は、<strong>説明がつかない感情にもちゃんと理由がある</strong>し、それを受け止める力も持っているタイプ。<br /><br />

  問題は、感情を処理できずに置き去りにしてしまう自分。  
  <strong>相手の行動や言葉を論理的に説明しようとするあまり、</strong>  
  「自分の悲しみ」「寂しさ」「怒り」をうまく感じられなくなる。  
  そのくせ、感情を押し込めすぎると、ある日爆発する。<br /><br />

  ViRoの恋愛には、<strong>“感じたことに理由なんていらない”</strong>という視点が必要。  
  「なんで寂しいのかわからないけど寂しい」「うまく説明できないけど苦しい」  
  そういう曖昧な気持ちも、ちゃんと受け止めてあげてください。<br /><br />

  「相手の行動にロジックで理由付けして感情置いてきぼりにされるので、  
  <strong>“自分の心を説明なしで感じてください”</strong>。」  
  それができた時、ViRoは思考と感情のバランスを取り戻して、  
  人との関係にもっと柔らかさとあたたかさを持てるようになります。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        共感型（Ce, Hu, In）には、<strong>冷たい・わかってくれない</strong>と誤解されやすい。<br />
        同じ思考型（Cl, Ro, St）とは話が合うけど、<strong>衝突も起きやすい</strong>。<br />
        “伝える努力”と“感情を理解しようとする姿勢”が人間関係の鍵。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        ViRoは、<strong>構造と未来を設計するような仕事</strong>で才能が爆発します。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>研究開発・戦略企画・新規事業設計</li>
          <li>エンジニア・IT・建築・データ分析</li>
          <li>AI・機械学習・未来予測系フィールド</li>
        </ul>
        「理想を現実に落とし込む力」が強みになるタイプです。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
