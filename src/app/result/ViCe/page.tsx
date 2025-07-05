'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function ViCePage() {
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
          src="/0226197B-34EE-4491-8629-F4F663B41204.png"
          alt="ViCeキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">ViCe 理想共感派</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">夢と優しさで、世界をちょっとでもあったかく。</p>
      </div>

      

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Vi（ヴィジョナリスト） × 裏：Ce（コアエンパス）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「みんながもっと優しくなれたら、世界はもっと良くなるのに…」——<br />
  ViCeタイプの方は、<strong>理想やビジョンに“感情”を重ねながら動く、心優しい理想主義者</strong>です。<br />
  世界や人に対する思いやりが深く、<strong>「もっとこうなればいいのに」と本気で考えられる人</strong>。<br /><br />

  ただしその反面、<strong>感情の波に大きく左右されやすく、行動が安定しない</strong>一面もあります。<br />
  モチベーションが高いときは素晴らしい行動力を見せますが、<strong>気分が沈むと一気に動けなくなる</strong>ことも。<br />
  頭の中ではずっと「やりたい」「やらなきゃ」と思っているのに、<strong>実際には腰が重い</strong>——  
  そんな自分に対して、<strong>「怠けてるだけかも…」と自己嫌悪してしまう</strong>ことも少なくありません。<br /><br />

  また、<strong>理想を語る力があるぶん、行動が伴わないと周囲に“口だけ”と誤解されやすい</strong>のもこのタイプの特徴です。<br />
  本人は本気なのに、感情やエネルギーが先に疲れてしまうことで、<strong>結果的に動けない</strong>——  
  そんな“理想と現実のギャップ”に、ひとりで落ち込むことも多いです。<br /><br />

  でも、それは“やる気がない”わけでも、“本気じゃない”わけでもありません。<br />
  ViCeの方は、<strong>心が動いたときにこそ、爆発的なパワーを出せる人</strong>なんです。<br />
  だからこそ、「常に完璧でいよう」とするより、<strong>“波”を前提に行動設計すること</strong>が大切。<br /><br />

  たとえば、「やる気がある日にはここまで進めよう」「今日はエネルギー少ないから、最低限だけでOK」  
  そうやって<strong>自分の感情を否定せず、うまく付き合う習慣</strong>を持つことで、<br />
  ViCeの理想は<strong>“ちゃんと現実になる”方向に動き始めます</strong>。<br /><br />

  ViCeの理想は、<strong>世界をほんの少しだけ優しくする力</strong>を持っています。<br />
  だからこそ、<strong>「ちゃんと行動できる自分」を育てること</strong>もまた、同じくらい大事なんです。<br />
  優しさと理想を「実現できるやさしさ」へと昇華させていってくださいね。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            理想・共感・創造性・やさしさ。<br />
            「自分の想いをカタチにして、誰かの心に届けたい」って気持ちが強い。<br />
            <strong>心を動かすことに全振りしてる</strong>ぶん、自分も揺れやすく繊細。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            自分の感性・直感をすごく大事にしてる。<br />
            でもそれと同じくらい、<strong>人の感情や反応に敏感</strong>。<br />
            「これで傷つけたかな？」って考えすぎて落ちることもある。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            インスピレーションが爆発すると行動力すごい。<br />
            けど、<strong>心が揺れると急ブレーキ</strong>。<br />
            1人で創作・表現して癒されるタイプ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>豊かな感性と共感力の両立</li>
            <li>人の心を動かすメッセージや表現に長けてる</li>
            <li>夢や理想を人に届ける力がある</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情に巻き込まれて不安定になりやすい</li>
            <li>人の感情を“自分のこと”みたいに抱えがち</li>
            <li>現実対応が苦手で、浮世離れして見られることも</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「心で未来を描く、共感アーティスト。」</p>
        </div>

        

       <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    ViCeタイプのあなたは、<strong>人の気持ちに深く共鳴できる</strong>繊細なアンテナを持ち、<br />
    「もっと良くしたい」「救いたい」という<strong>理想意識も強い</strong>、非常に優しい方です。<br /><br />

    ですが、その“優しさ”と“理想”が高くなりすぎて、<br />
    <strong>「現実の人間関係」や「自分の限界」が見えなくなっていませんか？</strong><br /><br />

    「この人、きっとこう思ってるから…」<br />
    「あの人にも共感してあげなきゃ…」<br />
    ——そんなふうに、<strong>自分の心のキャパ以上に共感しすぎて、</strong><br />
    気づいたら<strong>心も体もヘトヘトになってる</strong><br />
    そんな経験、思い当たる節はありませんか？<br /><br />

    共感は素晴らしい力ですが、<strong>「全部を受け止めること」だけが優しさではありません。</strong><br />
    むしろ、自分がしんどくなるほどの共感は、<strong>ただの“自己消耗”です。</strong><br /><br />

    理想を持つことも大切ですが、<strong>「今この瞬間、自分はどう感じているか」</strong>にも目を向けてください。<br />
    あなたの優しさは、<strong>もっと地に足のついた形で届けることもできる</strong>はずです。<br /><br />

    まずは、「そこまで共感しなくても大丈夫」というラインを引く勇気を持ちましょう。<br />
    感情と現実の境界線を意識することが、<strong>あなた自身を守るための“成熟”です。</strong>
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  ViCeタイプは、<strong>「こんな関係が理想やな」「この人の気持ちをもっと深く理解したい」</strong>と、  
  恋愛に夢と共感をたっぷり詰め込んでしまう、“理想追いかけ型のロマンチスト”。<br />
  自分の感情が動いた瞬間、それを止めることができず、<strong>「気持ちで動いてしまう」</strong>という性質を持っています。<br /><br />

  相手の一言に胸が高鳴ったり、小さな優しさに涙が出そうになったり。  
  そういう感情の揺れを、“大切な物語の一部”のように受け取ってしまうタイプ。<br />
  そのぶん、<strong>現実とのギャップや、思うように伝わらない感情</strong>に心を痛めることも多い。<br /><br />

  「わかってほしい」「気づいてほしい」という気持ちは強いけれど、  
  その願いを口にする前に「言ったら重いかな」と思って飲み込んでしまう。<br />
  そして、<strong>一人で抱えこんで落ちていくループに入ってしまうことも</strong>。<br /><br />

  でも、感受性が高いからこそ、<strong>“感情に共鳴してくれる人”と出会えたときの深いつながり</strong>は格別。  
  表面的な会話ではなく、<strong>感情の振動で会話できるような関係性</strong>が築けると、唯一無二の愛情を注ぐタイプです。<br /><br />

  ViCeにとって恋愛は、ただのパートナー関係ではなく、<strong>「物語を共に紡ぐ共犯者」</strong>のようなもの。<br />
  美しい瞬間を分かち合いたい、心を丸ごと受け止めてほしい、でも強くは言えない——<br />
  そんな<strong>“理想と感情のせめぎ合い”を静かに繰り返してる恋する詩人</strong>みたいな存在です。<br /><br />

  傍から見るとふわっとした印象でも、内側はいつも<strong>感情と理想に全力投球</strong>。  
  夢と共感に支配される、<strong>“一番やさしくて、一番揺れやすい恋愛体質”</strong>なんやで。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
