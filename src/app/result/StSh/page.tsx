'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function StShPage() {
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
          src="/C00094FE-0A81-470D-A971-FF78A2CCC172.png"
          alt="StShキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">StSh 内に闇宿す職人肌</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">見えへんところで、ずっと戦ってんねん。</p>
      </div>


      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：St（ストレート） × 裏：Sh（シャドウクリティック）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
<p>
「認められたい。でも、どうせ自分なんか…」——<br />
このタイプの心の中では、<strong>“熱い本音”と“強すぎる自己否定”が、常に戦っている</strong>んです。<br />
誰かにちゃんと見てほしい、認めてほしい、理解してほしい。そんな<strong>まっすぐな欲求</strong>が根底にあるのに、<br />
それを口に出す前に、「でもそんなこと思うなんて図々しいかも」と自分で打ち消してしまう。<br /><br />

StShタイプは、<strong>感情そのものはストレート</strong>で、嘘が嫌いで、誠実な想いを持ってるのに、<br />
“素直な自分”を表に出すことに<strong>強烈な抵抗感</strong>があります。<br />
なぜなら過去に「本音を出して傷ついた経験」や「自分の想いが受け入れられなかった記憶」を引きずっていて、<br />
「どうせ伝えても、分かってもらえへん」「出すだけ損」って無意識に思ってしまってるからです。<br /><br />

それでも心の奥ではずっと叫んでるんです。<br />
「ちゃんと気づいてほしい」「がんばってるのを見てほしい」「弱さを否定しないでほしい」って。<br />
でもその声はいつも、<strong>「でも自分なんかが求めても、きっと煙たがられるだけや」</strong>という冷たい内なる声にかき消されてしまう。<br /><br />

StShの根本には、<strong>「自分を認めてあげたい」気持ちと「自分なんかが認められるわけない」という絶望</strong>が同居してる。<br />
そのせめぎ合いがずっと止まらない。<br />
一見落ち着いて見えても、<strong>内側では自分自身との葛藤が終わらない</strong>、<strong>矛盾のかたまり</strong>なんです。<br /><br />

でもね、そんな矛盾の中で「それでも、ちゃんとやらなきゃ」と思えるあなたの真面目さや誠実さは、ほんまもんです。<br />
誰かに褒められなくても、認められなくても、<strong>自分なりの“ちゃんと”を貫こうとする姿勢</strong>こそが、StShの誇りであり、存在意義そのものなんです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            自分の信念や美学を持っていて、手抜きやごまかしが嫌い。<br />
            「ちゃんとやらなきゃ」という強い責任感がある一方で、<br />
            うまくいかないとすぐ「自分のせいだ」と内省しすぎてしまう。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            思い込みが強く、「自分が悪い」とすぐに自己批判へ向かいやすい。<br />
            「他人は気づいてないのに、自分だけが反省してる」みたいな場面も多い。<br />
            感情の起伏は激しくないように見えて、実は心の中では嵐が吹き荒れてる。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            一見無口で真面目、仕事に対しては黙々と打ち込む“職人気質”。<br />
            でも、褒められても「たまたまです」って流しがちで、自信を持てない。<br />
            プライドはあるけど、それ以上に“自分なんて…”が強い。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>一つのことに地道に取り組む集中力と責任感</li>
            <li>本音と向き合える誠実さ</li>
            <li>見えないところで努力してる“縁の下の力持ち”</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>自己否定が強すぎて自信を持ちにくい</li>
            <li>自分にばかり厳しくなり、他人と比べて落ち込みやすい</li>
            <li>気づかれないところでメンタルを削ってしまう</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「職人の顔して、内側ボロボロなやつ。」</p>
        </div>

        

       <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    St×Shタイプのあなたは、<strong>人一倍真面目で、責任感が強く、自分に厳しい努力家</strong>ですね。<br />
    でも、そのがんばり……<strong>ちゃんと自分で認めてあげていますか？</strong><br /><br />

    「まだまだ」「こんなんじゃダメ」「もっとやらなきゃ」——<br />
    そうやって常に自分を追い立てて、<strong>“足りないところ”ばかり見ていませんか？</strong><br />
    正直に申し上げますが、<strong>謙遜を超えて、自分を軽んじすぎです。</strong> それ、自滅に近いです。<br /><br />

    他人には「すごいね」って言えても、自分のことは一切褒められない。<br />
    「認めてほしい」気持ちが心の奥にはあるのに、「いや、自分なんか…」と先に否定してしまう。<br />
    <strong>そんな自己否定グセ、そろそろ手放しませんか？</strong><br /><br />

    大切なのは、「できていないこと」じゃなくて、「今日もやり切った自分」をきちんと評価する視点です。<br />
    誰かの評価じゃなく、<strong>“自分が納得できたか”を軸にする</strong>ことで、心の安定も変わっていきます。<br /><br />

    そして、苦しくなったときは、<strong>「頼る」ことを弱さだと思わないでください。</strong><br />
    他人の力を借りながら、自分の頑張りをちゃんと噛みしめていくこと。<br /><br />

    それが、<strong>“本当の職人気質”であり、“信頼される大人のあり方”</strong>なのだと思いますよ。
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
StShタイプは、自分の内側に燃えるような情熱を抱えていながらも、それを誰かにぶつける勇気は持てません。<br />
なぜなら、「どうせ私なんかが本気出しても、相手に引かれるだけやろ」「この気持ちを出しても、重いって思われるだけや」と、<strong>常に“嫌われる未来”を先回りして想像してしまう</strong>からです。<br />
愛されたい気持ちは誰よりも強いくせに、<strong>「自分が愛される価値なんてない」って勝手に決めつけて、相手の好意さえも“たまたま”やと思ってしまう</strong>。<br />
好かれても信じきれず、頼られても「自分じゃ不安やろうな」と自虐して、せっかくの関係を自分で壊してしまいがちです。<br /><br />

