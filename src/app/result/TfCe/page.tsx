'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function TfCePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#cffcc9] via-[#9ff7b7] to-[#a3d8b7] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
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
          src="/6143A69D-7A84-42C1-9547-94FDC2D52F7B.png"
          alt="TfCeキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">TfCe お世話焼き妖精</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">「大丈夫？」って聞くけど、自分は全然大丈夫ちゃうタイプ。</p>
      </div>

      

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Tf（他人ファースト） × 裏：Ce（コアエンパス）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「誰かの役に立ててないと、自分の存在価値がない気がする…」——<br />
  誰かを助けたい、支えたい。<strong>その気持ちが強すぎるあまり、自分の限界を超えても頑張ってしまう</strong>のがTfCe。<br />
  周りからは「気が利く人」「優しい人」と言われることが多いけど、<strong>その“やさしさ”は決して軽いもんちゃう</strong>。<br /><br />

  実際には、<strong>「この人の役に立ててるかな？」「嫌われてないかな？」</strong>って、  
  常に心の中で確認しながら行動してる。<br />
  しかもその矢印は<strong>「特定の誰か」じゃなく「全員」に向いてる</strong>から、  
  <strong>いつもどこかで気を張りすぎてて、疲弊してしまいやすい</strong>。<br /><br />

  断るのが苦手。頼られると断れない。<br />
  でもそれは、<strong>「NOを言ったら嫌われるかも」って無意識に思ってるから</strong>。<br />
  結果、自分がしんどくなっても無理して笑って、<strong>誰からも“いい人”でいようとしてしまう</strong>。<br /><br />

  でもほんまは、<strong>「好きな人にだけは、ちゃんと本音を受け取ってほしい」</strong>って願ってる。<br />
  「ありがとう」「無理してない？」「頑張りすぎなくていいよ」  
  ——そんな言葉をくれる人がいるだけで、<strong>やっと自分を許せるようになる</strong>。<br /><br />

  TfCeは、<strong>やさしさの化身みたいな存在</strong>やけど、  
  その内側は、<strong>いつも誰かの期待と自分の本音のあいだでギリギリに揺れてる</strong>。<br />
  本当のやさしさは、自分を犠牲にしてまで差し出すもんじゃないってことに、  
  少しずつ気づいていけたら、もっと楽に愛せるようになるはず。<br /><br />

  TfCeの“気づかい”は武器でもあるし、呪いでもある。<br />
  <strong>そのやさしさをわかってくれる人とだけ、ちゃんと深く繋がってほしい。</strong>
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            他人の感情や気持ちにものすごく敏感で、<strong>“気づかい”がデフォルト</strong>。<br />
            「頼られること＝存在価値」みたいな意識が強くて、<br />
            人の問題を自分ごとのように抱え込んでしまうところがある。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            常に「相手がどう思うか」を最優先に考えるタイプ。<br />
            自分の感情や意見は後回しになりがちで、<br />
            「自分さえ我慢すればうまくいく」がクセになってしまう。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            とにかく気配り・気遣い・サポート上手。<br />
            でも、何も言わずに1人で抱え込んで、急に限界を迎えることも。<br />
            “頼る”ことが苦手で、「察してもらえない」と密かに落ち込むことも多い。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>共感力と察知力の高さ</li>
            <li>人を支える力、人を安心させる存在感</li>
            <li>感情のフォローアップがうまい“感情の保健室”みたいな人</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>自己犠牲が習慣化しやすい</li>
            <li>限界まで頑張って、突然ダウンしてしまう傾向</li>
            <li>「助けたい気持ち」が強すぎて、境界線があいまいになりがち</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「誰かのために頑張るやさしさ全振り妖精。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    Tf×Ceタイプのあなたは、<strong>人の変化に敏感で、気づかいの達人</strong>。<br />
    そのやさしさに何度も救われた人、きっとたくさんいらっしゃると思います。<br /><br />

    ですが、その「お世話焼き」……<strong>ちょっと行きすぎてはいませんか？</strong><br />
    つい先回りして、相手のために動きすぎて、<strong>“頼られることが当たり前”になってしまっている</strong>——そんな場面、多くないでしょうか。<br /><br />

    申し上げにくいですが、<strong>「気づかい」は美徳でも、やりすぎると“過干渉”です。</strong><br />
    相手の成長の機会を奪ってしまったり、「なんでそこまでしてくれるの？」と戸惑わせてしまうこともあるんです。<br /><br />

    そして何より、<strong>あなた自身がどんどん疲弊していませんか？</strong><br />
    「助けたい」「支えたい」気持ちは本物でも、<strong>“自分を犠牲にしてまで”それを続ける必要はない</strong>のです。<br /><br />

    ときには「今は無理」「ごめんなさい」と断る勇気を持つこと。<br />
    それは冷たさではなく、<strong>“自分を大切にするための選択”</strong>です。<br /><br />

    そして、<strong>あなたの“やさしさ”は、まず自分自身にも向けるべき</strong>だということを、忘れないでください。<br />
    人を支える力があるあなたこそ、自分のケアも“誰かに頼っていい”のですから。
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  TfCeタイプは、<strong>「あなたのためにできること、なんでもしてあげたい」</strong>という思いが、  
  恋愛感情のスタート地点になってる、“お世話焼き全振り型”の愛し方をするタイプ。<br />
  喜ばせたい、力になりたい、癒してあげたい——<br />
  そんな気持ちがどんどん膨らんで、<strong>自分の気持ちはつい後回し</strong>になってしまいがち。<br /><br />

  付き合い始めても、「嫌われたらどうしよう」「相手の負担になったらあかんかな」と気を使いすぎて、  
  <strong>自分の本音や不満はなかなか言い出せない</strong>。<br />
  その結果、<strong>“何でもしてくれる都合のいい人”として扱われることに気づかず、傷ついてしまうことも</strong>。<br /><br />

  でも本当は、TfCeの優しさって“気づき型”やから、<strong>ちゃんと見てくれて、感謝してくれる人</strong>と一緒にいると、  
  どんどん安心して、“素”の自分を出せるようになっていく。<br /><br />

  恋愛において一番求めているのは、<strong>「ありがとう」「あなたのおかげで助かってるよ」みたいな言葉</strong>。  
  それがあるかないかで、<strong>愛情の持続力も、自分の自己肯定感も大きく左右される</strong>。<br /><br />

  TfCeにとって恋愛は、<strong>支えること＝愛情表現</strong>。  
  でも、<strong>「助けてあげること」が当たり前になってしまう関係性は、いずれ心が折れる</strong>。<br />
  「あなたの優しさに助けられてる」ってちゃんと伝えてくれる人とだけ、深く長く付き合っていけるんです。<br /><br />

  周囲からは「優しい」「気が利く」と言われがちやけど、  
  実は繊細な気持ちを抱えながら、<strong>“誰かのために”という軸で動いてる恋愛体質</strong>。<br />
  TfCeの恋は、<strong>“ありがとう”がエネルギーになる、お世話型ロマンチスト</strong>なんやで。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
