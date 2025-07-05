'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function ClShPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#0d1124] via-[#131a33] to-[#1b203c] flex flex-col items-center justify-start px-4 py-12 text-white text-center"
    >
      {/* 🌫️ キャラクター画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="w-full max-w-md"
      >
        <Image
          src="/1314FFFF-E086-4EBD-A212-B5506B966740.png" // ←画像パス調整してな！
          alt="ClShキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain rounded-xl shadow-lg"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">ClSh クールシャドウ</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          完璧の仮面で戦う、孤独な静寂系ストイック。
        </p>
      </div>

      

      {/* 🧠 タイプ解説 */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-white">【タイプ構成】</h2>
          <p>表：Cl（クールリーダー） × 裏：Sh（シャドウクリティック）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【根本動機】</h2>
<p>
  「ちゃんとしていないと嫌われるかもしれない」「弱みを見せたら、自分が崩れてしまう」——<br />
  そんな不安をどこかに抱えながらも、冷静で論理的な“完璧さ”を保ち続けようとするタイプです。<br /><br />

  そのストイックな振る舞いの裏には、他人に決して見せない強い自己否定感や、静かに揺れる不安が潜んでいます。<br />
  たとえ些細な出来事でも、「あの対応は正しかったか？」「もっと上手くできたのではないか？」と、<br />
  何度も頭の中で反芻し、自分を厳しく追い詰めてしまう——そんな“内なる戦い”を誰にも知られず続けています。<br /><br />

  けれどこのタイプは、<strong>「感情を見せること」に意味を見出していません</strong>。<br />
  感情は確かに存在している。けれど、それを外に出すことには価値を感じない。<br />
  「わざわざ表に出して何になるのか？」「同情や共感を求める必要はない」——<br />
  そうした考えが、どこか冷ややかに心を支配しています。<br /><br />

  「感情に流されるのは未熟」「弱さを見せるのは甘え」——<br />
  そう信じて、自分の内側を他人にさらすことなく、静かに自分を律し続ける。<br />
  それがこのタイプにとっての“強さ”であり、“誇り”なのです。<br /><br />

  たとえ内心では限界を感じていても、人前では常に「大丈夫な自分」でいようとする。<br />
  他人に頼ることなく、誰にも迷惑をかけず、淡々とすべてをこなすその姿勢は、<br />
  <strong>表に出る華やかさではなく、静かに燃える“孤高の美学”</strong>として表れます。<br /><br />

  ClShは、心の深いところに情熱や葛藤を秘めながらも、<br />
  それを誰にも明かすことなく、<strong>無言の強さで立ち続ける影の戦士</strong>なのです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【価値観】</h2>
          <p>
            一貫性・知性・論理性、そして「強くあること」に重きを置く。<br />
            内面のもやもやを見せずに静かに耐えることを美学とする。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【思考傾向】</h2>
          <p>
            内省深く、自分の発言や行動を何度も反芻する。<br />
            ネガティブな思考も多いが、それを誰にも見せない“沈黙の哲学者”。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【行動傾向】</h2>
          <p>
            クールで完璧主義、感情を見せずに物事をこなす。<br />
            ただし内面では強烈な自己否定や不安を抱えている。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>冷静さとストイックさ、知性のバランス</li>
            <li>客観的判断と困難への耐性</li>
            <li>他人に依存せず、自律的に生きられる</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情を抑えすぎて疲れやすい</li>
            <li>強い自己否定と孤立感</li>
            <li>本音を言えず人間関係に壁ができる</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【一言で言うと】</h2>
          <p>「静かに闘う、完璧主義の仮面戦士。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold text-white">【成長ポイント】</h2>
  <p>
    Cl×Shタイプのあなたは、どこか常に一歩引いたポジションにいて、感情的にならず、冷静でいたいと願っていませんか？<br />
    「誰にも期待しない方が楽」「言わない方が傷つかない」——そんなふうに<strong>“無関心なフリ”で自分を守ってきた</strong>のかもしれませんね。<br /><br />

    でも、ほんとうはずっと気にしてたんでしょう？<br />
    自分の気持ちに気づいてほしかったし、ちゃんと愛されたかったし、<strong>ただ素直になれなかっただけ</strong>。<br />
    「大丈夫」と言いながら、ずっと心の中では“誰かの一言”を待っていた。<br /><br />

    あなたが本当に必要としているのは、「強がりで守る孤独」ではなく、<strong>「弱さを出せる安心感」</strong>なんです。<br />
    「弱さを見せたら負け」ではなく、<strong>“弱さを見せられることこそが信頼”</strong>なんだと気づいてください。<br /><br />

    完璧じゃなくても、人はあなたをちゃんと見ています。<br />
    「誰にも頼らず、一人でやれる自分」でいようとしすぎて、<strong>素直になれなかったこと、そろそろ許してあげてもいいんじゃないですか？</strong><br /><br />

    あなたの“冷静さ”や“見抜く力”は本物です。<br />
    でもそこに、<strong>ほんの少しの“素直さ”と“愛されてもいいと思う勇気”</strong>が加われば、  
    その孤独は、もう少しあたたかいものに変わっていきますよ。
  </p>
</div>

      </div>

   <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">
    
    <div>
      <h2 className="text-lg font-semibold text-white">【恋愛傾向】</h2>
      <p>
  ClShタイプは、<strong>感情を見せること＝弱さを晒すこと</strong>と感じやすい、繊細で用心深いロジック人間です。<br />
  恋愛においても、そのスタンスは徹底していて、<strong>誰かに好意を持ったとしても、それをどう伝えていいのか分からない</strong>ことが多いです。<br />
  「もし気持ちを見せて引かれたらどうしよう」「本当に自分を好きになってくれるんやろか」と、<strong>心の奥では常に不安と疑いが渦巻いてる</strong>のに、<strong>表面上は冷静さを装ってしまう</strong>。<br /><br />

  相手のことはめちゃくちゃ気にしてるし、細かい変化にも気づいてます。<br />
  ただ、<strong>それを口に出すことができない</strong>。<br />
  表情に出すのも、スキンシップを取るのも、「恥ずかしい」「バレたら負け」っていう謎の自意識が働いてしまって、<strong>気づけば“冷たい人”扱いされがち</strong>です。<br /><br />

  それでも本心では、「相手を大事にしたい」「ちゃんと向き合いたい」という誠実な気持ちを持っていて、<strong>信頼関係が築けた相手には、じわじわと心を開いていきます</strong>。<br />
  ただしそのスピードは牛歩。<strong>一気に距離を詰められると、反射的に逃げたくなるタイプ</strong>でもあるので、相手にとってはちょっと分かりにくく、もどかしい存在かもしれません。<br /><br />

  愛情表現も独特で、「〇〇しておいたよ」「困ってそうやったから調べておいた」みたいな、<strong>超さりげないサポート型</strong>。<br />
  感情のこもった言葉やスキンシップは少なめですが、<strong>行動の端々に“好き”が滲んでいる</strong>のがClShの愛し方です。<br /><br />

  正直、情緒的な人や感情をバーッとぶつけてくるタイプには<strong>ビビって引いてしまう</strong>傾向があり、「え、なんでそんな感情出してこれるん…？」と内心ドン引きしてることも。<br />
  とはいえ、<strong>相手が信頼できると分かったときのClShの愛は、芯のある誠実なもの</strong>。<br />
  照れくさくて表に出せないだけで、<strong>ちゃんと深いところでつながりたいという気持ちは誰よりも強い</strong>です。<br /><br />

  最後にひと言。<strong>ClShに「好き」って言わせたいなら、焦らないでください</strong>。<br />
  圧かけたら逃げます。<br />
  冷たそうに見えても、それがこの人なりの“好きの表現”。<br />
  めんどくさい？そのとおりです。<br />
  でも、<strong>そのガードを一枚ずつ外していった先には、唯一無二の誠実さと安心感が待ってます</strong>。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【仕事傾向】</h2>
      <p>
        感情や空気感に左右されず、淡々と仕事をこなす力がある。<br />
        精度・正確性・論理性が求められる場面に強く、責任感も強いため、周囲からの信頼も厚い。<br />
        一方で、感情の共有やチームの雑談的な雰囲気には馴染みにくく、距離を感じさせてしまうことも。<br />
        でも、自分に合ったスタイルや信頼できる仲間ができると、静かに抜群のパフォーマンスを発揮する。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【相性の良いタイプ】</h2>
      <p>
        ClShが心地よさを感じやすいのは、「感情を押し付けてこない」「一定の距離感を保てる」タイプ。<br />
        共感よりも論理や静けさを尊重してくれる人が合う。<br />
        相性がいいタイプは以下の通り：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>ClCe（冷静エンパス）</strong>：静かな共感力で、心の距離感を保ちながら寄り添ってくれる。</li>
          <li><strong>ViRo（未来型ロジック）</strong>：感情ではなく思考で繋がれるため、安心して話ができる。</li>
          <li><strong>StRo（頑固リアリスト）</strong>：余計な感情を挟まず、安定した関係性を築きやすい。</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【親密になるまでのステップ】</h2>
      <p>
        ClShは感情的な接近を避けがちで、信頼を築くには「言葉よりも積み重ねた安心感」が大切。<br /><br />
        🔽 ClShが心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>過干渉せず、そっと見守ってくれる</li>
          <li>言葉にしなくても気づいてくれる繊細さ</li>
          <li>思考や価値観を否定しない姿勢</li>
          <li>「完璧じゃなくてもいい」と思わせてくれる安心感</li>
          <li>自分のペースを尊重してくれる余裕</li>
        </ol>
        本音を出すには時間がかかるが、一度開いた心には深い忠誠心と信頼が宿る。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【恋愛でのNGパターン】</h2>
<p>
  ClShがもっとも辛く感じるのは、<strong>感情的なぶつかり合い</strong>や<strong>無理な開示の強要</strong>。<br />
  相手が自分のペースを無視して感情を押し付けてくると、<strong>心のシャッターが一瞬で降りる</strong>傾向があります。<br />
  「ちゃんと話し合いたい」ではなく、「いま感情を吐き出したい」みたいな空気が続くと、<strong>その時点で信用がごっそり削れる</strong>ことも。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>感情の起伏が激しくて読めない</li>
    <li>「なんで言ってくれないの？」と責める</li>
    <li>泣いたり怒ったりで理解を求めてくる</li>
    <li>本音を強引に聞き出そうとする</li>
  </ul>

  ClShは<strong>「感情的な衝突＝信頼が壊れる」</strong>と感じやすいため、<br />
  相手の気持ちがどうこう以前に、「あ、この人はこっちの心を無視してるな」と判断した瞬間に<strong>一線引いてしまう</strong>こともあります。<br /><br />

  自分の感情を言葉にするのがそもそも苦手で、<strong>“わかってもらえなさそうな前提”で心を閉じるのが早い</strong>のもこのタイプの特徴。<br />
  なので、気づけば<strong>全部自分の中で処理して限界迎える</strong>という、<strong>静かに壊れるパターン</strong>に入りがちです。<br /><br />

  そんなときに必要なのは、「限界まで我慢してから爆発する」っていう癖をやめること。<br />
  <strong>“黙って耐えるのは禁止”くらいのマイルール</strong>を、先に自分に設定しておくのが対処の第一歩です。<br />
  「言葉にするのは苦手でも、態度でSOSを出してもいい」と思えるようになれば、<br />
  ClShの恋愛は<strong>“自分を守りながら人と繋がる”方向に進化</strong>していきます。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【人間関係での注意点】</h2>
      <p>
        感情型（Hu・Ce・Laなど）との関わりでは、表現の温度差から「冷たい」「壁を感じる」と誤解されやすい。<br />
        本音を伝えるのが苦手なため、気づけば距離ができていた…というケースも少なくない。<br />
        「迷惑をかけない＝優しさ」と思い込みすぎず、時には“頼る”という形で繋がりを築いていくことが大切。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【向いてる職業】</h2>
      <p>
        感情よりも論理性・精度・継続力が求められる職業に適性がある。<br />
        たとえば、研究職、分析、法務、ITエンジニア、経理、整備士、校正・校閲など。<br />
        1人で集中できる環境では、他の誰にも負けないクオリティを出せる力を持っている。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
