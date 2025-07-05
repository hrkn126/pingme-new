'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function HuInPage() {
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
          src="/FD9104D5-1A63-46F9-A5F7-7F58A07471D1.png"
          alt="HuInキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">HuIn 共感マスター</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          相手の“見えない感情”を受信する、空気読みのプロフェッショナル。
        </p>
      </div>



      {/* 解説エリア */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Hu（ヒューマニスト） × 裏：In（インサイトフィール）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
<p>
  「人を理解したい。けど、空気を読みすぎてしんどくなる…」——  
  HuInは、生まれつき<strong>“感情のセンサー”が非常に鋭く</strong>、相手の表情や声色、沈黙の空気さえも感じ取ってしまう。<br />
  「この人、ほんとは無理してないかな」「なんか、場の空気ピリついてる…」<br />
  ——そんな“言葉にされていない気配”を、言葉より先に受信してしまう。<br /><br />

  だからこそ、誰かの感情に寄り添う力は群を抜いているし、<br />
  相手の気持ちを想像して、<strong>自分にできることを自然にやってあげられる</strong>。<br />
  でもその一方で、自分の本音はいつも置き去りになりがち。<br /><br />

  「本当はこう思ってたのに」「ほんとは疲れてたのに」——<br />
  自分の感情を見つめる前に、まず他人の感情を優先してしまう。<br />
  <strong>“空気を壊さない自分”を選ぶクセ</strong>がついているから、<br />
  気づけば「いい人」で終わってしまうことも多い。<br /><br />

  HuInの共感力はたしかに素晴らしい。でもそれは、<strong>「他人の痛み」には気づけるのに、「自分の痛み」には鈍感な共感</strong>。<br />
  他人ばかり見て、自分を見れていない——そんなアンバランスさを、心の奥でずっと抱えている。<br /><br />

  本当は、「誰かに気づいてもらいたい」「“大丈夫？”って言ってもらいたい」。<br />
  でも、そう願うことすら「わがまま」だと思ってしまうから、<strong>自分のSOSをずっと後回しにしてしまう</strong>。<br /><br />

  HuInのやさしさは、ただのお人好しではなく、<br />
  感情の機微にチューニングされた<strong>“繊細な知性”</strong>の表れ。<br />
  でもその知性は、自分の心にはピントが合いづらく、<br />
  結果として<strong>「他人には敏感、でも自分には鈍感」な矛盾</strong>を生んでしまう。<br /><br />

  誰かの笑顔の裏にある小さなサインに気づけるあなたが、<br />
  いつか「自分自身のサイン」にも気づいてあげられるように——。<br />
  HuInの本質は、<strong>“他人への共感”と“自分への無関心”のあいだで揺れる、繊細なアンバランスさ</strong>にあります。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            “理解されること”よりも“理解してあげること”に重きを置く。<br />
            相手の立場や気持ちを想像しながら、自然に寄り添う姿勢が根付いている。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            「あの人、無理して笑ってないかな？」「この空気、なんか重い…」<br />
            そんな風に、言葉にされていない感情や雰囲気を敏感に察知するタイプ。<br />
            常に“感情のレーダー”が働いていて、気疲れしやすい。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            相談に乗ることが多く、自然と周りの心のケアをしている。<br />
            ただし、自分の話をするのは少し苦手で、本音を出さないままフェードアウトすることも。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>空気を読んだ共感対応が得意</li>
            <li>言葉にされない気持ちにも寄り添える</li>
            <li>人間関係の潤滑油として信頼される</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情を受け取りすぎて自己犠牲的になりがち</li>
            <li>空気を壊したくなくて言いたいことを我慢する</li>
            <li>“ひとり反省会”でメンタルを削りやすい</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「相手の心の波長に“自動でチューニング”してしまう、感情のアンテナ王。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    Hu×Inタイプのあなたは、他人の感情にとにかく敏感で、<strong>“受信機”みたいに空気や気配を読みすぎてしまう</strong>傾向がありますね。<br />
    「相手が今、どんな気持ちでいるか」を無意識に察知して、気づいたら自分の感情そっちのけになっていませんか？<br /><br />

    正直に言いますね。<br />
    <strong>他人の感情を100%受信してたら、そりゃあ疲れて当然です。</strong><br />
    しかもそれが、“わかってあげたい”っていう優しさから来てるから、なおさらややこしいんですよ。<br /><br />

    でもね、あなたが感じ取っている“相手の気持ち”って、あくまで「あなたの解釈」に過ぎないこともあるんです。<br />
    「傷つけたくないから」「気を悪くさせたらどうしよう」って、<strong>自分の気持ちを押し込めてまで他人を守ろうとするのは、優しさじゃなくて自己犠牲</strong>です。<br /><br />

    感情をシャットダウンする必要はありません。<br />
    ただ、<strong>「自分の感情」と「他人の感情」にちゃんと線引きをしてあげること</strong>は、あなたの心を守るうえでとても大切です。<br /><br />

    ときには空気を壊してもいいんです。<br />
    波風立てるのが怖くて本音を飲み込むより、<strong>「自分はこう思ってる」と伝える勇気</strong>のほうが、関係をちゃんと築いてくれますよ。<br /><br />

    共感力はあなたの最大の才能です。<br />
    でもそれを活かすには、<strong>まず「自分の気持ちを大切にできること」</strong>が土台になります。<br />
    あなたがあなたのままで、ちゃんと呼吸できる人間関係を作っていってくださいね。
  </p>
</div>


      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  HuInタイプは、<strong>「相手の気持ちを察する力」に長けた共感のプロフェッショナル</strong>です。<br />
  恋愛においても、とにかく“空気”と“相手の表情・トーン・間”を読み取りまくって、<strong>地雷を踏まないように細心の注意を払う</strong>タイプ。<br />
  「これ今言って大丈夫かな？」「疲れてそうやし、今日はそっとしとこか」——そんな風に、<strong>自分の言動を常に調整しながら動く</strong>から、相手にとってはめっちゃ優しい存在になります。<br /><br />

  ただしその優しさ、<strong>時に“自分をすり減らす行為”</strong>にもなります。<br />
  好きな人の好みに合わせて自分の性格まで変えようとしたり、「こういう私の方が相手は安心するかな」って演じてしまったり。<br />
  <strong>恋愛に全力で適応しすぎて、自分が誰だったか分からんようになる</strong>瞬間があるんです。<br /><br />

  でもそれは、「好きな人を大事にしたい」「安心してもらいたい」っていう、<strong>愛情の深さゆえ</strong>。<br />
  HuInタイプの優しさって、押しつけじゃなくて、“本当にその人のためを思って”動いてるから、本物なんです。<br />
  ただ、<strong>ちゃんと受け取ってくれる相手じゃないと</strong>、その優しさは報われません。<br />
  「気づかれない」「当たり前にされる」「こっちの想いを軽く扱われる」——この三拍子が揃うと、<strong>いきなり心が冷えきって、無言で距離を取る</strong>こともあります。<br /><br />

  しかもややこしいのは、<strong>好きな人ほど距離を取ってしまう不器用さ</strong>も持ってること。<br />
  「私なんかが近づいたら迷惑かも」とか、「あの人のテンション下がってたし、今は邪魔しない方がいいかも」って、<strong>勝手に自己完結して引いてしまう</strong>。<br />
  でもそれは愛がないんじゃなくて、<strong>愛が深すぎて遠慮が暴走してるだけ</strong>なんです。<br /><br />

  そして、もっとややこしいのは、<strong>自分が「誰かに合わせて生きてる」ってふと気づいた瞬間</strong>の虚しさ。<br />
  「私、この人と一緒にいる時、本当の自分出せてるんかな…？」ってなると、<strong>全部がしんどくなって、リセットしたくなる衝動</strong>に襲われることもあります。<br /><br />

  結論。HuInタイプは、<strong>“気づいてくれる人”と“安心して甘えられる空気”がそろってないと恋愛が続かない</strong>。<br />
  自分が変わる必要はない。<strong>ちゃんと本音を出しても受け止めてくれる相手こそが、本当に必要な人</strong>なんです。<br />
  その深すぎる優しさを、わかってくれる人と出会えるまで、<strong>自分を犠牲にしないで</strong>。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        周囲の感情や空気の変化を敏感に察知し、場をなごませたり、トラブルを未然に防ぐのが得意。<br />
        特にチームや組織内で「潤滑油」としての存在感を発揮する。<br />
        ただし、自分の意見や不満を飲み込みやすく、「なんでも引き受けてしまう」ことが負担になることも。<br />
        自分を守れる環境・信頼できる上司がいると、一気に能力が開花する。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        HuInが心地よさを感じやすいのは、「感情の波を穏やかに保てる関係性」。<br />
        話をじっくり聞いてくれて、無理に踏み込まずに寄り添ってくれる人が理想的。<br />
        相性がいいタイプは以下の通り：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>ClCe（冷静エンパス）</strong>：感情と論理のバランスが心を安定させてくれる。</li>
          <li><strong>TfCe（お世話焼き妖精）</strong>：やさしく見守ってくれる包容力がありがたい存在。</li>
          <li><strong>ViCe（理想共感派）</strong>：感情と未来を共有できる、信頼できる心の相棒。</li>
        </ul>
        「共感してくれる＋尊重してくれる」関係が、HuInの本音を引き出すカギになる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        HuInは心を開くまで時間がかかるが、そのぶん一度信頼した人には深く関わろうとする。<br />
        「気まずくならないか」「重く思われないか」などの不安が強く、本音を出すには“安心”が必要。<br /><br />
        🔽 HuInが親密になるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>ちょっとした気遣いに気づいてくれる</li>
          <li>急に踏み込まず、ペースを尊重してくれる</li>
          <li>感情を整理できる時間や余白をくれる</li>
          <li>優しい言葉をかけてくれる</li>
          <li>否定せず、ただ「聴いてくれる」存在である</li>
        </ol>
        “聞き上手なHuIn”にこそ、「受け止めてもらえる安心感」が必要。
      </p>
    </div>

    <div>
  <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
  <p>
    HuInが最も苦しくなるのは、<strong>「強引な感情の押しつけ」や「空気を読まないコミュニケーション」</strong>。<br />
    相手のテンションやリズムに巻き込まれて、<strong>自分のペースが壊されると一気に心のシャッターが降りる</strong>タイプです。<br />
    普段から相手の気持ちに敏感で、場の空気を読みすぎてしまう分、<strong>無神経な言動や圧の強さに異常なほど傷つく</strong>傾向があります。<br /><br />

    ❌ <strong>NG例：</strong>
    <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
      <li>感情的に詰め寄られる</li>
      <li>感情を受け取る“余白”を作ってくれない</li>
      <li>言葉でなく態度で察してほしいと求められる</li>
      <li>繊細さを“面倒くさい”と片づけられる</li>
    </ul>

    HuInは<strong>「言葉にされない感情」に一番反応するタイプ</strong>やからこそ、<br />
    逆に、相手がその場の空気や配慮を無視して感情をぶつけてくると、<strong>“自分が壊れる”って危機感で距離を取る</strong>ことが多いんよね。<br /><br />

    しかもこのタイプ、<strong>“察する”のがデフォルトすぎて</strong>、<br />
    相手の情緒や不安まで背負い込んでしまい、<strong>気づけばメンタル共倒れ</strong>になってることもめっちゃ多い。<br />
    本人は「頼られること＝愛されてること」と思いがちやけど、それ<strong>境界線なさすぎて溺れてる</strong>だけやで。<br /><br />

    だからこそHuInが病まないためには、<strong>“距離感”という概念を心にインストールすること</strong>が必須。<br />
    「優しくするけど、全部背負わない」「寄り添っても、自分の中には入れない」——<br />
    この<strong>“共感しすぎない勇気”</strong>を身につけたとき、やっとHuInは他人と健康的に愛し合えるようになります。
  </p>
</div>



    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        主張が強いタイプ（St, Vi, Roなど）と一緒にいると、気圧されて自分の気持ちを抑えがち。<br />
        空気を乱さないために“自分を我慢”してしまい、あとから心が疲れることも多い。<br />
        「本音を言っても嫌われない」という感覚を育てることが、人間関係をラクにする第一歩。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        感情と空気の両方に敏感なHuInは、「人に寄り添う仕事」や「相手の気持ちを想像する仕事」に強い。<br />
        例：心理職、教育、保育、接客、介護、編集、企画サポート、カスタマーサクセスなど。<br />
        ただし、人の感情を浴びすぎると疲弊しやすいので、「話せる環境」や「感謝される体験」が大切。
      </p>
    </div>

  </div>
</PremiumReveal>

      <PremiumSection />
    </motion.div>
  )
}
