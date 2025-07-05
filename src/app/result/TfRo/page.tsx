'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function TfRoPage() {
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
          src="/30AC6690-F9DB-4F86-B366-C9CDCC8DED76.png"
          alt="TfRoキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">TfRo 気づかい論理人</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">感情は苦手。でも支えたい気持ちはほんまやねん。</p>
      </div>

     

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Tf（他人ファースト） × 裏：Ro（ロジックマインド）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「ちゃんとやることが、相手への思いやり」——<br />
  TfRoタイプは、<strong>感情よりも“正確さ”や“段取り”で人に貢献しようとする堅実タイプ</strong>。<br />
  表情や言葉で気持ちを伝えるのは苦手でも、<strong>目立たないところでしっかり支える力</strong>を持っています。<br /><br />

  実は、<strong>人の気持ちに対する“察し力”もかなり高い</strong>んです。<br />
  「これ言われたら傷つくかな？」「いま疲れてそうやな」みたいなことに  
  ちゃんと気づいて、さりげなく先回りして行動してたりします。<br /><br />

  でも——  
  そのやさしさや気づかいを“説明する場面”になると、<strong>やたらと言葉が理屈くさくなる</strong>んよな。<br />
  「いや、それは〜だからで、こういう仕組みで…」とか、<strong>ロジックと段取りで説明しがち</strong>。<br />
  だから「気は利くけど、ちょっと冷たい」「優しいけど距離ある感じ」って誤解されることも…。<br /><br />

  本人からしたら、<strong>ちゃんと伝わるように、わかりやすく整理してるだけ</strong>なんやけど、  
  相手は「もっと気持ちで言ってよ…」って感じてたりする。<br />
  その温度差が、<strong>思ってる以上に“心の距離”に見えてしまう</strong>こともあるんよな。<br /><br />

  TfRoは、<strong>気づかいと論理性、両方を持ってるからこそ、ちょっと不器用に見える</strong>タイプ。<br />
  でもその不器用さの奥には、<strong>「ちゃんと伝えたい」「ちゃんと相手に届いてほしい」</strong>っていう  
  真面目であたたかい気持ちがちゃんとあるんです。<br /><br />

  感情でぶつかるのは苦手でも、<strong>行動・言動・誠実な説明</strong>を通して  
  パートナーを大事にするその姿勢は、長く付き合うほどに信頼へと変わっていきます。<br /><br />

  TfRoは、<strong>「言葉より、ちゃんとやること」の人</strong>。  
  でも時々は、気づいてる気持ちもそのまま、ちゃんと“ことば”にしてみてな。  
  それだけで、グッと伝わりやすくなるから。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            秩序・効率・誠実さ・責任感。<br />
            「曖昧な感情」よりも、<strong>「具体的な行動と成果」</strong>を大事にする。<br />
            ただやさしいだけじゃなく、<strong>“ちゃんとできる”ことに価値を置く</strong>。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            相手の気持ちは気になるけど、<strong>感情に巻き込まれるのは苦手</strong>。<br />
            物事を整理・分析して、冷静に解決しようとする。<br />
            「こうすれば良くなる」と改善思考が強く、<strong>ついアドバイス口調になりがち</strong>。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            助けたい気持ちはあるけど、<strong>やり方はスマートで実務的</strong>。<br />
            感情的な共感よりも、「何をすべきか」を明確にして動く。<br />
            そのせいで「冷たい」と誤解されがちやけど、<strong>実は努力家でめっちゃ支えてる</strong>。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>論理性とサポート力のバランス</li>
            <li>計画性と気配りの両立</li>
            <li>無駄のないフォローアップと改善提案が得意</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情的なアプローチに共感しづらい</li>
            <li>思いやりが「冷静さ」に見えてしまう</li>
            <li>自分にも他人にも厳しすぎる傾向あり</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「感情より“段取り”で支える、影の功労者。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    TfRoタイプのあなたは、<strong>「相手のためになるかどうか」</strong>をいつも冷静に考え、<br />
    周囲に配慮した行動をとろうとする、いわば“論理的な気づかいのプロ”です。<br /><br />

    ただ、そんなあなたの優しさが、<strong>「損得勘定になりすぎる」傾向</strong>はありませんか？<br />
    「自分が我慢すれば丸く収まる」「ここで譲れば相手が助かる」<br />
    ——それ、本当にあなたが納得して選んでいますか？<br />
    <strong>心のどこかで「私ばっかり損してない？」とモヤモヤしていませんか？</strong><br /><br />

    気づかいとは、時に“黙って寄り添うこと”でもあります。<br />
    “正しさ”や“効率”だけで関係を測るのではなく、<strong>相手の感情に寄り添う余白</strong>を持つことで、<br />
    あなたの優しさは、より温度のあるものへと深まっていきます。<br /><br />

    また、<strong>「正解主義」から少し距離を取る勇気</strong>も大切です。<br />
    人間関係においては、<strong>100点の選択肢よりも、“心から納得できる選択”のほうが価値があります。</strong><br /><br />

    自分の納得をないがしろにしてまで相手に譲ることが、<br />
    本当に誠実な気づかいとは限りません。<br />
    まずは、<strong>自分の本音に正直であること</strong>。それが、あなたの論理的優しさを“本物”に変えてくれる第一歩です。
  </p>
