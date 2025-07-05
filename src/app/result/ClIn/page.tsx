'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'


export default function ClInPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#0e0c2b] via-[#171a33] to-[#1b1e3c] flex flex-col items-center justify-start px-4 py-12 text-white text-center"
    >
      {/* 📡 キャラクター画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="w-full max-w-md"
      >
        <Image
          src="/5B0D03EF-4F71-4B4B-A629-668922F7BB81.png"
          alt="ClInキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain rounded-xl shadow-lg"
        />
      </motion.div>

      {/* タイプ名・キャラネーム・キャッチ */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">ClIn 分析シンパサイザー</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          冷静に、でも静かに。心の波を読み取る観察者。
        </p>
      </div>

      

      {/* 🧠 タイプ解説 */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold text-white">【タイプ構成】</h2>
          <p>表：Cl（クールリーダー） × 裏：In（インサイトフィール）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【根本動機】</h2>
          <p>
            <h2 className="text-lg font-semibold">【根本動機】</h2>
<p>
  感情に振り回されたくない。でも空気はちゃんと読まなきゃ。<br />
  人間関係の中で、必要以上に感情に巻き込まれることを本能的に避けてしまう。<br />
  誰かの感情の渦に飲み込まれると、自分の思考が乱されることを知っているから。<br />
  だからこそ、どこか一歩引いた視点で、冷静に物事を見ようとするクセがある。<br /><br />

  でも、それは決して「無関心」なわけじゃない。むしろ逆で、人一倍、相手の心の動きに敏感。<br />
  相手が本当に言いたいこと、感じていること、その場の空気の違和感や沈黙の裏にある気持ち……<br />
  そういった“見えない情報”を無意識にキャッチしようとする繊細なアンテナを持っている。<br /><br />

  理性的であろうとするほど、余計に周囲の感情の「揺れ」や「痛み」に反応してしまい、<br />
  知らないうちに心が疲れてしまうこともある。<br />
  表向きは落ち着いていて冷静に見えても、内側では他人の感情を処理し続けることで、<br />
  自分の心がどっと疲弊している──そんなふうに、理性と感受性の両方を抱えて生きているタイプ。<br /><br />

  ただし、その「気づける力」を持っていても、<strong>必ずしも“関心”を持つとは限らない</strong>。<br />
  感情を読み取っても、そこに深入りする義務はない。<br />
  「今この人が何を考えているのか」は理解できても、<strong>それに心を寄せたいわけじゃない</strong>。<br />
  そういう<strong>ドライな共感</strong>も、ClInの持つスタンスのひとつ。<br /><br />

  感情を理解することと、共鳴することは別。<br />
  ClInはその距離感を意識的に保ちながら、<br />
  冷静に、でも確かに“他者を見抜いている”タイプなのです。
</p>

          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【価値観】</h2>
          <p>
            正確さや論理性に安心感を覚える一方で、他人の感情の背景や意味を無意識に読み取ろうとする。
            人との摩擦を避けたいからこそ、“その人がなぜそう感じたのか”を丁寧に探ってしまうタイプ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【思考傾向】</h2>
          <p>
            頭の中では常に冷静に整理しているが、人の言葉や空気の違和感に無意識で反応しやすい。
            たとえば「この人、本当はこう思ってる？」と考えすぎてしまい、処理が渋滞することも。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【行動傾向】</h2>
          <p>
            表情は穏やかで控えめ。でも、内心ではずっと人の気持ちや空気を読み続けている。
            自分の感情は後回しにしがちで、「大丈夫なフリ」をしてしまう傾向が強い。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>冷静な視点と鋭い観察力</li>
            <li>感情の機微を読み取る繊細さ</li>
            <li>複雑な状況でもパニックにならず判断できる</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情を言語化するのが苦手</li>
            <li>無意識に我慢しすぎてストレスに気づきにくい</li>
            <li>即断即決を求められると不安になりやすい</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【一言で言うと】</h2>
          <p>「空気を読んで、冷静に観察して、感情を抱え込む天才。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold text-white">【成長ポイント】</h2>
  <p>
    あなた、頭の中で何回もシミュレーションして「やる気あるのに動けない」状態、続いていませんか？<br />
    Cl×Inタイプは、分析力や想像力に優れていて、<strong>行動する前に「最適解」を探そうとする傾向が強い</strong>んです。<br />
    でもね、<strong>その“最適解探し”が、あなたの一歩を止めてしまっている</strong>ことに気づいていますか？<br /><br />

    考え抜くことは強みです。でも、<strong>「もっと準備してから」ばかりを繰り返していたら、いつまで経ってもスタート地点から動けません。</strong><br />
    完璧に整ってから動こうとすると、「動けない自分」にもどかしさや自己否定が積もっていきますよね。<br /><br />

    だからこそ今必要なのは、<strong>“まず動いてから、考えながら調整する”という柔軟さ</strong>です。<br />
    すべてを頭の中で組み立ててから行くのではなく、「やってみないと分からないこともある」と自分に許可を出してみてください。<br /><br />

    <strong>完璧じゃなくても、進める人が結局いちばん遠くまで行ける</strong>んです。<br />
    その分析力、内省力は、動いたあとにも十分に活かせますよ。<br />
    「間違ってもいい」「未完成でもええやん」——その一歩が、あなたを変えてくれます。
  </p>
</div>

      </div>
   
 <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold text-white">【恋愛傾向】</h2>
      <p>
  Cl×Inタイプは、<strong>恋愛感情そのものを“観察と分析の対象”として捉えがち</strong>な、思考優先型の恋愛スタイルです。<br />
  相手の表情・言動・間の取り方など、すべてを無意識に観察しながら、<strong>「これってどういう感情？」「今の反応にはどんな意味がある？」</strong>と頭の中でずっと処理しています。<br /><br />

  本人にとっては「相手を理解したいから分析している」だけなのですが、<strong>好きな人に対してほど、監視カメラばりの観察モードに突入</strong>してしまうことも。<br />
  その一方で、<strong>自分の感情をどう扱えばいいか分からず、表現の仕方に悩む</strong>という不器用さも持ち合わせています。<br /><br />

  感情をそのままぶつけることが苦手で、「こんなこと言ったら引かれるかな？」「このタイミングじゃない気がするな…」と、<strong>一つの発言に何百通りも裏取りをしてしまう慎重派</strong>。<br />
  無意識のうちに「正しい愛し方とは？」という問いに囚われ、<strong>“感じる”より“考える”が先に来てしまう</strong>んです。<br /><br />

  その結果、相手からは「何考えてるか分からない」「本音が見えない」と思われがち。<br />
  でも、本人はめちゃくちゃ考え抜いて接してるので、<strong>内心では「こっちはちゃんと向き合ってるつもりなんやけど…？」と困惑気味</strong>。<br /><br />

  一度心を許した相手には、<strong>不器用ながらも誠実で深い愛情</strong>を注ぎます。<br />
  ただし、感情表現の引き出しが少なすぎて、時には「感動が伝わらないAI」として誤解されることも。<br />
  派手な愛情表現は苦手でも、<strong>日々の小さな行動に静かに愛を乗せて届けるタイプ</strong>です。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【仕事傾向】</h2>
      <p>
        ロジカルさと空気察知力のハイブリッド。<br />
        複雑な状況でも冷静に分析し、慎重に判断を下せる。<br />
        校正・研究・戦略系など“ミスが許されない裏方仕事”に適性あり。<br />
        一方で心理や教育など、人の感情の背景まで読み取る繊細さが求められる分野でも本領発揮できる。<br />
        ただし、無意識に気を張りすぎてストレスをためがちなので、疲労に早めに気づくことが大事。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【相性の良いタイプ】</h2>
      <p>
        ClInにとって心地いいのは、「察しすぎない人」と「整理されたコミュニケーション」。<br />
        相性がいいのは以下のタイプ👇
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>
            <strong>ViRo（未来型ロジック）</strong>：思考ベースで話せる。感情を求めすぎず、視点の広さも心地よい。
          </li>
          <li>
            <strong>ClSh（クールシャドウ）</strong>：感情の出し方や距離感が近く、言葉少なめでも分かり合える相手。
          </li>
          <li>
            <strong>TfIn（他人軸共感型）</strong>：自分の感情より相手を優先するタイプで、ClInの繊細さを否定せず受け入れてくれる。
          </li>
        </ul>
        感情の波が激しいタイプや、急に詰めてくる相手はやや苦手。  
        ClInにとっては「静かな理解者」が何よりの安心材料。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【親密になるまでのステップ】</h2>
      <p>
        ClInは内面で情報を処理しすぎるから、心を開くまでに時間がかかる。<br />
        「この人、急かしてこない」「ちゃんと意味をわかってくれそう」と感じた瞬間に、ちょっとずつ距離を縮めていく。<br /><br />
        🔽 ClInが親密になるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>会話が論理的 or 意味があると感じる</li>
          <li>こちらのペースに合わせてくれる</li>
          <li>感情を押し付けてこない</li>
          <li>「察してくれ」とは言わないけど、ちゃんと観察してくれる</li>
          <li>無理に詮索せず、信頼で少しずつ踏み込んでくれる</li>
        </ol>
        理性の中にも感情があるClInは、「わかろうとしてくれる姿勢」に心が動くタイプやねん。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【恋愛でのNGパターン】</h2>
<p>
  ClInがしんどくなるのは、<strong>感情の押し付け</strong>と<strong>スピード重視の関係性</strong>。<br />
  「なんで言ってくれないの？」「今すぐ答えて」などの<strong>急かし・圧</strong>に対して、脳がフリーズする傾向があります。<br />
  一度立ち止まって考える時間が必要なのに、感情の波をドンとぶつけられると、<strong>内心では軽くパニック</strong>。<br />
  相手の意図を読みすぎて、<strong>“本当はこう思ってるのでは”という妄想で自爆</strong>するのもこのタイプの癖です。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>即レスや即答を求められる</li>
    <li>「察してよ」と強く言われる</li>
    <li>感情の波をそのままぶつけられる</li>
    <li>本人の気持ちより“結果”を重視される</li>
  </ul>

  ClInは<strong>意味のある距離感</strong>と<strong>安心できるやり取り</strong>を大切にしたいタイプ。<br />
  焦らずじっくりと向き合ってくれる人、<strong>感情より言語でちゃんと伝えてくれる人</strong>と相性がいいです。<br /><br />

  ただし、自分の中で情報を整理しすぎるあまり、<strong>相手に気持ちが伝わる前に自己完結する</strong>ことも多め。<br />
  気づいたら“勝手に落ち込んで、勝手に離れる”みたいな極端行動になりがちやから注意。<br /><br />

  <strong>相手の行動を解析しすぎて妄想に沈没する癖</strong>があるなら、<br />
  まずは<strong>「私は事実を見てますか？それとも想像だけで判断してますか？」</strong>って自分に問い直すのが大事。<br />
  感じたことと、現実で起きてることを切り分けて、“推測より会話”を心がけるだけで、ClInの恋愛はだいぶ生きやすくなります。
</p>
<div>
  <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
  <p>
    感情的なタイプ（St, Hu, Ceなど）との関係では、<strong>「冷たく見える」</strong>と誤解されがち。<br />
    自分と同じ<strong>“理性型”（Cl, Ro）</strong>との会話は心地いいけど、<strong>共感を共有する姿勢</strong>も忘れないように。<br />
    感情を<strong>内側で処理しすぎる癖</strong>があるので、定期的に<strong>「口に出す習慣」</strong>を意識することで、誤解やストレスを減らせます。
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold">【向いてる職業】</h2>
  <p>
    冷静さと分析力に優れたClInは、<strong>構造的・理論的な思考を活かせる仕事</strong>に向いてます。<br />
    例：分析職、校正、研究、戦略企画、エンジニア、教育、心理職、法律関係など。<br />
    対人関係においても、<strong>感情に巻き込まれずに理解できるスタンス</strong>を持ってるので、共感が求められる職種でも力を発揮できます。
  </p>
</div>

    </div>

  </div>
</PremiumReveal>
<PremiumSection />
</motion.div> // ✅ ← これで完璧に閉じた！
  )
}
