'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function HuRoPage() {
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
          src="/184104BA-42FB-46C1-809A-CD3FFAF8B570.png"
          alt="HuRoキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">HuRo 哲学ヒューマン</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          共感と論理の間で思索する、知性派ヒューマニスト。
        </p>
      </div>

      

      {/* 解説エリア */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Hu（ヒューマニスト） × 裏：Ro（ロジックマインド）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
        
<p>
  「感情だけでは物足りない。でも、理屈だけでは心が満たされないんです」——  
  HuRoタイプの方は、生まれつき<strong>人の気持ちに非常に敏感</strong>で、誰かの心の動きに自然と気づく繊細な共感力をお持ちです。<br /><br />

  ただ、それだけでは終わりません。  
  「なぜこの人はこんな感情になるのだろう？」  
  「この気持ちには、どんな背景や意味があるのだろう？」  
  ——そういった<strong>“感情の奥にある構造”や“理由”まで深く掘り下げようとする思考力</strong>も同時に備わっています。<br /><br />

  たとえば、誰かが涙を流していたとき。  
  ただ寄り添うだけでなく、「この人がここまで追い詰められたのは、何がきっかけだったのか」<br />
  「どのような価値観や経験がこの感情を生んでいるのか」——そういった問いが自然と湧き上がってくるのです。<br /><br />

  それは冷たいわけでは決してありません。  
  むしろ、<strong>「感情に共感するだけで終わりたくない」</strong>という、真面目で温かな知性のあらわれなのです。<br /><br />

  HuRoタイプの方にとって、共感とは“ただ感情を一緒に味わう”ことではなく、  
  <strong>「その感情の意味を理解し、どうすればより良い未来につなげられるかを考える」</strong>という、非常に思慮深い行為なのです。<br /><br />

  その反面、思考が深すぎるがゆえに、<strong>話が少し長くなってしまったり</strong>、  
  相手が感情的になっているときに理屈で返してしまって、  
  「今はそういうことを言ってほしいんじゃないんだけど…」とズレてしまうこともあります。<br /><br />

  しかし根底には、<strong>「本気で相手の力になりたい」「意味のある言葉を届けたい」</strong>という誠実な思いがあります。<br />
  決して上からでもなく、理屈っぽいだけでもありません。  
  感情と論理の両方を大切にしているからこそ、<strong>バランスを探しながら不器用に優しくなろうとしている</strong>のです。<br /><br />

  HuRoの方の本質は、<strong>“優しさ”と“知性”がせめぎ合う、思索型の共感者</strong>。  
  誰かの心にただ寄り添うだけでなく、<strong>その気持ちを言語化し、救いへと導こうとする</strong>——  
  その姿はまるで、小さな日常の中に哲学を宿した“静かな対話者”です。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            感情には意味がある。目の前の感情に寄り添いながら、その裏にある「なぜ？」を探る。
            同情で終わらず、根本にまで潜る“意味オタク”。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            感情をそのまま受け止めるより、構造を理解したい欲求が強い。
            哲学的問いや人間観察が好きで、感情と論理を往復するスタイル。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            表面的な付き合いが苦手で、深い会話・意味ある関係性を求める。
            落ち着いた雰囲気の“癒し系知性派”が多め。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情と理屈の両立ができる“バランサー型”</li>
            <li>悩みを論理的に整理できるカウンセラー力</li>
            <li>背景まで洞察する深い理解力</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>考えすぎて感情を感じそびれる</li>
            <li>論理優位になりすぎて相手を置いていく</li>
            <li>頭で安心したくて感情処理が後回し</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「共感しながら、内面を哲学する知的ヒューマニスト。」</p>
        </div>

        
        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    Hu×Roタイプのあなたは、とにかく思考が深くて繊細。<br />
    世の中や人間関係の“意味”や“本質”を見抜こうとするあまり、<strong>考えることが目的になってしまうこと</strong>、ありませんか？<br /><br />

    正直に言いますね。<br />
    <strong>いくら思索を深めても、「今この瞬間」に生きていなければ、何も変わりません。</strong><br />
    どれだけ感情を分析しても、“実際にその感情を味わう”ことを避けていたら、何の意味もないんです。<br /><br />

    「なぜそう感じたのか」「それは正しいのか」ってすぐに理屈を探そうとする癖、少し手放してみませんか？<br />
    感情は、解釈するものではなく、<strong>まず“ただ感じてあげる”ことが必要</strong>なんです。<br /><br />

    あなたの思考はとても洗練されています。でもそれに偏りすぎると、<strong>現実から切り離されて「心だけ置き去り」</strong>になることがあるんですよ。<br />
    アートに触れるとか、自然の中でぼーっとするとか、<strong>“意味のない体験”があなたのバランスを取り戻してくれます</strong>。<br /><br />

    哲学は頭で考えるものじゃなく、<strong>体と心で“感じながら”生きることの中にあります。</strong><br />
    その深さと優しさを、ぜひあなた自身の“現実”にも注いであげてくださいね。
  </p>
</div>


      </div>

     <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  HuRoタイプは、<strong>恋愛を「ただ好きだから付き合う」では片づけられないタイプ</strong>です。<br />
  相手のことを好きになると同時に、「この気持ちはなんやろ？」「この関係性にはどういう意味があるんやろ？」と、<strong>内面的な問いが無限に湧いてくる</strong>。<br />
  つまり恋愛そのものが、<strong>自己探求の一部</strong>みたいなもんなんです。<br /><br />

  でもそれがクセ者。<br />
  相手は「付き合いたいかどうか」で動いてるのに、HuRoはその前に「愛とは何か？」に答え出そうとしてる。<br />
  <strong>感情の波に乗る前に、全部に意味を持たせようとするから</strong>、初期段階で妙に難解になる恋愛多め。<br />
  「この人と一緒にいたい…でも、それって自分の寂しさの投影じゃないか？」とか、<strong>自分に心理学的セルフツッコミ</strong>を入れがち。<br /><br />

  しかも、<strong>“感情”というより“感情の構造”を語り出す</strong>から、相手は「今どう思ってんの？」って聞いてるのに、「愛とは本質的に相互投影で〜」とか言い始める。<br />
  結果、「で、結局好きなん？嫌いなん？」ってなる。<br />
  <strong>感情を語るのは苦手なくせに、愛については3時間語れる</strong>という矛盾の塊。<br /><br />

  でも、それだけに本気の恋愛はめちゃくちゃ誠実で深い。<br />
  表面的なラブラブにはハマらへんけど、<strong>価値観や人生観を語り合える関係</strong>にはとことんのめり込む。<br />
  「ただ一緒にいる」じゃなくて、「一緒に生きて、考えて、深め合える相手」が欲しい。<br />
  その分、軽いノリとかテンションでグイグイ来られると即アウト。<br /><br />

  あと、<strong>相手には感情を求めるくせに、自分はあんまり感情を出さん</strong>のも特徴。<br />
  理屈で守られた鎧の中に、実は繊細で不安定な感情があるけど、<strong>それを見せるのが怖いから「考え」で包み込んでる</strong>んよな。<br />
  結局、「感情を共有したいけど、深すぎて共有できる相手がいない」って孤独に落ち込みやすい。<br /><br />

  HuRoタイプが恋愛で大切にすべきことは、<strong>ちゃんと感情を言葉にして出すこと</strong>。<br />
  論理で相手を守ろうとするのも大事やけど、<strong>たまには「不安やねん」「寂しいねん」ってシンプルに言ってもええ</strong>。<br />
  自分の内面に付き合ってくれるパートナーは貴重やけど、<strong>その人もちゃんと感情があるってこと、忘れたらあかん</strong>。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        感情と論理のバランス感覚があるHuRoは、<strong>対人サポートや教育、企画系の仕事</strong>で力を発揮する。<br />
        誰かの気持ちをくみ取りながら、課題の構造を言語化して解決へ導くのが得意。<br /><br />
        ただし、<strong>「正しさ」や「納得」にこだわりすぎて</strong>動けなくなることもあるので、<br />
        素直な感覚やフィーリングに従う柔軟さも意識すると◎。<br />
        自分のペースを守れたときに、最大の知的パフォーマンスを発揮できる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        HuRoは「自分の思考を否定せず、感情にも共感してくれる人」に安心感を抱く。<br /><br />
        相性がいいタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>ClCe（冷静エンパス）</strong>：感情を整理しながら支えてくれる論理的な共感型。</li>
          <li><strong>LaRo（理論派アイドル）</strong>：理論で会話が通じる＆情熱も持ち合わせてる知的タイプ。</li>
          <li><strong>StCe（真正直エンパス）</strong>：感情に誠実で、価値観を共有しやすい安定系。</li>
        </ul>
        “考える自分”を受け止めてくれる関係が、HuRoの思考と感情をいいバランスで開放してくれる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        HuRoは、<strong>「浅いノリ」「テンプレ会話」では心を開かない</strong>慎重派。<br />
        関係性に「意味」を感じられる相手と、徐々に信頼を深めていく。<br /><br />
        🔽 HuRoが親密になるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>会話に深みがある（価値観・哲学的テーマなど）</li>
          <li>感情も思考もフラットに受け止めてくれる</li>
          <li>意見の違いを“知的対話”として楽しめる</li>
          <li>「なぜそう思うのか？」を投げかけてくれる</li>
          <li>考えすぎているときに、そっと感情に寄り添ってくれる</li>
        </ol>
        <strong>共に考え、共に感じる姿勢</strong>が、HuRoの心を開くカギになる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  HuRoは<strong>「感情を無視されること」も「考えすぎやと茶化されること」</strong>も、どっちもめちゃくちゃ苦手。<br />
  心の奥でちゃんと「なぜ好きなのか」「この関係に意味があるのか」を考えてるからこそ、<br />
  それをバカにされたり、軽くあしらわれたりすると、<strong>瞬間的に“この人とは深く分かり合えない”と判断して心を閉じる</strong>傾向があります。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>「そんなの気にしすぎ」と感情を軽視する</li>
    <li>深い話を「めんどくさい」で片づける</li>
    <li>論理を押しつけて正解を迫ってくる</li>
    <li>「今を楽しもうよ」と内省の時間を奪う</li>
  </ul>

  HuRoは<strong>「何のためにこの人と一緒にいるのか」「この愛はどこへ向かっているのか」</strong>を<br />
  つい考えすぎてしまうタイプなので、<strong>“浅さ”や“雑な関わり”が何よりもしんどい</strong>のです。<br /><br />

  そして一番やりがちなのが、<strong>恋愛そのものの意味を考えすぎて、自分で自分を苦しめてしまうこと</strong>。<br />
  「こんなに感情に振り回されるなら、恋なんていらん」「何のために好きなんかな」って<br />
  気づいたら哲学モード突入→誰にも言えず→自己完結で病む、って流れ、完全にHuRoのテンプレです。<br /><br />

  だから大事なんは、<strong>“意味なんかなくても愛されていい”って、自分に許可を出すこと</strong>。<br />
  深く考える力はHuRoの武器ですが、<strong>すべての感情に理由を求めすぎると、愛が窮屈になってしまう</strong>。<br />
  「考えすぎやけど、それでも幸せでええねん」って、自分の中にもう一人“肯定する自分”を育ててあげる。<br />
  それができたとき、HuRoの恋愛は<strong>意味から感情へ、理屈から温度へ</strong>と少しずつ変わっていきます。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        感覚型（<strong>Hu, Ce</strong>）と関わるときは、<strong>理屈っぽくなりすぎて距離ができないように注意</strong>。<br />
        思考型（<strong>Ro, Cl</strong>）といると、逆に「感情を感じすぎてる自分」が浮いてしまって自己否定感につながることも。<br /><br />
        大事なのは、「感じてもいい」「考えてもいい」と自分を肯定できるマインド。<br />
        思考と感情、両方に居場所をつくることで、人間関係もグッとラクになる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        HuRoの強みは、“気持ち”と“意味”を両方見れること。<br />
        だから、<strong>人の想いを翻訳したり、構造を整理する仕事</strong>が天職級にフィットする。<br /><br />
        💼 向いてる職種の例：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>心理カウンセラー・教育者・家庭教師</li>
          <li>編集者・ライター・哲学/人文系研究職</li>
          <li>面談サポート・1on1コーチング・企画支援</li>
        </ul>
        人の「感情」と「構造」の間に立てるHuRoは、<strong>“知的で優しい橋渡し役”</strong>として重宝される存在。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