</div>

      </div>
<PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  TfRoタイプは、<strong>感情を直接ぶつけるよりも、“行動”や“段取り”を通して愛情を表現する</strong>堅実派。<br />
  たとえば、「〇〇やっといたよ」「無理そうやったから代わりに申請しといた」——  
  そんな一言に、ものすごく深い愛が込められてるのに、<strong>それに気づいてもらえないとちょっと切ない</strong>。<br /><br />

  恋愛においても、<strong>「好きだよ」「会いたい」みたいな感情的なやり取りより、相手の生活を整えたり支えたりすることに全力を注ぐ</strong>。<br />
  そのスタンスはとても誠実で現実的やけど、<strong>感情を表に出さないぶん「冷たい」「距離がある」と思われやすい</strong>という矛盾も背負ってる。<br /><br />

  TfRoの愛は、“思いやり”と“仕組み化”のハイブリッド。<br />
  「この人が困らないように」「先回りして不安を減らしておこう」という発想で動くから、  
  恋人というより“影のマネージャー”みたいな立ち位置になりがちやけど、<strong>その愛は本物</strong>。<br /><br />

  甘い言葉やドラマチックな演出よりも、<strong>「日常の中でいかに相手をサポートできるか」に価値を感じる</strong>。<br />
  でも実は、「気づいてくれてありがとう」ってたった一言をもらうだけで、<strong>内心めちゃくちゃ報われてる</strong>。<br /><br />

  TfRoにとっての理想の恋愛は、<strong>「感情で盛り上がる」より「安定して支え合える関係性」</strong>。  
  お互いがやるべきことを理解し合って、段取りよく助け合えるような“信頼ベース”のパートナーシップ。<br /><br />

  感情が表に出ないぶん誤解もされやすいけど、<strong>その奥にある気づかいと責任感は誰よりも重たい</strong>。  
  TfRoの愛は、派手じゃないけど壊れにくい。<br />
  <strong>毎日の“さりげない行動”に全部詰まってる、静かで誠実な愛のかたち</strong>なんです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
