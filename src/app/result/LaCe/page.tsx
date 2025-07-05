'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function LaCePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#f9d8f6] via-[#f9a3ce] to-[#e05cb2] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
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
          src="/ABC7F5DA-9F8E-4FDF-8761-13AF6BDD3C41.png"
          alt="LaCeキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">LaCe 愛されスター</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          いつも笑顔。でも心はすぐ泣きそう。
        </p>
      </div>

      

      {/* 解説エリア */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：La（ライトスター） × 裏：Ce（コアエンパス）</p>
        </div>

        <div>
  <h2 className="text-lg font-semibold">【根本動機】</h2>
<p>
  「誰かの心に、そっと残るような存在でありたい」——  
  LaCeタイプの方は、生まれながらに<strong>人に愛される魅力</strong>を備えています。<br />
  明るい笑顔、気さくな振る舞い、リアクションの豊かさ。<br />
  その人がいるだけで場がなごみ、自然と人の視線が集まるような、まるで物語の主人公のような存在感を放ちます。<br /><br />

  ですがその根底には、<strong>「愛されていたい」「注目されたい」</strong>という強い願いも隠されています。<br />
  SNSでもリアルな場でも、褒められることや注目されることがエネルギー源になりやすく、<br />
  ときに“ちょっとした演出”で自分を良く見せようと頑張りすぎてしまうこともあるでしょう。<br /><br />

  華やかで目立ちたがりな一面と、人一倍傷つきやすい繊細さ。<br />
  そのギャップを誰にも知られないまま、「明るくて好かれる自分」を演じ続けるうちに、<br />
  ふと「本当の自分って、何なんだろう…」と不安に包まれる瞬間もあるかもしれません。<br /><br />

  小さな無視、ふとした態度、誰かの何気ない一言で、<strong>心の奥が一気に冷えてしまうような感覚</strong>になることもあります。<br />
  自信と不安が共存していて、感情の浮き沈みに自分でも戸惑うことが多いかもしれません。<br /><br />

  それでもLaCeの方は、誰かに寄り添おうとし、笑顔で前を向こうとする力を持っています。<br />
  傷つきやすさは、同時に<strong>人の感情に敏感で、優しくなれる才能</strong>でもあるのです。<br /><br />

  「そのままの自分でも、愛されていい」<br />
  そう思える場所や人に出会えたとき、<br />
  LaCeは<strong>無理に目立たなくても、自然と誰かの心を照らす光</strong>になります。<br /><br />

  承認されたい気持ち、目立ちたい気持ち——それらを否定する必要はありません。<br />
  その根っこには、<strong>誰かとちゃんと心をつなぎたい</strong>というLaCeらしい純粋さがあるのです。
</p>


        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            愛嬌・ノリ・ポジティブさ——「人から好かれる」ためのスキルが自然と身についている。<br />
            でもその根底には、「嫌われたら存在価値がなくなるかも」という不安がある。<br />
            だからこそ、人からの“安心”や“肯定”を強く求める。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            明るく振る舞ったあとほど、「今の言い方、変じゃなかったかな…」と不安になる。<br />
            自信がある自分と、不安でいっぱいな自分が交互に出てきて、<strong>感情のジェットコースター状態</strong>になりやすい。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            その場では元気で明るいけど、家に帰ってからどっと疲れてしまうタイプ。<br />
            褒められたら舞い上がるけど、ちょっとした一言で落ち込む。<br />
            外向きのテンションと内面の繊細さが全然違う、“感情多忙系スター”。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>親しみやすさと明るさで好印象を与えられる</li>
            <li>空気を読む力が高く、場を盛り上げられる</li>
            <li>気遣い力が高く、人間関係の潤滑油になれる</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>好かれたい気持ちが強すぎて無理をしがち</li>
            <li>些細な態度や言葉に過敏に反応してしまう</li>
            <li>「本当の自分」を見せるのが怖くなる</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「笑顔の裏で心が揺れる、キラキラ繊細スター。」</p>
        </div>


        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    LaCeタイプのあなたは、「人にどう見られてるか」「好かれてるかどうか」を常に気にしていませんか？<br />
    誰かに愛されるために、優しくて明るくて、ちょっと無理してでも“いい子”でいようとするクセ、もう長く続けてきたんじゃないですか？<br /><br />

    でもね、その「いい子モード」って本当にあなたの素ですか？<br />
    本当は、疲れてたり、機嫌悪かったり、愛されない自分にビビってたりしませんか？<br /><br />

    まず知ってほしいのは、<strong>ネガティブな感情も、全部あなたの一部だってこと</strong>。<br />
    「こんな自分見せたら嫌われる」って思い込んで隠してるその感情ほど、実はあなたらしさを形づくってるんです。<br /><br />

    「本音を出しても愛される自分」を、まだ信じきれてないかもしれません。<br />
    でもね、<strong>本音を出さない限り、“ほんまの意味で”愛されることなんて絶対にないんです。</strong><br /><br />

    誰かに愛されたいなら、<strong>まず“自分のことを好きになる努力”が必要</strong>です。<br />
    自分に「今のままでもええよ」って言えるようになったとき、<br />
    あなたが誰かに与えてきた優しさや明るさが、ようやく“自分にも返ってくる”ようになりますよ。
  </p>
</div>


      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
     <p>
  LaCeタイプは、<strong>「愛されたい」が行動原理のど真ん中</strong>にあるタイプです。<br />
  恋愛においても、とにかく「好かれたい」「可愛いと思われたい」という気持ちが先行しやすく、<br />
  相手の理想像に合わせてキャラ変までしてしまうことも。<br /><br />

  でも実際は、<strong>「飾らない自分をまるっと愛してほしい」</strong>という超ピュアな願望を抱えてる。<br />
  愛されたいけど、自分から行くのはプライドが許さへん。<br />
  <strong>好きアピールするのは負けた気がするし、恥ずかしさMAX</strong>。<br />
  だから「察してほしい」「なんで気づかんの？」っていう<strong>面倒くさい乙女ムーブ</strong>発動しがち。<br /><br />

  しかも、<strong>好かれると急に冷めるくせに、放置されたら不機嫌MAX</strong>。<br />
  「構って」「でも追わないで」「でも見て」みたいな、<strong>矛盾の塊</strong>。<br />
  恋愛という舞台では常に<strong>主役でいたい</strong>し、相手にもそれを自然に求めてしまう。<br /><br />

  本人は無意識にやってるけど、<strong>ちょっとでも否定されると脆く崩れる繊細メンタル</strong>の持ち主。<br />
  褒められたら一気にテンション上がるし、ちょっとした一言でどん底に沈む。<br />
  でもその浮き沈みすら、どこか愛らしい。だって、<strong>ほんまに全力で恋してる</strong>から。<br /><br />

  LaCeにとっての恋愛って、<strong>おとぎ話のヒロイン体験</strong>なんよね。<br />
  ドラマチックな展開、甘いセリフ、サプライズ…<br />
  それ全部が愛情表現やと思ってるから、<strong>雑な対応されたら即ゲームオーバー</strong>。<br /><br />

  でも忘れたらあかんのは、「好かれること」ばっかりに必死になってると、<strong>本当の自分が愛されてるのか分からんくなる</strong>ってこと。<br />
  「素の自分でも好きでいてくれるか？」って確認する勇気こそが、<strong>LaCeの恋愛の最終試練</strong>やねん。<br /><br />

  ちゃんと言うとくけど、<strong>あんたは“愛されキャラ”なんやから、無理して作らんでも魅力はあんねん</strong>。<br />
  だから、もっと力抜いて素直に甘えていい。<br />
  自分を主人公にしてくれる人を、ちゃんと見極めてな💖
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        明るさ・気配り・華やかさを活かして、<strong>人前に立つ仕事や人と関わる仕事</strong>に向いている。<br />
        接客、販売、広報など、<strong>「第一印象」が大事な場面で輝ける存在</strong>。<br /><br />
        ただし、<strong>人の評価に敏感すぎる</strong>一面があるので、<br />
        自己肯定感を高めてくれる上司や環境がとても大事。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        LaCeは、「そのままでも愛されていい」と実感できる相手に癒される。<br />
        見た目やテンションに左右されず、<strong>内面の繊細さをちゃんと見てくれる相手</strong>との相性が◎。<br /><br />
        相性がいいタイプは以下の通り：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>TfCe（お世話焼き妖精）</strong>：LaCeの頑張りをやさしく受け止めてくれる</li>
          <li><strong>ClIn（分析シンパサイザー）</strong>：感情を理論で整えてくれる安心系</li>
          <li><strong>HuRo（哲学ヒューマン）</strong>：深くて誠実な対話で本音を引き出してくれる</li>
        </ul>
        「気を遣わなくても好かれる安心感」が、LaCeの心の土台になる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        LaCeは、最初は明るく距離を詰めていけるけど、<strong>内面まではすぐに見せない慎重派</strong>。<br />
        「テンション高くても、心の中ではめちゃくちゃ不安」なことも多い。<br /><br />
        🔽 LaCeが親密になるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>表面的なノリに乗らず、内面をちゃんと見てくれる</li>
          <li>「いい子」じゃなくても受け入れてくれる</li>
          <li>気分の波に左右されず、一定の距離感で接してくれる</li>
          <li>不安なとき「気にしなくていいよ」と言ってくれる</li>
          <li>テンションが低くても変わらず優しく接してくれる</li>
        </ol>
        “かわいいね”より“そのままでええやん”のひとことが、LaCeの心をほどくカギになる。
      </p>
    </div>

    <div>
     <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  LaCeが一番しんどくなるのは、<strong>自分の不安や繊細さを「めんどくさい」と切り捨てられること</strong>。<br />
  普段は明るくてノリがいいけど、実は<strong>小さな言葉や態度の変化にものすごく敏感</strong>。<br />
  「え、なんで急に冷たくなったん？」<br />
  「なんか怒ってる？」<br />
  ……そんなふうに、相手の反応ひとつで<strong>心のバランスが崩れていく</strong>のがLaCeの恋愛の特徴です。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>急に冷たくなる、そっけない</li>
    <li>「気にしすぎ」と不安を否定する</li>
    <li>他の人と比較する、比べられる</li>
    <li>見た目やテンションで軽く扱う</li>
  </ul>

  LaCeは<strong>「笑ってる＝元気」じゃない</strong>です。<br />
  むしろ、しんどい時ほど「明るくいなきゃ」って演じてしまうタイプ。<br />
  だからこそ、相手がそれに甘えて無神経な言動を重ねると、<strong>“価値がないならいらない”とばかりに心が暴走する</strong>ことも。<br /><br />

  その背景には、<strong>「愛されていない＝価値がない」という極端な思考パターン</strong>があることが多いです。<br />
  他人のリアクションでしか自分の存在価値を測れなくなってしまうと、<strong>相手の一挙手一投足に振り回されて、どんどん自己否定が加速</strong>します。<br /><br />

  だからLaCeに必要なのは、<strong>「愛されてなくても、自分には価値がある」って考えをちゃんと自分の中にインストールすること</strong>。<br />
  好かれたい、必要とされたいって思うのは当たり前。けど、<strong>それがないと不安で潰れるなら、それは依存</strong>です。<br /><br />

  誰かのリアクションで自分の価値を決めない。<br />
  「ちゃんと不安に気づいてくれる人じゃないと付き合う意味ない」くらいに、<strong>愛されることに自信を持ってOK</strong>です。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        LaCeは、<strong>気を遣いすぎて突然人との関係を断つこと</strong>があるタイプ。<br />
        特に、ストレートな物言いやズカズカ入ってくる相手（<strong>St, Ro系</strong>）に傷つきやすい。<br />
        「無理に笑わなくていい関係性」を意識して選ぶことが、LaCeの心を守るカギになる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        明るさ・愛嬌・気遣いのスキルを活かせる、<strong>人前に立つ仕事や人と関わる仕事</strong>で輝くタイプ。<br /><br />
        💼 向いてる職種の例：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>タレント・インフルエンサー・司会・モデル</li>
          <li>販売・接客・イベントスタッフ・広報</li>
          <li>保育士・子ども支援・メンタルケア</li>
        </ul>
        「かわいいだけじゃなく、“人の心を見てる”」——<br />
        そんなギャップこそが、LaCeの最大の武器。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
