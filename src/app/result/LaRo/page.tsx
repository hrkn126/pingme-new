'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function LaRoPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#f5ebfa] via-[#d5b5f0] to-[#aa81da] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
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
          src="/7AF7C090-BF4D-423F-9FC2-D627FE40011D.png"
          alt="LaRoキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">LaRo 理論派アイドル</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          明るさの奥に、誰にも気づかれない計算がある。
        </p>
      </div>

      
      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：La（ライトスター） × 裏：Ro（ロジックマインド）</p>
        </div>

        <div>
         <h2 className="text-lg font-semibold">【根本動機】</h2>
<p>
  「目立ちたい。でも、ちゃんと理屈が通ってないと落ち着かへん」——<br />
  LaRoタイプは、<strong>“かわいい”と“賢い”をどっちも諦めたくない戦略派</strong>です。<br />
  一見ノリで動いてるように見えて、実はその一歩一歩に“ちゃんとした理由”が隠されてる。<br />
  周りにどう見られてるかを気にしながらも、「自分が納得できるかどうか」が何より大事なんです。<br /><br />

  「かわいいね」と言われることも、「すごいね」と褒められることも嬉しい。<br />
  でもその言葉が、<strong>“中身までちゃんと見てくれた結果かどうか”</strong>を、心のどこかで常に測ってる。<br />
  自分をよく見せたいという気持ちと、<strong>薄っぺらく思われたくないという強いプライド</strong>がせめぎ合っていて、<br />
  目立つほどに「中身も問われる」ことへのプレッシャーも抱えてるタイプです。<br /><br />

  明るくて愛嬌もある。でもそれは「盛り上げなきゃ」と冷静に計算して出した結果だったりする。<br />
  本人は努力と戦略でバランスを取ってるつもりでも、<strong>“感覚で動いてる人たち”に合わせるとモヤモヤすることも</strong>。<br /><br />

  LaRoタイプの根本には、<strong>「ちゃんと考えてる自分を認めてほしい」</strong>という欲求が潜んでいます。<br />
  誰かにとって“かわいい存在”であると同時に、“ちゃんとしてる人”とも思われたい。<br />
  その両立にこだわり抜くからこそ、<strong>「軽く見られた」と感じると強く反発したくなる</strong>こともあるでしょう。<br /><br />

  でも、それだけ理屈と魅力のバランスを丁寧に組み立ててきたからこそ、<br />
  LaRoの持つ“知的で華やかな存在感”は、どのタイプにもない唯一無二の個性になるんです。<br /><br />

  自分をよく見せたいと思う気持ちも、ちゃんと正しさを大事にする姿勢も、<strong>どっちもあなたの武器</strong>。<br />
  そのギャップを楽しめるようになったとき、LaRoは“計算じゃなく本音で輝ける存在”になっていきます。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            盛り上げることや目立つことも好きですが、<strong>「なんのためにやっているか」が明確でないと動けない</strong>タイプです。<br />
            周囲に合わせて明るく振る舞っていても、<strong>内心では常に論理的に状況を整理している</strong>自分がいます。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            テンションの高い場面でも、<strong>どこか冷静に全体を見ている</strong>のがLaRoの特徴です。<br />
            自分がどう見られているか、今どんな言動が最適なのかを瞬時に計算できる、<strong>“戦略型スター”</strong>とも言えます。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            外向きには明るくフレンドリーに振る舞いますが、<strong>一人になると深く思考を巡らせている</strong>ことが多いです。<br />
            感情に流されず、テンションが高い場面でも「このノリは本当に意味があるのか？」と分析していることもあります。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>愛嬌と知性を兼ね備えた“思考型コミュ力”の持ち主</li>
            <li>自分の立ち位置や役割を客観的に把握できるメタ視点</li>
            <li>明るさの裏で場を設計・調整できるバランス感覚</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>“なんとなく”が許せず、人のノリに共感できないことがある</li>
            <li>明るく見えても、内面は常に思考フル回転で疲れやすい</li>
            <li>共感よりも構造重視になり、人の気持ちに寄り添いにくい場面がある</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「かわいい顔して、裏では全部計算済みの知的アイドル。」</p>
        </div>

        

       <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    La×Roタイプのあなたは、論理的で頭の回転が早く、物事をスマートに整理する力に非常に長けています。<br />
    「どうすれば正しいか」「何が効率的か」という視点で動けるあなたは、周囲にとってとても頼もしい存在です。<br /><br />

    ですが、現実の人間関係では、“正しさ”だけではうまくいかない場面が多いのも事実です。<br />
    感情で動く人を「理解不能」と感じたり、会話が非論理的に進むことにイライラしてしまったりすることはありませんか？<br /><br />

    もちろん論理は大切です。ただしそれは、相手を“論破するため”に使うものではなく、<strong>“相手の気持ちを理解する手段”として使ってこそ意味がある</strong>のです。<br /><br />

    感情に寄り添うことは、論理を捨てることではありません。<br />
    「正しいこと」ではなく、「楽しいこと」や「心地よさ」を選ぶ柔軟さも、人間関係ではとても大切です。<br /><br />

    人は機械ではありません。すべてに理由があるわけでも、筋が通っているわけでもありません。<br />
    <strong>自分と異なる価値観に触れたとき、その違いを「正す」のではなく「尊重する」こと。</strong><br />
    その姿勢が、あなたの魅力と能力をさらに引き立ててくれるはずです。<br /><br />

    「論理だけで通じるなら、人間関係はもっと簡単なはず」——<br />
    そう気づいたとき、あなたのコミュニケーションは、より深く温かいものに変わっていきます。
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  LaRoタイプの方は、恋愛においても<strong>「自分がどう見られているか」「関係性がどう構築されているか」</strong>を常に意識されています。<br />
  感情で突っ走るよりも、<strong>まず思考で整理してから動く“戦略型の恋愛スタイル”</strong>が基本です。<br />
  そのため、好意を抱いていても、相手に見透かされないように<strong>あえて冷静にふるまったり、あえて距離を取る</strong>ような場面も多く見られます。<br /><br />

  見た目や雰囲気は柔らかく、人懐っこささえ感じられることがありますが、<strong>中身は驚くほどシビアでロジカル</strong>。<br />
  「この発言をすると、相手はどう感じるか？」「この反応の裏にはどんな意図があるか？」<br />
  そんな風に、<strong>感情よりも情報・言動・態度を分析してからでないと安心できない</strong>のです。<br /><br />

  その結果、<strong>“なぜ返事が遅いのか”“その行動の意味は何なのか”</strong>を、相手本人に尋ねることなく、<strong>脳内で勝手に解析→自爆</strong>してしまうことも。<br />
  けれどそれも、「無防備な自分を晒して傷つきたくない」「感情に支配されたくない」という、<strong>自分自身を守るための知的な防衛本能</strong>なのです。<br /><br />

  本心では、もっと甘えたいし、素直な気持ちも伝えたい。<br />
  けれどその衝動が見透かされるのが怖くて、つい「理性的で冷静な自分」であろうとしてしまう。<br />
  <strong>感情を伝えることは“リスク”であり、“恥ずかしい”ことだと感じてしまう</strong>傾向があります。<br /><br />

  そのため、LaRoタイプの方が恋愛で本当に安心できる相手とは、<strong>感情的すぎず・かといって冷たくもなく、ちょうどよく距離を取ってくれる人</strong>。<br />
  詰めすぎず、でも無視もしない。<strong>そんな絶妙な対応ができる相手でないと、長続きしない傾向があります。</strong><br /><br />

  恋愛においても、<strong>感情と理性のせめぎ合い</strong>。<br />
  褒められるとめちゃくちゃ嬉しいのに、喜んでるのを見抜かれたくない。<br />
  相手のことを深く思っているのに、それを言葉にするのが恥ずかしい。<br />
  ——そんな<strong>“自意識と誠実さのせめぎ合い”</strong>こそが、LaRoの魅力そのものなのかもしれませんね。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        明るさとロジカル思考を両立しているLaRoタイプは、<strong>「人と関わる仕事」×「戦略性が必要な仕事」</strong>で大きな力を発揮します。<br />
        企画や進行、情報整理など、<strong>“見せ方”と“構造”を同時に意識するポジション</strong>がぴったり。<br /><br />
        ただし、感情的な場や突発的なノリには対応しにくく、<strong>明確なルールやロジックがある環境</strong>が向いています。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        LaRoは、<strong>論理性を理解し、過干渉せずに見守ってくれる相手</strong>と相性が良いです。<br />
        自分のテンポを乱されず、落ち着いて会話できる相手に安心感を覚えます。<br /><br />
        相性が良いタイプは以下の通り：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>ClIn（分析シンパサイザー）</strong>：思考スピードと感覚が近く、沈黙も心地よく感じられる</li>
          <li><strong>ViRo（未来型ロジック）</strong>：理詰めで話が通じる安心感。論理会話で深まる関係性</li>
          <li><strong>TfRo（気づかい論理人）</strong>：ロジカルさを保ちつつ、やわらかく寄り添ってくれる存在</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        LaRoタイプは、<strong>恋愛にも人間関係にも“思考”が先に立つタイプ</strong>。<br />
        距離を縮めたいと思っても、まずは相手の言動を観察・分析してから動きます。<br /><br />
        🔽 LaRoが親しくなるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>感情的に揺さぶってこない</li>
          <li>行動の意図を丁寧に説明してくれる</li>
          <li>突発的なテンションではなく、落ち着いたやりとり</li>
          <li>プライドを尊重してくれる</li>
          <li>考える時間を与えてくれる</li>
        </ol>
        「ちゃんと考えたい」自分を尊重してくれる人に、心を開いていきます。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  LaRoがもっとも苦手なのは、<strong>「理屈が通じない感情の押し付け」</strong>。<br />
  決して感情を否定してるわけじゃない。ただ、<strong>“なんで怒ってるのか分からない”状態に強いストレス</strong>を感じやすい。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>話し合いができない、説明がない</li>
    <li>「なんとなく」で物事を進められる</li>
    <li>急に怒る・泣くなどの情緒の波</li>
    <li>「察して」前提のコミュニケーション</li>
  </ul>

  LaRoにとって、恋愛は“美しく構築されるべき関係性”。<br />
  だからこそ、<strong>感情だけが先走って論理の土台が崩れる瞬間</strong>が耐えられへん。<br />
  説明なき態度、整理されてない感情の爆発、そういう混乱したやり取りに対しては、<strong>一気に引いてしまう冷静な目</strong>を持ってる。<br /><br />

  しかもこのタイプ、<strong>「自分の思い通りに動いてくれる相手」＝「安心できる相手」</strong>と誤認しやすい傾向も。<br />
  つまり、知らん間に<strong>“無意識の操作欲”が発動</strong>して、「こう言えば好かれる」「こうすれば納得させられる」と戦略的になることも多い。<br />
  でもその計算がズレたとき、<strong>プライドが崩壊 → 自爆コースへまっしぐら</strong>。<br /><br />

  本人も内心ではわかってる。「全部コントロールなんて無理」ってことは。<br />
  でも、怖いからやってしまう。<strong>「嫌われたら終わり」って信じてるからこそ、操縦しようとしすぎる</strong>。<br /><br />

  解決策はたったひとつ。<strong>「好かれなくても、自分は大丈夫」って覚悟を持つこと</strong>。<br />
  その覚悟さえあれば、<strong>相手の反応に振り回されることなく、もっと自然体の自分でいられる</strong>し、結果的に恋愛も長続きする。<br />
  コントロールではなく、共鳴できる関係性を築けるようになるから。<br /><br />

  LaRoの魅力は、“思考”の美しさと“言葉”の精度。<br />
  その武器を、誰かを支配するためじゃなく、<strong>心を繋ぐために使えるようになったとき、本物の愛を手に入れられる</strong>んやと思います。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        感覚型（St, Hu）とのやりとりでは、<strong>“ノリ”の裏側を読みすぎて疲れてしまう</strong>ことも。<br />
        「とりあえず楽しもう」という空気にはなじみにくく、<strong>自分のテンポを大事にできる環境選び</strong>が必要です。<br />
        また、思考が先行しすぎて無表情にならないよう、<strong>こまめな言語化</strong>が誤解を防ぐカギになります。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        明るさ×ロジカルの掛け算で輝ける、<strong>企画・分析・発信ポジション</strong>が最適。<br /><br />
        💼 向いている職業の例：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>マーケター・戦略系部署・プランナー</li>
          <li>司会・MC・進行役・情報整理ポジション</li>
          <li>教育・広報・広告・ライティング</li>
        </ul>
        「華やかに見せつつ、実は裏で全部整えてる」——そんな立ち位置が似合います。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
