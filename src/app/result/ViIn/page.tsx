'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function ViInPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#fcd5f8] via-[#f892e9] to-[#d961f4] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
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
          src="/94EFCE5E-7DC3-4501-9E6E-8F8DD8DFF80A.png"
          alt="ViInキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">ViIn 先読みエンパス</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">気配りしてるつもりが、未来の地雷まで拾ってしんどくなる人。</p>
      </div>

     

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Vi（ヴィジョナリスト） × 裏：In（インサイトフィール）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
         <p>
  「なんか…これ、あとで空気悪くならへん？」——<br />
  ViInタイプの方は、<strong>その場の空気だけでなく“未来の空気”まで先読みしてしまう、直感力に優れたエンパスタイプ</strong>です。<br />
  会話の流れや人間関係の“微妙な兆し”をいち早く察知して、<strong>まだ起こってもいない感情的トラブルすら予防しようとする</strong>。<br /><br />

  それはまるで、<strong>感情の未来予測をしているような感覚</strong>で、時には周囲から「エスパー？」「ちょっと読めすぎて怖い…」と思われることも。<br />
  でも実際には、<strong>「空気が悪くなる前に何とかしたい」「誰かが傷つく前に手を打ちたい」</strong>という、強い共感力と配慮の結果なんです。<br /><br />

  ただしこの“未来先読み力”が高すぎるせいで、<strong>今この瞬間を楽しむことが苦手になりがち</strong>。<br />
  常に「この言葉、あとで変な意味に取られへんかな…」「今笑ってても、あとで空気変わりそう…」と、<strong>無意識に気を張っている状態</strong>が続いてしまいます。<br /><br />

  その結果、<strong>本当は感情豊かなのに、無感情・冷静に見えることも多い</strong>です。<br />
  心の中では共鳴しまくってるのに、あえて“感情を見せない”という手段で自分を守ってるんですね。<br /><br />

  また、ViInタイプの中には、<strong>論理や言語ではなく「感覚」で物事を把握する力が鋭すぎる</strong>がゆえに、  
  他人からすると「なぜそう思ったのか説明できないことが多い」＝<strong>ミステリアス or サイコパス風</strong>に見えることも。<br />
  でもそれも、<strong>情報処理のスピードと“勘の鋭さ”が常人離れしている証拠</strong>とも言えます。<br /><br />

  そんなViInタイプの課題は、<strong>未来の不安をコントロールしつつ、いまこの瞬間の自分にも目を向けること</strong>。<br />
  予測ばかりで疲れてしまったときは、「まだ起こっていない問題にエネルギーを使わなくても大丈夫」と、<strong>意識的に“今”を感じる習慣</strong>をつけることが助けになります。<br /><br />

  ViInの先読み力は、<strong>人の心を守る力</strong>でもあり、<strong>未来を見通すクリエイティブな才能</strong>でもあります。<br />
  その力を、自分自身を安心させるためにも使えるようになれば、<strong>感情に振り回されずに穏やかに生きていける</strong>はずです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            直感・予測・創造・調和。<br />
            未来の可能性を感じながら、<strong>“今この場”の空気も読む器用さ</strong>あり。<br />
            でも、「察しすぎる自分」にしんどくなる瞬間も。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            「今こうしといた方が、あと楽かも…」という予知的な思考。<br />
            気づけば未来展開まで<strong>脳内でシミュレーション</strong>してる。<br />
            感情と未来のバランス取りで、<strong>常に脳がフル回転</strong>。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            感情の微細な揺れに敏感。<br />
            沈黙や一言で「このあとギクシャクしそう」と察して先回り。<br />
            空気を和らげるけど、<strong>裏ではヘトヘト</strong>になってることも多い。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情と未来の空気を同時に読む直感センサー</li>
            <li>場の空気を調整できる“柔らかい緩衝材”</li>
            <li>人の気持ちと雰囲気を察して、先回りできる洞察力</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情の“予兆”を察しすぎて、疲れやすい</li>
            <li>「察しない人」にイライラや無力感を感じる</li>
            <li>自分の感情が後回しになりがち</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「心の未来予報士。察しすぎてしんどい。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    Vi×Inタイプのあなたは、<strong>鋭い感受性と高い先読み力</strong>を持つ、いわば“空気予報士”のような存在です。<br />
    周囲の些細な変化を感じ取って、「これから何が起きるか」を予測するのが得意な一方で、<br />
    <strong>その予測に振り回されて、自分の“今の感情”を置き去りにしていませんか？</strong><br /><br />

    まだ起きてもいないことを想像して、<br />
    「どうせこうなるから」「こう言われるに違いない」と考えすぎてしまう——<br />
    そのせいで<strong>勝手に疲れたり、気持ちが沈んでしまったり</strong><br />
    そんな“予測疲れ”に心当たりはないでしょうか。<br /><br />

    未来を読むのも立派な才能ですが、<strong>予測ばかりしていては、人生の“今”が霞んでしまいます。</strong><br />
    過剰な察知や先回りよりも、<strong>今この瞬間の感情や直感を大切にしてあげる</strong>こと。<br /><br />

    そしてときには、「気づかないふり」をする勇気も必要です。<br />
    すべてを察して対応しようとする姿勢は、自分を消耗させてしまいます。<br /><br />

    <strong>あなたが今、何を感じているか。</strong><br />
    その“本音”を無視せず、ちゃんと味わう時間を持ってください。<br />
    <strong>未来を変える力があるのは、“今の自分”の感情に正直になれたときです。</strong>
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  ViInタイプは、<strong>「このあと空気悪くならへんかな…」と、まだ起きてもない感情を先に察してしまう“未来予報型の恋愛レーダー”</strong>。<br />
  相手が何も言わなくても、その言い方・間・目線の揺れ、全部を敏感に読み取って、<strong>「今この感情がこう動いたら、次こうなるかも」</strong>と勝手に脳内で展開をシミュレーションしてしまう。<br /><br />

  それはある意味、<strong>恋愛における“予防線の天才”</strong>。<br />
  だからこそ、衝突を避けたり、相手の嫌がる話題をうまくスルーしたり、気まずくならないように空気を柔らかく保つのがうまい。<br />
  けどその一方で、<strong>相手に合わせすぎて「自分の感情はどこにあるの？」と分からなくなる瞬間</strong>も多い。<br /><br />

  「わかってくれそうにないから、言う前に察して黙る」  
  「重いと思われたくないから、本音じゃない優しさで返す」  
  ——そうやって、<strong>気づけば“本当の自分”を出せてない恋愛になりがち</strong>やねん。<br /><br />

  でも、もし相手が「そんなに気を遣わなくていいよ」って空気を出してくれたり、  
  察する前に「それってどう思ってるの？」って聞いてくれたりしたら——  
  <strong>ViInは一気に“守られる側”にスイッチできる</strong>。<br />
  気づく側じゃなくて、気づかれる側になれたとき、初めて心から恋に落ちていく。<br /><br />

  感情をぶつけ合う激しい恋じゃなくて、<strong>未来に向けてそっと寄り添っていけるような関係性</strong>を求めてる。  
  目の前の会話より、「この関係がどんな未来をつくっていくのか」を自然と見てる。<br />
  だからこそ、<strong>気づかい型でも共感型でもない、“未来調和型”の愛し方</strong>ができるタイプなんです。<br /><br />

  傍目には「優しい人」で終わってしまいやすいけど、ほんまは<br />
  <strong>“見えない不安の揺れ”を先回りして拾い続けてる、誰よりも繊細な戦略型エンパス”</strong>なんやで。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