<p>
  ViCeタイプは、<strong>「感情を伝える」「人の心に届く」ことに長けた共感型クリエイター</strong>。<br />
  文章・音楽・映像・会話など、どんな形であれ、<strong>感情を乗せたアウトプット</strong>に人を惹きつける力があります。<br /><br />

  特に、人の心の機微に敏感なViCeは、<strong>癒し・寄り添い・インスピレーションを与える仕事</strong>で輝きます。  
  カウンセラー・ライター・アーティスト・教育・接客業など、<strong>「人の感情と向き合う現場」</strong>が性に合ってます。<br /><br />

  ただし、<strong>感情に左右されやすく、自分の気分やコンディションに引っ張られる</strong>のが課題。  
  理想を追いすぎて現実と乖離したり、<strong>「今日は気持ちが乗らない…」と手が止まる</strong>こともしばしば。<br /><br />

  だからこそ、ViCeにとって大事なのは、<strong>「自分の感情をうまくコントロールする術」</strong>。  
  感情と現実をうまく切り替えられるようになると、<strong>“安定して才能を発揮できる自分”</strong>に進化していけます。<br /><br />

  心の動きを仕事に活かせる稀有なタイプだからこそ、<strong>メンタルケアや環境の整備</strong>は最優先で考えてあげてほしいところです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        ViCeは、<strong>心の深い部分を理解してくれる相手</strong>と強く惹かれ合います。<br />
        「この人なら分かってくれる」って思えた瞬間に、一気に信頼が深まるタイプ。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuIn（共感マスター）</strong>：感情の機微まで共有できる安心感</li>
          <li><strong>TfCe（お世話焼き妖精）</strong>：繊細な気持ちを丁寧に受け止めてくれる</li>
          <li><strong>LaIn（繊細キラキラ）</strong>：感性が似ていて、共鳴しやすい</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        ViCeは、<strong>最初からオープンに見えて、実は慎重</strong>。<br />
        「この人、本当に私の気持ちわかってる？」って内心ずっと観察してます。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>感情を否定せず、共感してくれる</li>
          <li>繊細な表現に気づいてくれる</li>
          <li>一緒に“理想”を語れる</li>
          <li>自分の情緒に付き合ってくれる</li>
          <li>無理に現実に引き戻さない</li>
        </ol>
      </p>
    </div>

    <div>
     <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  ViCeが一番しんどくなるのは、<strong>「感情を雑に扱われる」こと</strong>。<br />
  感受性が鋭く、相手の言動や空気の変化にもすぐ気づくViCeは、  
  何気ない一言や態度からも深く読み取ってしまうタイプ。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>「考えすぎ」とバッサリ切られる</li>
    <li>現実的すぎて理想を否定される</li>
    <li>共感や寄り添いがゼロ</li>
    <li>感情の起伏を「めんどくさい」と言われる</li>
  </ul>

  ViCeは<strong>理想と共感のバランスで人間関係を見ている</strong>。  
  だからこそ、「こうだったら素敵だな」「こうあってほしいな」という思いが強いし、  
  それを相手と共有できる関係を求めている。<br /><br />

  でも、現実はそう甘くない。  
  理想を語ったときに「無理に決まってるやん」とか、  
  感情を見せたときに「重い」とか言われると、<strong>心の中が一瞬で真っ暗になる</strong>。  
  「やっぱり私の気持ちって、わかってもらえへんねんな…」って、静かに絶望する。<br /><br />

  ViCeは<strong>“理想主義者”というより、“理想を信じたい共感主義者”</strong>。  
  完璧を求めてるわけじゃない。  
  ただ、「共感してほしい」「わかってほしい」という願いが、  
  相手の現実主義や無関心によってズタズタにされると、もう耐えられない。<br /><br />

  自分が感じていること・見えている未来に希望を持っているからこそ、  
  「それムリやって」「夢見すぎ」と言われると、<strong>自分ごと否定されたような感覚</strong>になる。  
  だから、強く反論するんじゃなくて、静かに心の扉を閉じてしまう。<br /><br />

  特に恋愛では、<strong>現実の相手と、自分の中にある理想とのギャップ</strong>に苦しみやすい。  
  「わかってくれると思ってたのに」「優しい人やと思ってたのに」と落胆して、  
  そのギャップを埋めようとして無理しすぎて、最終的に自分だけボロボロになる。<br /><br />

  必要なのは、「理想は大切。でも、<strong>その理想を現実に押しつけすぎない</strong>こと」。  
  そして、「<strong>現実にも、ちょっと期待してみる</strong>」という姿勢。  
  理想にこだわるあまり、今ある温かさや小さな優しさを見逃してしまうともったいない。<br /><br />

  ViCeは、<strong>共感と理想の架け橋になれる人</strong>。  
  だからこそ、その感性を否定される関係ではなく、  
  ちゃんと感情を受け止め合える関係を選んでください。<br /><br />

  「理想とのギャップで絶望病みが発症するので、<strong>現実にもちょっとだけ期待してあげてください</strong>。」  
  ——これはViCe自身に言ってあげるべき言葉でもあります。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        ロジカル派（Cl, Ro）には、<strong>「ふわっとしてる」と誤解されがち</strong>。<br />
        感情型（Ce, In, Hu）とは深くつながる一方で、<strong>お互いの情緒で消耗する</strong>可能性も。<br />
        「受け止めすぎない」感覚を持てるかどうかがカギ。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        ViCeは、<strong>感性と共感を活かして“人の心を動かす”仕事</strong>が天職。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>作家・詩人・カウンセラー・クリエイター</li>
          <li>イラストレーター・教育系・アートセラピスト</li>
          <li>動物・自然と関わる癒し系職種</li>
        </ul>
        「想いをカタチにして、人の心に火をともす」そんな働き方がぴったり。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
