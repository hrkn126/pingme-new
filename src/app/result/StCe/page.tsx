'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function StCePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#0d374e] via-[#6d7f8305] to-[#1d3f69] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
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
          src="/E250C5DC-A483-488E-8CB5-B7A1073F6A70.png"
          alt="StCeキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">StCe 真正直エンパス</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          感情は、まっすぐ伝えたい。
        </p>
      </div>

      

      {/* テキストブロック：テンプレに基づいたセクション群 */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：St（ストレート） × 裏：Ce（コアエンパス）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「本音でぶつかりたい。そして、ちゃんと分かち合いたい」——<br />
  自分の気持ちにも相手の気持ちにも正直すぎる、“感情の直球勝負型”。<br />
  「こう思ってる」も「それしんどい」もハッキリ言うけど、<br />
  言った後に自分が傷つくくらい繊細。<br /><br />

  特にこのタイプは、<strong>正義感と誠実さが全開</strong>で、曖昧な言動や裏表のある態度に対して、<strong>怒りやストレスを抑えきれなくなる</strong>ことがあります。<br />
  誰かが見て見ぬふりをしているとき、自分だけが真剣に向き合ってるような場面では、<br />
  「なんで誰も言わへんの？」「これ、おかしいやろ！」と感情が爆発してしまうことも。<br /><br />

  <strong>ウソ・ごまかし・適当なリアクションがほんまに苦手</strong>で、<br />
  自分の本気が軽く扱われると、裏切られたような気持ちになる。<br />
  たとえその相手に悪気がなくても、「真剣に話してるのに、なんで受け止めてくれへんの？」って、<strong>心の奥で泣いてる</strong>んです。<br /><br />

  そのぶん、<strong>自分が誰かのために怒ったり泣いたりすることにも遠慮がない</strong>。<br />
  仲間が苦しんでたら、一緒に怒って、一緒に涙を流す。<br />
  感情を他人の分まで背負ってしまう優しさと、<strong>代弁者のような熱さ</strong>が、StCeタイプにはあります。<br /><br />

  でも本気すぎるがゆえに、<strong>周囲との温度差に孤独を感じやすく</strong>て、<br />
  「自分だけ浮いてる」「また空回りしてるかも」と、自分を責めてしまうこともしばしば。<br />
  本当はただ、<strong>ちゃんと向き合いたいだけ</strong>。関係を大切にしたいだけ。<br /><br />

  <strong>StCeが感情をぶつけるのは、愛してるから</strong>です。<br />
  どうでもいい人には怒らないし、泣いたりしません。<br />
  その不器用なやさしさと、まっすぐすぎる情熱こそが、StCeのいちばんの魅力なのです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            ウソや建前が大嫌い。<br />
            「本音で向き合ってくれないなら、もうええわ」ってなるけど、<br />
            実は誰よりも関係を大事にしてる。<br />
            感情にまっすぐで、“わかり合うこと”に強い価値を置く。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            感情が揺れると即行動。「考えるより伝えな！」が先に来るタイプ。<br />
            でも伝えたのに伝わらん時は、一気に落ち込んでしまう。<br />
            共感力が高いぶん、自己否定に走るスピードも早い。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            仲間や大切な人のために本気で怒ったり泣いたりできる情熱型。<br />
            でも、そのぶん裏切りや冷たい対応にはめちゃくちゃ弱い。<br />
            “強く見えて、一番傷ついてる”ギャップタイプ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>まっすぐな想いで人の心を動かせる力</li>
            <li>仲間を全力で守る“熱血共感戦士”</li>
            <li>誰かを想って本気で感情を出せる尊さ</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>ストレートすぎて誤解されやすい</li>
            <li>傷つくのが怖くて、関係を切りたくなる衝動にかられる</li>
            <li>「わかってもらえへん自分」を責めすぎる</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「感情でぶつかり、感情で傷つき、感情で立ち上がる人。」</p>
        </div>

        
        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    St×Ceタイプのあなたは、思ったことを隠さず、真正面からぶつかっていく誠実な姿勢を持つ方です。<br />
    その「本音でしか向き合えない」スタンスは、あなたの大きな強みであり、信頼の源でもあります。<br /><br />

    ですが時に、その<strong>“まっすぐさ”が鋭すぎて</strong>、相手を無意識に追い詰めてしまっていることはありませんか？<br />
    「私は正直に言ってるだけ」「嘘がないのが一番大事」——それは確かに正論ですが、<strong>“正直＝正義”とは限りません。</strong><br /><br />

    人間関係には、時に“ワンクッション置く思いやり”や“言葉を選ぶ配慮”が必要です。<br />
    正しさよりも、<strong>相手の心にどう届くか</strong>の方が大切な場面、たくさんあるはずです。<br /><br />

    また、共感力が高いあなたは、<strong>「相手の気持ちを感じ取る」のが得意すぎるあまり</strong>、自分の感情を置き去りにしてしまいがちです。<br />
    感情に飲まれる前に、自分の気持ちをひと呼吸整えるクセをつけてみてください。<br /><br />

    「言いたいことがある」それは大切です。<br />
    でも、<strong>「伝わる形で伝える」ことができてこそ、あなたの本音は本当の意味で人を動かします。</strong><br /><br />

    「親しき中にも礼儀あり」。  
    正直さに思いやりが乗ったとき、あなたの誠実さは、より深く人の心に届いていくはずです。
  </p>
</div>

      </div>

     <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
     <p>
  StCeタイプは、<strong>恋愛において「本音と本音でぶつかりたい」</strong>という想いが強い、感情直球タイプです。<br />
  自分の気持ちをストレートに伝えることに躊躇はなく、「好き」と思ったら素直に言葉にしようとします。<br />
  中途半端な駆け引きや、曖昧な関係が一番苦手。「ちゃんと向き合ってくれへんのやったら、もうええわ」とすぐ見切りをつけがちです。

  ただし、<strong>感情の浮き沈みが激しく、傷つきやすさもトップクラス</strong>。<br />
  「思ったことをそのまま伝える＝わかってもらえるはず」と思ってる節があるため、<strong>相手が鈍感やったり反応が薄いと一瞬で心が折れます</strong>。<br />
  「なんでそんなこと言うん？」「なんで気づいてくれへんの？」という想いを飲み込みながら、<strong>じわじわ不満を溜めて最後に爆発</strong>。<br />
  そのくせ、自分から本音をうまく言葉にできなかったりもして、後から後悔するパターンが多いです。

  恋愛に対してはとにかく誠実で真っ直ぐ。<br />
  でもその純粋さゆえに、<strong>駆け引き型の恋愛や、気持ちを試すような態度には耐性ゼロ</strong>。<br />
  一度心を許せば、ものすごく一途に愛し続けますが、<strong>「わかってくれへん」「通じひん」</strong>と感じた瞬間、一気に心を閉ざしてしまいます。
  素直でまっすぐ、けれど繊細で脆い。<strong>それがStCeの恋愛</strong>。<br />
  表面上は明るくても、心の中ではいつも「ちゃんとわかってもらえるか？」って不安と戦ってます。<br />
  共感力のある、誠実で真正面から向き合ってくれる相手となら、<strong>深く濃い愛情を育てていけるタイプ</strong>です。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        <strong>熱意と感情を原動力にして動くタイプ</strong>で、情熱を注げる仕事に本領を発揮します。<br />
        仲間やお客さんのために本気になれるため、<strong>人と人との信頼が大事な現場</strong>に向いています。<br />
        逆に、無感情・効率重視の職場ではモチベが激落ちすることも。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        StCeは、<strong>「ちゃんと受け止めてくれる人」</strong>と相性抜群。<br />
        感情を否定せず、まっすぐな気持ちに応えてくれる相手に安心します。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuCe（人間力おばけ）</strong>：ストレートな感情を優しく包み込んでくれる</li>
          <li><strong>ViIn（先読みエンパス）</strong>：衝動的な行動の裏にある想いを汲んでくれる</li>
          <li><strong>TfRo（気づかい論理人）</strong>：情熱を冷静に受け止め、言語化してくれる</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        StCeは、<strong>「本音で向き合えるかどうか」</strong>を常に見ています。<br />
        ぶつかることもあるけど、それは信頼してる証拠。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>感情を茶化さず、ちゃんと受け止めてくれる</li>
          <li>ぶつかっても関係が壊れないと感じられる</li>
          <li>「熱くていいね」と肯定してくれる</li>
          <li>落ち込んだ時にそっとそばにいてくれる</li>
          <li>感情を整理する時間をくれる</li>
        </ol>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  StCeが一番苦手なのは、<strong>「感情を無視される」「温度差がある」</strong>関係性。<br />
  「ちゃんと伝えたい」「本音でぶつかりたい」って思ってるのに、それをスルーされた瞬間、心のシャッターはガラガラ閉まる。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>気持ちを伝えてもスルーされる</li>
    <li>「重い」「めんどくさい」と切り捨てられる</li>
    <li>本気の言葉に冗談で返される</li>
    <li>逆に感情を利用されて操られる</li>
  </ul>

  StCeは、<strong>感情にまっすぐで本気で熱い</strong>。それゆえに、“伝える”ことにめちゃくちゃ命かけてる。<br />
  でもそのまっすぐさが、時に相手を圧倒し、結果的に「めんどくさい人」ってレッテル貼られることも多い。<br /><br />

  そして問題はその後。<strong>感情をぶつけた自分に対して、後から猛烈な自己嫌悪が襲ってくる</strong>。<br />
  「あんな言い方しなきゃよかった」「重たすぎたかな」って延々と考え込んで、結果メンタルはしっかり病む。<br /><br />

  このタイプがやりがちなのは、<strong>“感情を瞬間湯沸かし器で爆発させる → 自己反省の無限ループ”</strong>。<br />
  正直、心の中はずっと戦場。<strong>本音でいたいけど、嫌われたくない</strong>。この矛盾で毎回しんどくなってる。<br /><br />

  だから対策はシンプル。<strong>「伝える前に一呼吸」</strong>、これだけ。<br />
  感情を否定しろとは言わへん。ただ、<strong>言葉にする前にほんの1秒、“このまま言って大丈夫か？”って立ち止まる</strong>だけで、だいぶ世界は変わる。<br /><br />

  感情が強いってことは、それだけ「真剣」ってことやし、「嘘がない」ってことでもある。<br />
  でも、<strong>真剣すぎるときほど、自分を客観視する工夫が必要</strong>。ぶつける前に少し冷やすことで、ちゃんと伝わるようになるで。<br /><br />

  “感情を否定するんじゃなくて、整える”——それがStCeの恋愛をラクにする第一歩やで。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        共感タイプ（Ce, In, Hu）とは共鳴しやすい反面、<strong>感情の共鳴が激しすぎて一緒に沈む</strong>ことも。<br />
        論理型（Cl, Ro）とは温度差を感じやすく、「自分だけ浮いてる」と思ってしまいがち。<br />
        相手のペースや解釈にも耳を傾ける余裕がカギになります。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        <strong>熱さと本音で人を動かす</strong>StCeタイプは、<strong>感情に火をつける仕事</strong>が向いてます。<br /><br />
        💼 向いてる職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>カウンセラー、コーチング、教育者</li>
          <li>演劇・俳優・舞台関係</li>
          <li>熱意が活きる営業、福祉・介護職</li>
          <li>接客業・サービス業での現場リーダー</li>
        </ul>
        「熱くて面倒くさい」じゃなく、<strong>「熱いからこそ心が動く」</strong>——それがStCeの魅力。
      </p>
    </div>

  </div>
</PremiumReveal>

      <PremiumSection />
    </motion.div>
  )
}