<p>
  ViInタイプは、<strong>「次に起こりそうなこと」や「相手が何を求めているか」</strong>を直感的に察知できる、  
  <strong>先読み力と空気読解力のハイブリッド型</strong>。<br />
  言葉にされる前から動けるタイプで、<strong>「今やっといたら、あとで助かるはず」</strong>という未来視点の行動が自然に出せます。<br /><br />

  特に、<strong>チームや人間関係のバランスを見ながら裏方に徹する</strong>のが得意で、  
  周囲からは「いてくれて助かる存在」「気が利く」と高く評価されることも多いです。<br /><br />

  ただしその反面、<strong>自分の疲れや本音を後回しにしてしまいやすい</strong>という弱点も。  
  周りの空気を優先するあまり、「何で私ばっかり…」と心が擦り切れていくリスクがつきまといます。<br /><br />

  だからこそ、ViInには<strong>“気づかいを評価してくれる環境”</strong>や、<strong>ひとりで動ける時間と空間</strong>がとても大事。  
  個人のペースで動ける仕事や、裏方ポジション、サポート職で実力を発揮しやすいです。<br /><br />

  誰かに指示されるよりも、<strong>「この状況、今こうすれば整うな」と自発的に動くのが得意</strong>な、<br />
  未来感覚のある“気配りプロフェッショナル”です。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        ViInは、<strong>自分の繊細さや直感力を否定しない相手</strong>に安心感を持ちます。<br />
        感情や雰囲気を共有しながら、<strong>「先読み気質」を理解してくれる人</strong>と深くつながれる。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuCe（人間力おばけ）</strong>：感情の深い部分までわかり合える</li>
          <li><strong>TfIn（他人軸共感型）</strong>：共に気配りし合える心地よさ</li>
          <li><strong>ViRo（未来型ロジック）</strong>：未来志向と現実志向の最強タッグ</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        ViInは、<strong>相手のリアクションや空気感をめっちゃ観察してる慎重派</strong>。<br />
        「この人、ちゃんと気づいてくれてる？」が判断基準。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>小さな変化や感情に気づいてくれる</li>
          <li>未来の展開を一緒に想像してくれる</li>
          <li>気を遣いすぎてる自分を責めない</li>
          <li>感情を押しつけず、そっと寄り添ってくれる</li>
          <li>「察する」じゃなく「気づく」をしてくれる</li>
        </ol>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  ViInがしんどくなるのは、<strong>「雑な感情処理」「察してくれない態度」</strong>。<br />
  相手の気持ちや空気の変化を“先読み”して察する力が高すぎるぶん、  
  「その繊細さが理解されない」とわかった瞬間、心のシャッターが静かに降りるタイプです。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>感情のズレに無頓着</li>
    <li>「めんどくさい」と繊細さを否定される</li>
    <li>先回りの気配りを当然だと思われる</li>
    <li>未来の心配を「ネガティブ」と切り捨てる</li>
  </ul>

  ViInは、<strong>「こう言ったら傷つくかな」「今はそっとしておこうかな」</strong>と  
  相手の状態を先回りして考えすぎるくらい考えてしまう。  
  だからこそ、自分が繊細に気を配っているのに、相手がそれに気づかない、  
  あるいは当たり前のように受け取っていると、<strong>心のバランスが崩れてしまう</strong>。<br /><br />

  さらに厄介なのは、そのストレスを<strong>表に出せない</strong>ところ。  
  「察してくれなかった」って怒るのも苦手だし、「わかってほしい」と言葉にするのも怖い。  
  結果、どんどん自分の中で“わかってもらえない寂しさ”が膨らんで、  
  <strong>ある日ふっと関係を切ってしまう</strong>…ということも珍しくない。<br /><br />

  また、ViInは<strong>「この先この恋はどうなるか」</strong>を常に予測してしまう癖がある。  
  ちょっとした違和感や、会話のすれ違いから  
  「もう無理かもしれない」「この人はわかってくれないかも」と先に未来の絶望を想像してしまう。<br />
  その未来予測が現実になる前に、<strong>自分で心を折ってしまう</strong>のがこのタイプの落とし穴です。<br /><br />

  本当はめちゃくちゃ繊細で愛情深くて、相手のことを考えて動いてる。  
  なのにその優しさが「わかりにくい」せいで報われにくい。  
  だから必要なのは、<strong>「未来に備えすぎず、今を信じてみる勇気」</strong>。<br /><br />

  「“この恋どうせ終わる”予測で先に心折れるので、<strong>“未来の悲しみはその時に味わえば充分”です</strong>」。  
  そのくらいのスタンスでいてください。  
  気配りも、優しさも、未来への不安も、  
  ちゃんと受け止めてくれる人は、きっと“今”のあなたに気づいてくれるから。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        感情に鈍感なタイプ（Cl, Ro）とは、<strong>温度差にストレスを感じやすい</strong>。<br />
        共感型（Ce, Hu, Tf）とは繋がりやすい反面、<strong>お互いに消耗しがち</strong>なので共倒れ注意。<br />
        “自分だけが気づいてる”という孤独を感じやすいから、<strong>言語化でのコミュニケーション</strong>が鍵。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        ViInは、<strong>感情と未来を読むスキルを活かせる仕事</strong>に最適。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>イベント企画・広報・予測系の分析職</li>
          <li>クリエイター・教育・アート・占い系</li>
          <li>感情と空気の通訳が必要な現場（接客、教職など）</li>
        </ul>
        「その場の“ちょっと先”を読む力」が最大の武器になるタイプです。
      </p>
    </div>

  </div>
</PremiumReveal>

      <PremiumSection />
    </motion.div>
  )
}
