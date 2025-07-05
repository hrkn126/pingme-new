'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function StInPage() {
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
          src="/D557D541-ED0E-47B8-848B-3D6AFE91D89C.png"
          alt="StInキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>


      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">StIn 感情不器用さん</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          気持ちはある。でも、うまく言えへん。
        </p>
      </div>

      
      {/* 解説 */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：St（ストレート） × 裏：In（インサイトフィール）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「ほんまは誰かに分かってほしい。でも、うまく言えへん…」<br />
  気持ちを素直に出したいのに、場の空気を読みすぎて言葉に詰まってしまう。<br />
  激情型に見えて、実はとても繊細な“感情不器用タイプ”です。<br /><br />

  本人の中には確かな感情や思いがあります。<br />
  でも、<strong>「この言い方で合ってるんかな」「重くとられたらどうしよう」</strong>と考えすぎて、<br />
  結局、言葉を飲み込んでしまうことが多いです。<br />
  そうして何も言えなかったあとに、「何も伝わってへんやん…」と一人で落ち込む。<br /><br />

  また、<strong>感情が高ぶると一気にぶつけてしまう</strong>こともあり、あとで「言いすぎたかも」と反省の嵐。<br />
  それゆえに、StInは<strong>感情があってもなくても誤解される才能No.1</strong>と言っても過言ではありません。<br /><br />

  一見すると<strong>無愛想・不機嫌・マイペース・自己中</strong>に見えることが多く、<br />
  「なんか冷たくない？」「怒ってる？」と周囲に気を遣わせてしまうことも。<br />
  でも実際は、<strong>相手の反応をめちゃくちゃ気にして、言葉を選びすぎて黙ってる</strong>だけなんです。<br /><br />

  そして皮肉にも、<strong>“気を遣いすぎてること”が伝わらない</strong>のが、このタイプの難しさ。<br />
  伝えたい思いはあるのに、それを届ける技術やタイミングが足りなくて、<br />
  「この人って自分勝手やな」「感情的で怖い」と距離を置かれてしまう。<br /><br />

  ただ、それでもStInは<strong>人とのつながりをあきらめたくない</strong>タイプです。<br />
  表現が下手でも、伝えるのが苦手でも、<strong>本当はずっと“わかってほしい”って思ってる</strong>。<br />
  だからこそ、<strong>気持ちがうまく伝わった瞬間には涙が出るほど嬉しい</strong>し、<br />
  心を開いた相手にはとことん一途で、不器用な優しさを全力で注ごうとします。<br /><br />

  感情があるのに、届け方がわからない。<br />
  でもそれでも、誰かに届いてほしいと願ってる。<br />
  そんなStInの不器用な真剣さが、深く深く人の心を打つのです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            本音・誠実・感情の共有・理解し合うこと。<br />
            「ちゃんと気持ちを伝えることが誠意やろ」って信じてるけど、<br />
            うまくいかへん自分に自己嫌悪することも。<br />
            感情で動くタイプやのに、感情の扱い方が不器用。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            気持ちが揺れるたびに「これってどう思われたやろ…」って内省しがち。<br />
            言いたいことはあるけど、タイミングがわからん。<br />
            衝動的な言動のあとで「空気読めへんかったかな」と一人で反省してるタイプ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            感情が高ぶるとすぐに顔や言葉に出る。<br />
            けどあとで「言いすぎたかも…」って落ち込む。<br />
            <strong>直球勝負の熱さと、繊細な気遣い</strong>が同居していて、誤解されやすい存在。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>情熱的でまっすぐな気持ち</li>
            <li>一度決めたらやりきる粘り強さ</li>
            <li>自分の失敗や後悔をバネにして成長できる</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情に流されやすく、空回りしやすい</li>
            <li>人間関係で後悔しやすく、引きずるタイプ</li>
            <li>本音をうまく伝えられず、誤解を生みやすい</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「素直すぎるほど不器用な、感情エネルギーの塊」</p>
        </div>

        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    StInタイプのあなたは、内側に強く深い感情を抱えているにもかかわらず、<strong>それをどう伝えていいのか分からず、つい黙ってしまう</strong>——そんな経験を多くしてこられたのではないでしょうか。<br /><br />

    本当はたくさん想っているのに、それがうまく言葉にならない。<br />
    だから誤解されて、<strong>「冷たい人」や「何考えてるかわからない」と見られてしまう</strong>ことも、あったかもしれませんね。<br /><br />

    ですが、心の中でいくら感情を叫んでいても、<strong>相手には伝わりません。</strong><br />
    「察してくれ」「わかってくれて当然」は、残念ながら甘えでしかないのです。<br /><br />

    自分の感情を“そのまま”感じてあげる勇気、そして<br />
    それを“言葉にして渡す”努力を、少しずつでも始めてみてください。<br /><br />

    大事なのは完璧な伝え方ではなく、<strong>「気持ちを伝えたい」という姿勢</strong>です。<br />
    言葉にすることで、あなたの中の思いは少しずつ整理されていき、相手との距離も縮まっていきます。<br /><br />

    そしてどうか、「感情がある＝不安定」ではなく、<strong>「感情がある＝人間らしい素敵なこと」</strong>だと認識してください。<br />
    不器用でも、伝えようとするその姿勢は、きっと誰かの心を動かします。
  </p>
</div>


        
      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  StInタイプは、恋愛において<strong>「想いはあるのに、どう伝えればいいかわからない」</strong>という葛藤を抱えがちです。<br />
  感情そのものはとても豊かで、「好き」という気持ちも本気で強い。けれど、いざ相手を前にすると、言葉がうまく出てこず、不自然に無口になったり、そっけない態度を取ってしまうことがよくあります。<br />
  相手からすれば「脈ナシなんかな？」と思われてしまいがちですが、実際は<strong>好意が強すぎてうまく表現できない</strong>だけだったりします。<br />
  しかも、<strong>心の中では常に自己分析＆反省会</strong>をしていて、「今の態度、冷たすぎたかも」「あんな言い方して嫌われたんちゃうかな…」と、あとからひとりで落ち込むタイプ。<br />
  それでも自分から素直に謝ったり、気持ちを伝えにいくのはめちゃくちゃハードルが高くて、<strong>“好き避け”状態を抜け出すまでにかなり時間がかかります</strong>。<br />
  ただし、一度心を開いた相手には、誠実で情熱的に愛情を注ぎます。<br />
  自分の中にある不器用さや臆病さと向き合いながらも、<strong>「この人にはちゃんと向き合いたい」</strong>という気持ちで、少しずつでも歩み寄ろうとします。<br />
  だからこそ、<strong>焦らず待ってくれて、言葉より気持ちを汲み取ってくれる人</strong>との相性は抜群です。<br />
  感情表現のスキルは高くないかもしれません。<br />
  でもそのぶん、<strong>伝わったときの重みと誠実さは本物</strong>。<br />
  “不器用やけど本気”。それがStInの恋愛スタイル。<br />
  分かってくれる人に出会えたとき、その愛はとても強く、長く、温かいものになります。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        <strong>自分の「これや！」と思える分野では爆発的な集中力と熱量</strong>を出せます。<br />
        感情が揺れる仕事、誰かの思いを受け取る仕事にやりがいを感じやすく、<br />
        <strong>共感と行動のバランスが取れる職場</strong>では本領を発揮。<br />
        ただし、自分の気持ちを出せず我慢してばかりだと、突然限界が来て爆発することも。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        StInは、<strong>「感情を丁寧に見てくれるタイプ」</strong>と相性がいいです。<br />
        言葉にできない気持ちを汲み取ってくれたり、待ってくれる相手に安心できます。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuIn（共感マスター）</strong>：うまく言えない想いをやさしく翻訳してくれる</li>
          <li><strong>TfCe（お世話焼き妖精）</strong>：ド直球の感情を否定せず、支えてくれる</li>
          <li><strong>LaCe（愛されスター）</strong>：感情の起伏に明るさで寄り添ってくれる</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        StInは、<strong>最初は不器用で誤解されやすいけど、心を開けばめちゃくちゃ一途</strong>です。<br />
        気持ちが言葉に乗らないからこそ、「伝えようとしてくれる姿勢」を大事にします。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>否定せずに「わかろうとしてくれる」姿勢を見せてくれる</li>
          <li>言葉にならないときも、そばにいてくれる</li>
          <li>一度のすれ違いで見捨てない</li>
          <li>「あなたのままでいい」と安心させてくれる</li>
          <li>少しずつでいい、と待ってくれる</li>
        </ol>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  StInが深く傷つくのは、<strong>「感情を否定される」「急かされる」</strong>ような関係性。<br />
  感情を処理するのに時間がかかるし、うまく言葉にできないだけで、気持ちがないわけじゃない。<br />
  でもそこを「ハッキリしてよ」「めんどくさい」って雑に扱われたら、もう無理。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>「ハッキリ言わんのが悪い」と一方的に責められる</li>
    <li>想いをスルーされてしまう</li>
    <li>すぐに距離を詰められてパニックになる</li>
    <li>「めんどくさい」と言われる</li>
  </ul>

  StInは、<strong>頭では気持ちがあるのに、口からは出てこない</strong>。  
  だから、相手からの「どう思ってるの？」がプレッシャーになって、<strong>答えられない → 気まずくなる → 自己嫌悪</strong>のループにハマりやすい。<br /><br />

  実は内心ではちゃんと考えてるし、めちゃくちゃ大事にしてる。<strong>でもその「大事」が伝えられない</strong>。<br />
  だからこそ、相手に「なんで何も言ってくれないの？」と責められた瞬間に、心がスン……って引いてしまう。<br /><br />

  気持ちがあるのに、表現できないことがつらいし、<strong>素直になれない自分を責めるクセが強すぎる</strong>のがStInの沼ポイントです。<br />
  自分を言葉で守れないぶん、恋愛の場面ではめちゃくちゃ消耗する。<br /><br />

  だから必要なのは、<strong>“言葉に詰まる自分を責める前に、まず出してみる”</strong>こと。<br />
  上手く言えなくても、カッコつかなくても、「好き」とか「ごめん」とか、<strong>一言出せたら大勝利</strong>なんです。<br /><br />

  あとで落ち込むのはええ。けど、<strong>黙ったまま落ち込むのは何も進まない</strong>。<br />
  StInは、“自分の感情に責任を持てる強さ”を一歩ずつ身につけていくことが、恋愛の安定につながります。<br /><br />

  まずは、「伝える」ことを小さく始めてみてください。<strong>言わないと伝わらないし、言えたらちゃんと変わる</strong>から。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        感受性の強いタイプ（Ce, In）とは深く共鳴する一方で、<strong>感情のすれ違いで共倒れしやすい</strong>です。<br />
        論理タイプ（Ro, Cl）とは価値観がズレやすく、<strong>「めんどくさいやつ扱い」される</strong>ことも。<br />
        感情が高ぶったときこそ、<strong>一歩引いて自分の気持ちを整理する習慣</strong>がカギ。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        <strong>不器用でも情熱があれば届く</strong>——そんな職場でStInは輝きます。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>表現系（俳優・声優・漫画家・作家）</li>
          <li>教育・福祉・保育・介護など、感情が活かせる仕事</li>
          <li>熱量を必要とする現場指導職やリーダー職</li>
          <li>SNS発信やライブ配信など、直感で動ける発信系</li>
        </ul>
        「うまく言えないけど、ちゃんと伝えたい」——その一途さが、職場でも人を惹きつけます。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
