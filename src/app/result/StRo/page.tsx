'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function StRoPage() {
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
          src="/3ACE85A6-E225-49EC-81DF-29230FA4D0E0.png"
          alt="StRoキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">StRo 頑固リアリスト</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          正しさが、何よりも大事やねん。
        </p>
      </div>

      

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：St（ストレート） × 裏：Ro（ロジックマインド）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「筋通ってないことは許せない」——<br />
  感情よりもまず、“正しさ”と“筋道”を大切にするタイプです。<br />
  冷たく見えるかもしれませんが、<strong>感情がないのではなく、感情より先に合理性が来る</strong>だけ。<br />
  ブレない価値観と誠実さの持ち主です。<br /><br />

  特にこのタイプは、<strong>自分の中に“絶対に曲げたくないルール”がいくつも存在している</strong>傾向があります。<br />
  それは社会全体のルールというより、<strong>「自分なりの筋」「納得できる道筋」</strong>であり、<br />
  一度それが固まると、たとえ相手がどれだけ感情的に訴えてきても、<strong>「でもそれは理屈が通ってないやん」と一刀両断してしまう</strong>場面も多いです。<br /><br />

  この“自分ルール”は本人にとって、信念であり、指針であり、精神の支柱そのもの。<br />
  だからこそ、<strong>そのルールに沿わない提案や考え方には強く違和感を覚え、即座に拒否反応が出てしまう</strong>のです。<br />
  場合によっては「それは効率が悪い」「無駄が多すぎる」「そのやり方、意味ある？」と、空気を無視して指摘してしまうこともあります。<br /><br />

  こうした特性ゆえに、<strong>柔軟性に欠ける・頭が固い・融通がきかない</strong>と思われることも多々あります。<br />
  周囲がノリや空気感で進めようとする中で、<strong>一人だけ「いや、それ論理的に破綻してるやろ」と立ち止まってしまう</strong>ため、<br />
  結果的に「空気が読めない人」「面倒くさい人」扱いされることも少なくありません。<br /><br />

  ただ、それは決して自分勝手だからではありません。<br />
  むしろ、<strong>「一度決めたことは貫きたい」「中途半端な対応で人を裏切りたくない」</strong>という、<strong>強い責任感</strong>が根底にあります。<br />
  本人なりに常に最善を考えていて、<strong>一貫した姿勢を通すことで信頼を守ろうとしている</strong>のです。<br /><br />

  感情よりも合理性。空気よりも筋道。<br />
  「みんながそうしてるから」ではなく、<strong>「自分の中で納得できるかどうか」で物事を判断する</strong>。<br />
  そんな“ぶれない信念”こそが、StRoタイプの誇りであり、孤独であり、そして最大の魅力なのです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            誠実さ・信念・一貫性を重視します。<br />
            「ちゃんとしてるか？」が最重要で、場の空気や流れには流されません。<br />
            そのため周囲からは“頑固”と思われがちですが、<strong>それは責任感と誠意の裏返し</strong>です。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            感情よりも論理が優先。<br />
            物事を「なぜそうなるのか？」から考えるクセがあり、<strong>曖昧な説明や雰囲気で進むこと</strong>に不安を覚えます。<br />
            論理は盾。感情は後回し。それがこのタイプの思考スタイルです。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            無駄が嫌いで、<strong>効率と正確性を重視する慎重派</strong>。<br />
            納得できないまま物事を進めることが苦手で、<strong>下調べや計画をしっかり立ててから動く</strong>スタイルです。<br />
            非合理・矛盾・場当たり対応にはイライラが爆発しがち。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>判断力と分析力に優れ、論理的で頼れる</li>
            <li>誠実でブレない信念を持っている</li>
            <li>一度決めたことをやり抜く継続力</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情的な反応や曖昧な態度にイラつきやすい</li>
            <li>他人にも「正しさ」を求めすぎてしまう傾向あり</li>
            <li>自分にも厳しすぎて、ストレスを内に抱え込みやすい</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「感情よりも、まず“理”を通したい“芯ある人間”。」</p>
        </div>

        

       <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    St×Roタイプのあなたは、非常に論理的で、<strong>「筋が通っているか」「正しいかどうか」に強くこだわる</strong>傾向がありますね。<br />
    その姿勢は、職場や現実的な場面では信頼を集める大きな武器となります。<br /><br />

    ですが、人間関係では少しだけ注意が必要です。<br />
    人の感情や迷いは、必ずしも“正しさ”だけで測れるものではありません。<br />
    ときには矛盾していたり、論理では説明できない感情があったりするものです。<br /><br />

    もしあなたが「それは間違っている」「筋が通ってない」と感じたとしても、<br />
    まずは<strong>その人の気持ちの背景に目を向けてみてください。</strong><br />
    正論をぶつけるよりも、<strong>「そう感じたんだね」と受け入れる柔らかさ</strong>のほうが、相手との信頼を深めることがあります。<br /><br />

    また、ご自身の中にも「こうあるべき」「ブレたらいけない」といった<strong>強い自己縛り</strong>がありませんか？<br />
    それが自分を支える軸になる反面、<strong>心を疲れさせてしまう原因</strong>にもなっているかもしれません。<br /><br />

    間違うこと、揺れること、迷うこと。<br />
    それらを許せるようになったとき、<strong>あなた自身の内面にも、もっと自由で穏やかなスペースが生まれます。</strong><br /><br />

    “正しさ”は大切です。  
    ですが、“柔らかさ”もまた、人を惹きつける大きな力なのです。
  </p>