ほんまは甘えたいし、安心したいし、好きな人には全力で尽くしたい。<br />
でも、その“本音の自分”を出す勇気がない。<br />
だって、そいつを出して拒絶されたら、もう立ち直られへんくらいに傷つくのが分かってるから。<br /><br />

結果、<strong>遠慮・我慢・空気読みのフルコンボ</strong>で、自分を押し殺して付き合ってしまい、しんどくなるのはいつも自分だけ。<br />
それでもなお、「ちゃんと好きでいられる自分でいたい」「大事にできる自分でいたい」って、<strong>歪んだ愛情と誠実さで恋を続けようとする</strong>から、余計にしんどい。<br /><br />

StShタイプの恋愛って、<strong>自分との戦いが9割</strong>。<br />
「ほんまにこれでええんかな…」「重くないかな…」って、常に自分に問いかけ続けてる。<br />
一途で真面目で、本当はめちゃくちゃ優しいのに、<strong>“自信のなさ”だけがすべてを邪魔してくる</strong>。<br /><br />

ほんでまた、「恋愛ってしんどいな…」って、心の奥でポツリとつぶやいてしまうんです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        <strong>責任感が強く、手を抜けない職人気質</strong>。<br />
        自分が納得できるまで徹底的にやりこむタイプで、<strong>表には出さずともかなり努力家</strong>です。<br />
        褒められるのは苦手だけど、内心ではちゃんと評価されたいという気持ちも抱えてる複雑さがあります。<br />
        <strong>一人で黙々と進められる環境が向いている</strong>反面、<strong>無理を抱え込んでしまいがち</strong>なのでケアも必要。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        StShは、<strong>「静かに見守ってくれる人」「否定せず受け止めてくれる人」</strong>と相性がいいです。<br />
        無理に励まさず、ただそばにいてくれるようなタイプに心を開きやすい。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuIn（共感マスター）</strong>：深いところで感情を共有できる</li>
          <li><strong>TfCe（お世話焼き妖精）</strong>：そっと寄り添ってくれるやさしさが沁みる</li>
          <li><strong>ViCe（理想共感派）</strong>：弱さごと受け止めてくれる包容力</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        StShは、<strong>「信頼」と「安心感」がなければ絶対に心を開きません</strong>。<br />
        自分の弱さや感情を見せるのが怖いため、<strong>心を許すまでにはかなり時間がかかる慎重派</strong>。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>否定せず話を聞いてくれる</li>
          <li>傷つく言動をしない（冗談でも刺さらないように）</li>
          <li>急かさず、距離感を尊重してくれる</li>
          <li>自分の努力をさりげなく認めてくれる</li>
          <li>「いてくれるだけで安心」と思わせてくれる</li>
        </ol>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  StShが一番傷つくのは、<strong>冗談めかしてでも否定されたり、努力を軽く扱われること</strong>。<br />
  本人なりにすごく考えて、耐えて、頑張ってるのに、その想いがスルーされた瞬間に一気に心を閉ざしてしまう。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>「そんなの気にしすぎだよ」と言って悩みを軽視する</li>
    <li>明るく軽いノリで過去の傷を笑い飛ばす</li>
    <li>「もっと自信持ちなよ」などの圧をかけてしまう</li>
    <li>自分の話ばかりでStShの言葉を拾わない</li>
  </ul>

  StShは、<strong>外から見ると冷静で淡々としているように見えて、内面はかなり繊細で葛藤を抱えている</strong>タイプ。<br />
  「気づかれたくないけど、ほんとはちょっと気づいてほしい」――この矛盾が恋愛の中で苦しさを生みます。<br /><br />

  自己肯定感が低めなせいで、<strong>相手の優しさも「お世辞かも」「本気じゃないかも」と受け取れない</strong>ことが多い。<br />
  そのくせ、心の奥では「本当は自分も大事にされたい」と強く願っている。<br />
  だから、何気ない一言で簡単に「やっぱり自分はダメなんだ」と自分の存在ごと否定してしまうんです。<br /><br />

  しかもStShは、<strong>「ちゃんとしないと愛されない」と思い込みやすい</strong>。<br />
  完璧な自分を演じて、弱さを隠して、それでもダメだったときにダメージが倍増するというループにハマりがちです。<br /><br />

  だから恋愛においては、<strong>「安心して素を出せる相手かどうか」がものすごく重要</strong>。<br />
  自分のペースで感情を出しても否定されないこと、ちょっとくらい不器用でも大丈夫だよと言ってくれること――  
  そういう“温かい受容”があるかどうかが、関係の質を大きく左右します。<br /><br />

  そして、StSh自身にとって必要なのは、<strong>「仮でも信じてみること」</strong>。<br />
  「そんなふうに言ってくれるってことは、本当にそう思ってくれてるかもしれない」って、  
  少しだけでも他人の視点を信じてみる勇気が、心の解放につながります。<br /><br />

  自分のことをよくわからないまま恋愛に入ると、StShは自分の価値をどんどん疑って苦しくなる。<br />
  だからこそ、<strong>恋愛とは“自分の弱さごと抱きしめる練習”</strong>だと思ってみてください。<br /><br />

  あなたの魅力は、外から見ればもう十分ある。<br />
  完璧じゃなくても、迷っていても、<strong>そのままのあなたで、ちゃんと愛されていい</strong>。  
  まずはその事実を、信じてみることから始めてみましょう。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        ClやRoタイプの論理派に対しては、<strong>尊敬と同時に「自分は劣ってる…」と感じがち</strong>。<br />
        感情タイプ（Ce, In）とは安心感はあるが、<strong>同調しすぎてメンタルを削られることも</strong>。<br />
        La, Viの陽キャタイプは刺激になるが、<strong>「あんなふうになれない」と余計に落ち込む危険性</strong>もあるので要注意。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        <strong>黙々と作業できて、成果が“カタチ”として残る仕事</strong>がベスト。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>クリエイター系（デザイン・動画・イラストなど）</li>
          <li>設計・建築・整備士などの技術職</li>
          <li>研究職・ライター・図書館司書</li>
          <li>工芸・陶芸などの手仕事系</li>
        </ul>
        <strong>他人から見えない部分で輝ける環境</strong>が、自信と安心を育ててくれます。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
