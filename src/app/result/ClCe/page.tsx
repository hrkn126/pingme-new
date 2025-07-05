'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumSection from '@/components/PremiumSection'
import PremiumReveal from '@/components/PremiumReveal';


export default function ClCePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#051426] via-[#0c1e35] to-[#12263b] flex flex-col items-center justify-start px-4 py-12 text-white text-center"
    >
      {/* 🧊 キャラクター画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="w-full max-w-md"
      >
        <Image
          src="/DE7C553F-6F3D-4409-A148-86CF22EF6953.png"
          alt="ClCeキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain rounded-xl shadow-lg"
        />
      </motion.div>

      {/* タイプ名・キャラネーム・キャッチ */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">ClCe 氷読士</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          静かに、でも確かに。あなたの痛みに気づいている
        </p>
      </div>


      {/* 🧠 タイプ解説 */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-white">【タイプ構成】</h2>
          <p>表：Cl（クールリーダー） × 裏：Ce（コアエンパス）</p>
      </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【根本動機】</h2>
<p>
  感情をコントロールして冷静でいたい。でも、人の苦しみに無関心ではいられない。<br />
  「感情に流される自分」は、どこか未熟に思えてしまう。だからこそ、どんなときも冷静に、感情を抑えて判断したいと思っている。<br />
  誰かに強く感情移入したり、思わず涙を見せてしまったり——<br />
  そういった“感情が勝ってしまう自分”を、なるべく他人には見せたくない。<br />
  それは、弱さを見せたくないという意識でもあり、自分の理性を曇らせたくないという防衛でもある。<br /><br />

  けれど本当は、人の痛みや孤独に対して、内心では確かに気づいている。<br />
  誰かが何かを我慢していたり、場の空気が少し歪んだりすると、それにすぐ気づいてしまう自分がいる。<br />
  ただしそれは、「助けたい」「癒したい」という感情ではない。<br />
  <strong>“理解はできる。けれど、それを救うのは自分の役目じゃない”</strong>という、どこか冷静な線引きがある。<br /><br />

  ClCeの共感は、<strong>情熱的なものではなく、知的で距離のある共感</strong>。<br />
  感情を察知することと、それに巻き込まれることは、別のものだとわかっている。<br />
  だからこそ、人の内面を正確に読み取れるのに、どこか「冷たい」と誤解されることもある。<br /><br />

  でも本人にとってはそれが自然であり、自分らしいスタンス。<br />
  ClCeは、<strong>感情に飲み込まれることなく、静かに理解し、必要以上には踏み込まない</strong>。<br />
  その姿勢こそが、ClCeならではの「理性と共感の両立」であり、<br />
  近づきすぎないからこそ見えるものがある——そう信じているのだ。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【価値観】</h2>
          <p>
            合理性・論理性を重んじながらも、内心では人の心の機微や感情の裏側に強い関心を持つ。
            人と本気で関わることは怖い。でも、誰かが苦しんでいるのを放ってはおけない。
            「冷静さ」と「感受性」の狭間でバランスをとろうとするタイプ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【思考傾向】</h2>
          <p>
            頭の中ではいつも冷静に状況を分析し、物事を論理的に整理している。けれど、それだけの“理屈屋”では終わらない。
            人のちょっとした表情の変化や声のトーン、言葉と言葉のあいだにある“間（ま）”——そういった些細なサインから、無意識のうちに感情の揺れを感じ取ってしまう、繊細なアンテナを持っている。
            <br /><br />
            表面的にはクールで理知的に見えるかもしれないが、その奥ではずっと、相手の気持ちの動きや心の微妙な変化を静かに読み取り続けている。
            それは「共感する」というより、「ふと気づいてしまう」といった感覚に近い。理由ははっきりしないけれど、なんとなく相手の“本音”を察してしまう。
            <br /><br />
            だからこそ、本当は言いたかったけれど言えなかったことや、心の奥にある想いにも、そっと寄り添うことができるのだ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">【行動傾向】</h2>
          <p>
            他人の感情にはすぐ気づくが、自分の感情は置き去りにしがち。
            感情を外に出すことが苦手で、「平気なフリ」「わかってるフリ」をしやすい。
            だからこそ、余計にしんどさが溜まることも。
          </p>
        </div>

        <div>
  <h2 className="text-lg font-semibold text-white">【強み】</h2>
  <ul className="list-disc list-inside pl-2">
    <li>冷静な視点と深い共感力の“二刀流”</li>
    <li>黙って支えたり、見守ったりすることが得意</li>
    <li>感情に飲まれず、他人に安心感を与える存在</li>
  </ul>
</div>

<div>
  <h2 className="text-lg font-semibold text-white">【弱み】</h2>
  <ul className="list-disc list-inside pl-2">
    <li>自分のしんどさに気づきにくく、感情を溜め込みがち</li>
    <li>「察する力」が強すぎて、自分の意思が見えにくくなる</li>
    <li>共感疲れや、過剰な自己抑制によってメンタル不調を起こすことも</li>
  </ul>
</div>

<div>
  <h2 className="text-lg font-semibold text-white">【一言で言うと】</h2>
  <p>「黙って寄り添う、冷静な優しさ。」</p>
</div>

<div>
  <h2 className="text-lg font-semibold text-white">【成長ポイント】</h2>
  <p>
    「察して我慢すること」が当たり前になっていませんか？<br />
    まわりに気を遣って、空気を読んで、何も言わずに自分を抑える。<br />
    それは確かに“優しさ”かもしれませんが、<strong>ずっとそれを続けていたら、自分の気持ちがどんどん置き去りになりますよ</strong><br /><br />

    Cl×Ceタイプは、共感力が高くて、人の微細な感情の揺れにもすぐ気づける繊細さを持っています。<br />
    でもそのぶん、「自分の感情ぐらい抑えて当然」と思ってしまいがちなんです。<br />
    <strong>無意識のうちに我慢を美徳にしてしまっているなら、それはただの“自己犠牲”です。</strong><br /><br />

    感情は、コントロールするものではなく、<strong>まずは「感じてあげること」が必要</strong>なんです。<br />
    「これぐらいで弱音吐いたらダメかな…」「言ったところで迷惑かな…」そんなふうに自分の気持ちを軽んじる癖、そろそろ手放していきましょう。<br /><br />

    周囲に安心感を与えられるあなたほど、<strong>自分自身にも安心を与えてあげる必要があります</strong>。<br />
    感情を我慢するのではなく、「私はこう感じてる」と少しずつ言葉にする練習をしてみてください。<br /><br />

    <strong>黙っているだけでは、誰にも本当のあなたは伝わりません。</strong><br />
    あなたの優しさを、あなた自身にも向けてあげてくださいね。
  </p>
</div>
</div>



    

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">
    <div>
      <h2 className="text-lg font-semibold text-white">【恋愛傾向】</h2>
      <p>
  ClCeタイプは、一見クールで感情を表に出さず、恋愛においてもどこか距離を保とうとする姿勢が目立ちます。<br />
  ですが内心では、<strong>相手の気持ちや空気の変化にものすごく敏感</strong>で、<strong>静かに共鳴している共感体質</strong>です。<br /><br />

  ただし、この共感にも“順序と理屈”が必要。<br />
  感情的にぶつかってこられたり、言葉と行動が噛み合っていなかったりすると、<strong>一気に冷めて距離を取る傾向</strong>があります。<br />
  「こっちはこっちなりに丁寧に共感してるのに、なんで勝手に感情爆発されなあかんの？」という不満を抱えがち。<br /><br />

  恋愛においても、<strong>整合性のある関係性</strong>を好み、「とりあえず好きだから」という理由だけでは動きません。<br />
  好きになったとしても、<strong>まず相手の感情の安定性、考え方の筋の通り方をチェック</strong>してしまう、ある意味“感情分析家”タイプです。<br /><br />

  そのぶん、一度信頼して心を開いた相手には、<strong>揺るがない静かな愛情</strong>を注ぎます。<br />
  情緒の波に振り回されることなく、<strong>必要な時にそっと隣にいてくれる安定感の塊</strong>。でも本人は「これが普通やろ」って思ってるから、自分の愛情表現が伝わってるとは思っていません。<br /><br />

  恋愛にもマニュアルと段階があって当然。<br />
  「共感に理屈はいらんやろ」なんて感情論だけで突っ込んでくる相手には、<strong>“その雑な共感、誰でもしてるわ”と内心で冷笑してる</strong>、そんな合理主義ロマンチストです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【仕事傾向】</h2>
      <p>
        表面的には論理的でスマートに見えるが、実はチームの空気や人の感情に人一倍敏感。<br />
        感情を乱さず冷静に状況判断ができるため、全体を見渡して支える調整役に向いてる。<br />
        また、分析力・観察力・共感力の“三刀流”を持っているため、心理系・教育・医療系など“人の心”に関わる仕事に適性が高い。<br />
        一方で感情を溜め込みやすく、人間関係に気を遣いすぎて疲れてしまうこともあるので、ひとりで集中できる研究・校正・サポート職なども◎。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【相性の良いタイプ】</h2>
      <p>
        ClCeにとって心地よいのは、「感情をぶつけず、そばにいてくれる人」。<br />
        相性がいいのは以下のタイプ👇
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>
            <strong>HuCe（人間力おばけ）</strong>：感情をオープンに伝えてくれる分、ClCeが自分の気持ちを整理しやすくなる。
            余計な詮索をせず、ただ“居てくれる”ことでClCeに安心を与える存在。
          </li>
          <li>
            <strong>StIn（感情不器用さん）</strong>：互いに多くを語らなくても分かり合える関係性。沈黙も心地よく感じられるペア。
          </li>
          <li>
            <strong>ViRo（未来型ロジック）</strong>：感情より思考やビジョン重視。冷静なやり取りができて、刺激し合える相手。
          </li>
        </ul>
        逆に、感情をぶつけてきたり、過干渉すぎるタイプは苦手。  
        ClCeにとっては、適度な距離と尊重のある関係が何より大事。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold text-white">【親密になるまでのステップ】</h2>
      <p>
        ClCeタイプが心を開くには、時間と“信頼の積み重ね”が必要。<br />
        最初からグイグイ来られると引いてしまう傾向があるけど、
        <strong>じわじわ距離を縮めてくれる人</strong>には少しずつ心を許していく。<br /><br />
        🔽 ClCeが親密になるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>無理に干渉してこないけど、必要な時はそばにいる</li>
          <li>感情を言語化せずとも察してくれる</li>
          <li>こちらが話すまで待ってくれる</li>
          <li>共通の価値観や思考パターンを共有できる</li>
          <li>ちょっとした言動から「この人、わかってくれる」と感じる</li>
        </ol>
        外面はクールでも、心の中では「この人なら信じてもいいかも」と感じた瞬間から、少しずつ距離を縮めていくんやで。
      </p>
    </div>

    <div>
     <h2 className="text-lg font-semibold text-white">【恋愛でのNGパターン】</h2>
<p>
  ClCeがしんどくなる相手の特徴は、<strong>感情の押し売り</strong>と<strong>距離感のなさ</strong>。<br />
  感情を激しくぶつけてきたり、「なんで言ってくれないの！？」と詰めてくるタイプは、ClCeにとって<strong>心の扉を閉ざすスイッチ</strong>になりがちです。<br /><br />

  感情を感じる力はあるのに、それを<strong>“冷静さ”や“落ち着き”という名のフィルター</strong>で処理するクセがあるため、<br />
  感情表現を強要されると、処理しきれずに<strong>一気にシャットダウン</strong>することもあります。<br />
  本人は「言葉にしづらいだけ」「考えてる時間が必要」と思ってるのに、<strong>それを“無関心”や“冷たい”と決めつけられる</strong>と、心が一気に離れていきます。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>連絡頻度を強制してくる（返信が遅い＝冷たいと決めつける）</li>
    <li>「はっきり言ってよ」と感情を言語化させようとする</li>
    <li>勝手に心の中を決めつける or 感情を代弁してくる</li>
    <li>感情的に問い詰めたり、泣いたり怒ったりをぶつける</li>
  </ul>

  ClCeは<strong>穏やかで静かな関係性</strong>を望んでるから、過干渉や感情のアップダウンが激しい人とは相性悪め。<br />
  「察してほしい」と「言ってくれなきゃ分からない」の板挟みにされると、<strong>自分の感情すらどこかへ行ってしまう</strong>ので要注意です。<br /><br />

  <strong>感情処理をロジックで片付けようとして、余計にこじらせる傾向</strong>があるため、<br />
  病んでることにすら気づかず“機能はしてるけど心は死んでる状態”になってしまうことも。<br />
  そうなったときは、<strong>感情にも主語をつけて、自分の気持ちを「構造」じゃなく「存在」として扱う</strong>のが第一歩です。<br />
  「私は今、悲しい」「私は少し疲れている」と、<strong>ただ感じてあげること</strong>が、ClCeにとって一番効く“再起動ボタン”なのです。
</p>
<div>
  <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
  <p>
    Hu、Ce、Stなど<strong>感情重視タイプ</strong>と関わるとき、<strong>感情が見えにくい人</strong>と思われて誤解されやすい。<br />
    また、相手のしんどさにはすぐ気づくくせに、<strong>自分のケアは後回しにしがち</strong>。<br />
    「わかってくれない」と感じる前に、<strong>まずは自分の気持ちを少しでも言葉にしてみること</strong>が大事。
  </p>
</div>

<div>
  <h2 className="text-lg font-semibold">【向いてる職業】</h2>
  <p>
    冷静な視点と共感力を兼ね備えるClCeは、<strong>人を支える立場</strong>や<strong>繊細な判断が求められる仕事</strong>に向いてるタイプ。<br />
    例：心理士、教育系、医療職、研究開発、編集・校正、秘書・サポート職など。<br />
    感情に巻き込まれすぎず、<strong>安定した視点で相手を理解できる</strong>強みを活かせる場面が多い。
  </p>
</div>

    </div>
    
  </div>
</PremiumReveal>
<PremiumSection/>
</motion.div>  // ✅ ← これで完璧に閉じた！
  )
}