<p>
  TfCeタイプは、<strong>まさに“気づきの天才”であり、サポート職のプロフェッショナル</strong>。<br />
  相手の小さな変化や心のざわつきをすぐ察知して、<strong>言葉にされる前から動ける</strong>抜群の気配り力を持っています。<br /><br />

  「頼まれてから動く」ではなく、<strong>“頼まれる前に察して先回り”</strong>がこのタイプの真骨頂。<br />
  その姿勢が周囲からの信頼を生み、<strong>「いてくれて助かる存在」</strong>として重宝されることが多いです。<br /><br />

  ただし注意点は、<strong>気づきすぎて“背負いすぎる”こと</strong>。<br />
  自分の体調や心の疲れに気づくのが後回しになりがちで、「大丈夫やから！」と無理を重ねてしまう傾向があります。<br /><br />

  また、「言わなくても察してあげたい」が強くなりすぎると、<strong>周囲に“気づかれない優しさ”として埋もれてしまう</strong>ことも。<br />
  ときには、<strong>「頼る」「甘える」「手放す」</strong>といった“受け取る力”を育てることも大切です。<br /><br />

  誰かのために動ける才能は本物。でもその才能を長く活かすには、<strong>「自分のための余白」</strong>を守る勇気も忘れずに。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        TfCeは、<strong>やさしさに気づいてくれて、ちゃんと受け取ってくれる相手</strong>と相性◎。<br />
        共感してくれて、甘えさせてくれるような人といると、素の自分を出せます。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuIn（共感マスター）</strong>：深いところで感情が通じ合える</li>
          <li><strong>LaCe（愛されスター）</strong>：無邪気に甘えてくれることで癒される</li>
          <li><strong>TfRo（気づかい論理人）</strong>：お互いを思いやる空気が心地いい</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        TfCeは、<strong>「安心できるかどうか」</strong>が一番のポイント。<br />
        最初は遠慮して様子見するけど、<strong>「この人は優しいな」「信頼できそう」</strong>と感じることで一気に心を開いていきます。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>否定せずに話を聞いてくれる</li>
          <li>感情に共感してくれる</li>
          <li>無理に距離を詰めようとしない</li>
          <li>「ありがとう」や労いの言葉をかけてくれる</li>
          <li>さりげない優しさに敏感なタイプ</li>
        </ol>
      </p>
    </div>

    <div>
     <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  TfCeがしんどくなるのは、<strong>「押しつけがましい態度」「察してくれない態度」</strong>。<br />
  優しさを注ぎたいし、相手の気持ちに寄り添いたい。でも、それが“当たり前”扱いされると、心が急速に冷えてしまう。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>感謝やねぎらいの言葉がない</li>
    <li>頼ってばかりで返してくれない</li>
    <li>気持ちに気づかず雑に扱う</li>
    <li>「察してよ」と言っても気づいてもらえない</li>
  </ul>

  TfCeは、<strong>“相手が喜ぶなら”と自分を後回しにする優しさの塊</strong>。  
  でもそれゆえに、自分の心の限界にも気づきにくくて、気づいたときにはもうヘトヘト。<br /><br />

  「あなたのために」と思ってやった行動が、<strong>「別に頼んでない」とか「当然でしょ」みたいに扱われると</strong>、  
  一気に自己価値が揺らいでしまう。<br />
  「私の存在って何？」「誰のために頑張ってるの？」って、心のどこかで虚しくなるんです。<br /><br />

  本当は「ありがとう」とか「助かったよ」とか、<strong>たった一言でも返ってくれば満たされる</strong>。  
  でも、優しさを無償で提供しすぎるあまり、周囲がそれに気づかなくなってくる。<br />
  そして結局、「また傷つくくらいならもう誰にも優しくしない」と極端に振れやすくなる。<br /><br />

  恋愛の中では、<strong>“お世話焼き”のスイッチが常時ONになってることが多い</strong>。  
  相手のためを思って動いているけど、それが自分を追い詰めているってことに、案外気づけてない。<br /><br />

  だからこそ大事なのは、<strong>「NO」を言う練習</strong>と、<strong>「誰かのため」じゃなく「自分のため」に過ごす時間</strong>。<br />
  誰かを癒す力があるのと同じように、自分を癒す力もちゃんと持ってるんやから、  
  そこにもっと意識を向けていく必要があるんです。<br /><br />

  TfCeにとって、恋愛は“自己犠牲の舞台”じゃなくていい。<br />
  <strong>「あなたが幸せでいることが、誰かにとっての幸せになる」</strong>という発想を持ってみてほしい。<br /><br />

  頼まれたら断れない、察しすぎて疲れる――そんな自分を責めないで。<br />
  まずは、自分を大切にすることから、ちゃんと始めてみてください。<br />
  <strong>与えるだけじゃなく、受け取る力を育てること</strong>が、恋愛をもっと心地よくしてくれるはずです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        自己主張の強いタイプ（St, La）と一緒にいると、<strong>無理して合わせてしまいがち</strong>。<br />
        また、同じ共感タイプ（Hu, In, Ce）とは気持ちが通じ合いすぎて、<strong>お互いにしんどくなることも</strong>。<br />
        「どこまでが自分の責任か」を明確にする視点が必要です。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        <strong>人のために働くこと</strong>がモチベーションになるTfCeタイプ。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>看護・介護・保育・臨床心理士・医療事務など</li>
          <li>ブライダル・カウンセラー・接客業全般</li>
          <li>ユーザーサポートやコミュニティマネージャー職</li>
        </ul>
        「誰かの笑顔が、自分のやりがい」——そう思える現場が天職。
      </p>
    </div>
  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