</div>


      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  StRoタイプは、恋愛に対して<strong>非常に真面目で、誠実さと安定性を最重視する現実主義者</strong>です。<br />
  ドラマチックな展開や甘々な駆け引きよりも、<strong>「この関係はちゃんと続くか？」「相手は信用できるか？」</strong>を最初から冷静に判断しています。<br />
  自分の感情に振り回されることが少なく、<strong>恋愛感情そのものよりも“信頼関係”に価値を置く</strong>のが特徴。<br />
  そのため、恋愛初期の盛り上がりより、<strong>関係をどう育てるか・どう維持するか</strong>を真剣に考えます。<br />
  言い換えれば、好きになっても「今は恋してるから舞い上がってるだけやろ」と自分にストッパーをかけるタイプ。<br />
  感情よりも論理が先にくるため、<strong>愛情表現はやや不器用で、固く見えることも多い</strong>です。<br />
  でも、そのぶん一度関係を築ければ、<strong>めちゃくちゃ誠実で一途</strong>。浮気や軽はずみな行動とは無縁です。<br />
  相手にも同じだけの責任感や誠実さを求めるので、<strong>感情で突っ走るタイプや気まぐれな人とは相性が悪め</strong>。<br />
  論理的に物事を考え、冷静に歩調を合わせられる相手となら、安心して心を開くことができます。<br />
  つまり、恋愛＝ロジックと堅実さの共同作業。<br />
  ときめきより安定、勢いより計画性。<strong>長く続く関係を真剣に築ける相手だけが、StRoの本気の恋を引き出せる</strong>のです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        <strong>計画性・論理性・誠実さ</strong>においてはピカイチ。<br />
        手を抜かず、自分にも他人にも厳しいぶん、<strong>信頼される“縁の下の力持ち”</strong>になりやすいです。<br />
        ただし、<strong>感情で動く人が多い職場ではストレスが溜まりやすく</strong>、<br />
        「なぜこの手順でやってるのか？」が見えないと一気にやる気を失う傾向も。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        StRoは、<strong>「ちゃんと筋を通してくれるタイプ」「本気で向き合ってくれる人」</strong>と安心して関われます。<br />
        嘘がない・論理が通る・一貫性がある、そんな相手との関係が安定しやすいです。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>ClRo（論理戦士）</strong>：共通言語が“理屈”なので、話しやすく信頼できる</li>
          <li><strong>TfRo（気づかい論理人）</strong>：細部まで考えて行動する点で共鳴</li>
          <li><strong>HuCe（人間力おばけ）</strong>：誠実な感情に触れることで柔軟性を学べる</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        StRoは、<strong>信頼を積み上げてからじゃないと心を開かない慎重派</strong>。<br />
        ノリや雰囲気で仲良くなることはほとんどなく、<strong>「この人、ちゃんとしてるな」と感じて初めて一歩踏み出します</strong>。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>言ってることとやってることに一貫性がある</li>
          <li>ふざけすぎず、真面目に向き合ってくれる</li>
          <li>約束やルールを守る姿勢が見える</li>
          <li>感情に流されすぎず、論理で対話してくれる</li>
          <li>「自分の芯を持ってる人なんやな」と思える</li>
        </ol>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  StRoが一番しんどくなるのは、<strong>「曖昧でだらしない関係」「感情で振り回される関係」</strong>です。<br />
  本人は真剣に向き合ってるぶん、相手の気まぐれやルーズさに巻き込まれると、一気に信頼が崩れます。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>約束を守らない・連絡が雑</li>
    <li>機嫌や感情の波で態度が変わる</li>
    <li>言動に一貫性がなく、何を考えてるかわからない</li>
    <li>話し合いが感情論で終わる</li>
  </ul>

  StRoは、<strong>「ちゃんと話そう」「筋を通してくれ」</strong>が口グセレベルの論理人間。<br />
  物事には理由や整合性が必要で、「なんとなく」「雰囲気で」みたいな進行に非常にストレスを感じやすいです。<br /><br />

  しかも、感情を後回しにするクセがあるからこそ、<strong>本当は傷ついていても平気なふりをしがち</strong>。<br />
  でも内心ではずっと考えていて、「この人、ちゃんとしてくれないな」「この関係、成り立ってないな」と冷静に分析してます。<br /><br />

  本人も気づかないうちに、<strong>“正しい愛され方”を相手に求めすぎてしまう</strong>ところがあり、  
  それがうまく噛み合わないと、「じゃあもういい」とすぐに心をシャットアウトしてしまう傾向も。<br /><br />

  恋愛って正解がないからこそ、StRoタイプにはしんどい。<br />
  でも、<strong>“不完全なまま愛される”ことを受け入れることができれば、人生の景色がガラッと変わります</strong>。<br /><br />

  ルールや筋を守るのはもちろん大事。けど、人と人との関係には、<strong>揺らぎや矛盾、感情のグラデーション</strong>も含まれている。<br />
  そこに折り合いをつけることが、StRoにとっての本当の成熟かもしれません。<br /><br />

  「ちゃんと向き合いたい」「誠実でありたい」という気持ちは、StRoの一番の強み。<br />
  だからこそ、<strong>完璧じゃない関係性の中でも、どう誠実でいられるか</strong>を考えてみてください。<br /><br />

  大切なのは、“愛されること”に理屈はいらないってこと。<br />
  <strong>間違っても、欠けてても、言葉が不器用でも、あなたは十分に愛されていい</strong>。<br />
  その許可を、自分自身に出せるようになったら、恋愛はぐっと自由になります。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        感情タイプ（Ce, In）とはテンポや価値観のズレが起きやすく、<strong>「何でそんなに曖昧なん？」とモヤる場面が多め</strong>。<br />
        逆にロジカルタイプ（Cl, Ro）とは話は合うけど、<strong>どちらも譲らなすぎると平行線になるリスク</strong>も。<br />
        「正しさの押し付け」にならないよう、<strong>“人それぞれ”の感覚を許容する視点</strong>が大事。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        <strong>確実性・効率・誠実さ</strong>が評価される職場でこそ、StRoは力を発揮します。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>公務員・法務・監査・会計などルール重視の職業</li>
          <li>エンジニア・設計・品質管理など論理と精度が求められる職場</li>
          <li>物流・業務改善・オペレーションなどの管理職</li>
          <li>ディレクションやプロジェクトマネジメント職</li>
        </ul>
        「適当にやるくらいなら、最初からちゃんとやる」そのスタンスが武器になります。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