<p>
  TfRoタイプは、<strong>気づかいの温度感 × 段取りの冷静さ</strong>を兼ね備えた、<strong>現場力の高いロジカル支援者</strong>。<br />
  「どうすれば相手が困らないか？」「事前に潰しておけるリスクは何か？」を先回りして考え、<strong>トラブル回避や下支えの調整力</strong>が抜群です。<br /><br />

  自分が前に出るより、<strong>縁の下で全体の歯車を整えることにやりがいを感じる</strong>タイプ。<br />
  指示を受けるだけでなく、<strong>自分から考えて動ける</strong>ので、現場の信頼も厚い傾向にあります。<br />
  情緒的なケアはやや苦手ですが、その分、<strong>「ちゃんとしてる」段取りやタスク管理</strong>で人を安心させる力を持ってます。<br /><br />

  向いてる職業は、<strong>業務改善・事務職・バックオフィス・PM・秘書・品質管理</strong>など、<strong>仕組みを支える役割</strong>。<br />
  ルールやフローをきちんと整備できる場だと、持ち前の“抜けのない丁寧さ”が最大限に発揮されます。<br /><br />

  ただ、<strong>感情表現が控えめなぶん、誤解されやすい</strong>ことも。  
  「冷たい」「反応が薄い」と取られがちやけど、実際は内心でめちゃくちゃ気を配ってるタイプやから、<strong>言語化スキルを伸ばす</strong>と信頼関係がより築きやすくなるで。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        TfRoは、<strong>感情でぶつかるより“落ち着いた対話”ができるタイプ</strong>と相性◎。<br />
        感情のアップダウンが少なく、<strong>「ちゃんと考えて動いてる人」</strong>に信頼を寄せやすいです。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>ClRo（論理戦士）</strong>：論理で意思疎通できる安心感</li>
          <li><strong>StRo（頑固リアリスト）</strong>：筋を通す姿勢に共感できる</li>
          <li><strong>TfCe（お世話焼き妖精）</strong>：感情より行動で支えるスタンスが共鳴</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        TfRoは、<strong>感情の押し付けが少なく、落ち着いた関係性を好む</strong>慎重派。<br />
        相手の行動や誠実さを観察し、「この人は信頼できそう」と判断してから心を開いていきます。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>感情の波が少なく、安定している</li>
          <li>自分の努力をちゃんと見てくれる</li>
          <li>やるべきことを放置せず動ける</li>
          <li>論理で会話ができる</li>
          <li>過剰に感情で揺さぶってこない</li>
        </ol>
      </p>
    </div>

    <div>
     <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  TfRoが苦手なのは、<strong>感情的にぶつかってくる相手</strong>や、<strong>曖昧すぎる関係</strong>。<br />
  感情自体が悪いわけじゃない。でも「なんで泣いてるのか分からない」「なんで怒ってるか説明がない」となると、<strong>処理できずフリーズ</strong>してしまう。<br />
  相手の言動の背景が見えなかったり、会話のゴールが見えなかったりすると、「今どうすればいいの？」と強いストレスを感じてしまう。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>気分や勢いで話し合いを進める</li>
    <li>感情をぶつけるだけで論点が見えない</li>
    <li>曖昧なまま関係を続けようとする</li>
    <li>努力や準備に気づかずスルーする</li>
  </ul>

  TfRoは、<strong>「どうしてそう思ったか？」「何を目指してるのか？」を常に考えている</strong>。  
  だからこそ、感情だけで押し通すようなコミュニケーションに弱い。<br />
  ロジックのない感情の爆発や、計画性のない行動には戸惑ってしまうし、<strong>「ちゃんと考えて動いてるのに…」という無力感</strong>に襲われる。<br /><br />

  しかもTfRoは、<strong>「相手のために準備する」ことで愛情を伝えるタイプ</strong>。<br />
  小さなサプライズや、相手の負担を減らすような気配りを“戦略的に”考えてる。  
  でもその頑張りに気づいてもらえないと、「なんで伝わらないんだろう」って心が摩耗していく。<br /><br />

  特にしんどいのは、「察してよ」「言わなくても分かるでしょ」みたいな感覚重視の空気。<br />
  TfRoは<strong>“言葉で明確にされないと不安になる”</strong>し、逆に自分が察してるのに何も返ってこないと虚無を感じる。<br /><br />

  恋愛の場面での落とし穴は、<strong>尽くし方が点数式になりやすいこと</strong>。  
  「あれしてあげたから、これくらい返ってくるだろう」っていう期待が外れると、一気に失望して病む。<br />
  感情や愛情に対して“成果”を求めてしまうクセが、無意識のストレスを増やしてしまうんやね。<br /><br />

  必要なのは、<strong>“感情に点数をつけない練習”</strong>と、<strong>“プロセスを楽しむゆるさ”</strong>。<br />
  完璧じゃなくていいし、伝わらなくても「まぁいっか」って流すゆとりが、むしろ関係性を長く続ける鍵になる。<br /><br />

  TfRoは本来、<strong>論理と優しさが共存してる稀有な存在</strong>。  
  だからこそ、感情や愛情も“考え方”の一部として捉えてしまいやすいけど、  
  時には“感じるだけ”の時間を持って、自分の気持ちも言語化しないまま受け止めてあげてください。<br /><br />

  ロジックじゃなくても、ちゃんと愛されてるよ。  
  点数化できない感情の中にも、大事なものはたくさんあるから。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        感情型（Ce, In, Hu）には、<strong>ちょっと冷たく見られがち</strong>。<br />
        また、直感型（Vi, La）には「堅すぎ」「理屈っぽい」と言われやすいです。<br />
        ロジックを大事にしつつも、<strong>“感情を否定しない姿勢”</strong>が関係性のカギになります。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        TfRoは、<strong>実務とサポートのバランスが必要な仕事</strong>で光ります。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>プロジェクトマネージャー・事務・品質管理</li>
          <li>技術サポート・図書館司書・コンサル</li>
          <li>医療事務・資料作成・効率改善系の職種</li>
        </ul>
        「ちゃんと支える」ことが、最大の強みになるタイプです。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
