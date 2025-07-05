'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function HuShPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#fcfcfb] via-[#b7dc80] to-[#78af03] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
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
          src="/E61CA9C3-96AD-485E-ABCC-8269D19CD6B1.png"
          alt="HuShキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">HuSh 闇抱える癒し人</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          自分を削ってでも、誰かの痛みに寄り添いたい。
        </p>
      </div>

      

      {/* 解説エリア */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Hu（ヒューマニスト） × 裏：Sh（シャドウクリティック）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
<p>
  「誰かの痛みに気づいてあげたい。でも、自分の痛みはどうしたらいいんやろ…？」——  
  HuShは、人の心の揺れや小さなSOSにとても敏感です。<br />
  たとえば、少し元気のない挨拶、いつもより短い返信、目線の揺れ……  
  そんな「誰にも気づかれない違和感」を自然にキャッチして、<strong>「この人、しんどいのかも」と直感的に寄り添える</strong>タイプです。<br /><br />

  周囲からは「癒し系」「やさしい人」と言われやすいですが、  
  実はその優しさの裏側では、<strong>深い孤独や不安を静かに抱えています</strong>。<br />
  「これくらいで弱音を吐いたらダメだよね」「私よりしんどい人は他にもいるし……」  
  そんなふうに自分を納得させながら、<strong>無意識のうちに“自分のしんどさ”を後回し</strong>にしてしまう傾向があります。<br /><br />

  表向きは穏やかで、人のために動くことができる。  
  けれど実際には、<strong>誰にも見せられない感情の蓄積</strong>が、内側で静かに爆発寸前まで膨らんでいる——  
  そんな“感情の爆弾”を、胸の奥に隠し持っているようなところがあるのです。<br /><br />

  自分でも気づかないうちに我慢が限界を超えて、  
  突然涙が出たり、何でもない一言で心が崩れたり……  
  「癒し系」だからこそ周囲に心配されにくく、<strong>しんどさに気づいてもらえないことが一番つらい</strong>のかもしれません。<br /><br />

  HuShのやさしさは、ただの“お人好し”ではなく、  
  <strong>人の心の痛みに触れすぎてしまうほどの感受性</strong>と、  
  それでも笑顔でいようとする<strong>静かな強さ</strong>から生まれています。<br /><br />

  だからこそ、このタイプにとって一番大切なのは、  
  <strong>「大丈夫？」ではなく、「しんどいときは、甘えてもいいんだよ」って言ってくれる存在</strong>。  
  他人を癒す力を持っている分、<strong>自分が癒されることを、自分自身がちゃんと許してあげること</strong>が大切なんです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            思いやり・共感・誠実・献身。<br />
            「誰かの役に立てたら、自分の存在価値がある」<br />
            でもその裏には、「ほんまに愛されてるんかな」という不安をずっと隠してる。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            他人の感情には敏感なのに、自分の感情には鈍感。<br />
            「私が我慢すればいい」「嫌われたくない」って思考が先に働いて、<br />
            <strong>本音や本当の願いに自分で気づけないことも多い。</strong>
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            人にはめちゃくちゃ優しい。<br />
            でも自分には厳しすぎて、家に帰って一人で泣いたり、<br />
            しんどさに気づかないまま限界まで頑張ってしまうことも…。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>他者理解力と共感力が非常に高い</li>
            <li>安心感を与える癒し系</li>
            <li>裏表がない“素のやさしさ”を持つ</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>自己犠牲しすぎて潰れやすい</li>
            <li>本音を言えず、ストレスが蓄積しやすい</li>
            <li>ネガティブなループに入りやすく、抜け出しにくい</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「他人には優しく、自分には厳しすぎる癒し人。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    HuShタイプのあなたは、表面的には穏やかで優しくて、誰にでも寄り添える“癒し系”に見られがちです。<br />
    でも本当は、自分の内側にずっと誰にも見せられない「痛み」や「寂しさ」を抱えてきたんじゃないですか？<br /><br />

    いつも人に優しくしてるのは、<strong>誰よりも「優しさに飢えている」ことを、自分がよく知ってるから</strong>なんですよね。<br />
    でも、そのやさしさを<strong>全部“他人のため”に使い切って、自分には一滴も注げてない</strong>状態、ほんまにしんどくないですか？<br /><br />

    「迷惑をかけたくない」「弱い自分を見せたくない」って、ずっと我慢してきたんですよね。<br />
    でもそろそろ、<strong>“自分も癒される側になっていい”って認めてあげませんか？</strong><br /><br />

    甘えることは、依存でも迷惑でもなく<strong>“信頼の証”</strong>です。<br />
    あなたが弱さを見せても、ちゃんと受け止めてくれる人はいます。<br />
    その人を信じて、そろそろ“強がりな癒し系”の仮面を、少しだけ外してもいいんですよ。<br /><br />

    本当に優しい人って、<strong>人に頼ることも、自分を休ませることもできる人</strong>です。<br />
    そのやさしさ、もう少しだけ“自分自身”にも向けてあげてくださいね。
  </p>
</div>


      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
     <p>
  HuShタイプは、<strong>「愛される」より「支えたい」が先にくる</strong>ような恋愛をしがちです。<br />
  恋人がしんどそうにしてたら、自分のことなんてすっ飛ばしてでも助けにいく。<br />
  でもその裏には、「嫌われたくない」「見捨てられたくない」っていう、<strong>強い不安と自己否定の感情</strong>が潜んでるんよな。<br /><br />

  本当は、<strong>誰よりも心が繊細でナイーブ</strong>やのに、<br />
  「迷惑にならんように」「気を使わせんように」って、<strong>自分の本音をずっと我慢してしまう</strong>。<br />
  「大丈夫」って言葉の裏に、<strong>ぜんぜん大丈夫じゃない涙を隠してる</strong>ことも多い。<br /><br />

  しかも、<strong>なぜか闇を抱えた人に惹かれがち</strong>。<br />
  自分の中にも暗い部分があるからこそ、「この人の闇を理解できるのは私だけ」って思ってまう。<br />
  結果、<strong>依存・献身・疲弊・自己嫌悪のフルコンボ</strong>に突入することもしばしば…。<br /><br />

  相手の微妙な表情・声色・LINEのテンションの変化にもすぐ気づくし、<strong>言葉にされる前に察して動いてまう</strong>。<br />
  でもそれって本当は、<strong>“愛されたいけど、それを要求するのが怖い”</strong>という心の裏返しなんよね。<br />
  「求めたら重いと思われるかも」って怖くて、<strong>求める前に与えてしまう</strong>。<br /><br />

  けどな、<strong>愛は一方通行やと枯れる</strong>んよ。<br />
  HuShが愛を注ぎ続けるには、自分もちゃんと注がれないとしんどい。<br />
  ほんで大体、「こんなに尽くしてるのに…」って静かに心が擦り切れて、<strong>気づいたときには感情が無くなってる</strong>ことも。<br /><br />

  だからHuShが恋愛でほんまに大事にせなあかんのは、<strong>「弱さを見せてもええ」って思える相手を選ぶこと</strong>やねん。<br />
  強く見せようとせんでええ、<strong>泣いても崩れても受け止めてくれる人</strong>と出会えたとき、<br />
  HuShのやさしさは<strong>愛じゃなくて共依存やったんやな…ってやっと気づける</strong>。<br /><br />

  自分の感情も大事にしていい。<br />
  「わかってほしい」って願っていい。<br />
  <strong>「癒す側」じゃなくて「癒される側」になってもいい</strong>。<br />
  それができたとき、HuShの恋愛は初めて“報われる愛”になるんやと思う。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        HuShは、<strong>対人支援やサポート系の仕事</strong>に向いている癒しのスペシャリスト。<br />
        傾聴力・共感力・気配り力に長けていて、<strong>「この人がいてくれて良かった」</strong>と思われる存在になることが多い。<br /><br />
        ただし、<strong>人の感情を受けすぎて疲れやすい</strong>面もあるため、<br />
        「助ける側」だけじゃなく「支えてもらう側」になる時間も大事にしてほしい。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        HuShが安心できるのは、<strong>自分の弱さややさしさを否定しない人</strong>。<br />
        「甘えていいんやで」「そのままで大丈夫やで」って受け止めてくれる相手といると、心がふっと軽くなる。<br /><br />
        相性がいいタイプは以下の通り：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>TfCe（お世話焼き妖精）</strong>：さりげない気配りが心地よい同じ癒し系</li>
          <li><strong>ViCe（理想共感派）</strong>：HuShの繊細さを言語化してくれる感性派</li>
          <li><strong>ClCe（冷静エンパス）</strong>：落ち着いた共感で包み込んでくれる安定型</li>
        </ul>
        「分かってくれる＋責めない」関係が、HuShの心を解きほぐしてくれる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        HuShは、<strong>“安心感”がなければ本音を出せない</strong>タイプ。<br />
        「この人の前なら弱くなっても大丈夫」って思えたとき、やっと心の扉が開いていく。<br /><br />
        🔽 HuShが親密になるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>どんな気持ちも否定せず受け止めてくれる</li>
          <li>気づいてくれるけど、詰めてこない</li>
          <li>ちょっとした優しさを自然に返してくれる</li>
          <li>「無理してない？」ってそっと聞いてくれる</li>
          <li>甘えたときにちゃんと感謝してくれる</li>
        </ol>
        “無理しなくていい場所”を感じられると、HuShはゆっくりと心を預けていく。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  HuShがもっともしんどくなるのは、<strong>「心を察してくれない」「弱さを面倒くさがる」</strong>相手と一緒にいること。<br />
  感情を表に出すのが得意ではないぶん、<strong>小さなサインや沈黙の裏にある感情に気づいてもらえないと、心の中で絶望的に孤独を感じてしまいます</strong>。<br />
  しかも「弱さを見せる＝迷惑になる」と思い込んでいるので、<strong>一度でも“めんどくさい”という態度を取られると、完全に心を閉ざしてしまう</strong>傾向もあります。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>距離感を無視してグイグイ踏み込んでくる</li>
    <li>「重い」「めんどくさい」と感情を否定する</li>
    <li>我慢してることに気づこうとしない</li>
    <li>鈍感で共感しようとする姿勢がない</li>
  </ul>

  HuShは、普段は<strong>“察する側”</strong>でいたい人です。<br />
  でもそれは、<strong>「自分のしんどさは後回しでいい」と思い込んでいるからこそ成立しているバランス</strong>でもあります。<br />
  好きな人の痛みにはいち早く反応できるのに、<strong>自分の限界には極端に鈍感</strong>。<br />
  そしてそのまま、無理を重ねて気づいたときには<strong>心がバグったように動かなくなる</strong>──この流れ、HuShにとっては決して珍しくありません。<br /><br />

  だからこそ必要なのは、<strong>「心の体力ゲージ」を自分でちゃんと可視化してあげること</strong>。<br />
  我慢できる＝大丈夫、ではありません。<br />
  「最近、好きな相手のことばかり考えて、自分のことが空っぽになっていないか」<br />
  「優しさでつないでるけど、それが義務になっていないか」<br />
  そういう問いかけを定期的にするだけで、HuShの恋愛は<strong>壊れる前に守ることができる</strong>ようになります。<br /><br />
  人の痛みに敏感なのは才能ですが、<strong>その才能が自分を削りすぎないように</strong>、バランスを取る練習が何より大事です。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        HuShは、<strong>優しすぎるあまり「人の荷物」を抱え込みやすい</strong>タイプ。<br />
        しんどい人・依存的な人が集まりやすいのもそのやさしさゆえ。<br /><br />
        また、強めなタイプ（<strong>Cl, Ro, Vi, St</strong>）といると自分を押し殺して疲れがち。<br />
        「誰にでも優しくしなきゃ」じゃなくて、<strong>「自分を大事にしてくれる人を大事にする」</strong>っていう意識が大切。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        HuShは、<strong>“心を支えるプロフェッショナル”</strong>として輝けるタイプ。<br />
        傾聴力・共感力・癒し力を活かせる場面で、唯一無二の存在感を放つ。<br /><br />
        💼 向いてる職種の例：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>看護・介護・保育・心理カウンセラー</li>
          <li>福祉・支援職・スクールカウンセラー</li>
          <li>リスニング系カスタマーサポート・接客</li>
        </ul>
        “言葉にならない気持ち”をキャッチして寄り添えるHuShは、<strong>まさに“心の保健室”</strong>やで。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
