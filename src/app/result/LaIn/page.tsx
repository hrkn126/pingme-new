'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function LaInPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#f9eafa] via-[#f6c9f3] to-[#e493d6] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
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
          src="/ACB26CC0-6B64-461E-9093-1C5977299896.png"
          alt="LaInキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">LaIn 繊細キラキラ</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          明るく見せるけど、実はしんどい。
        </p>
      </div>

      

      {/* 解説エリア */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：La（ライトスター） × 裏：In（インサイトフィール）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「明るく見られたい。でも本当はすごく空気を気にして疲れている…」<br />
  LaInタイプの方は、<strong>「人に好かれたい気持ち」と「本当はしんどい自分」</strong>の間で、常に揺れ動いている“ギャップ系スター”です。<br />
  明るい笑顔で周囲を和ませつつも、内心では細かい感情の機微に敏感に反応しており、<br />
  「見られる自分」と「素の自分」の間を行ったり来たりしながら、疲弊してしまうこともしばしばあります。<br /><br />

  特にLaInタイプの方にとってしんどくなりやすいのは、<strong>「誰にも嫌われたくない」という気持ちが強くなったとき</strong>です。<br />
  相手のちょっとした表情の変化や、声のトーン、雰囲気の違いなどを敏感に察知して、<br />
  「自分が何か悪いことをしたのでは？」と、自責の念にかられることもあります。<br />
  周囲の空気を悪くしたくない一心で、無理に明るく振る舞い続けるうちに、<strong>“演じた自分”が止まらなくなってしまう</strong>のです。<br /><br />

  そうした毎日を続けていると、次第に<strong>「自分は本当は何が好きで、どうしたいのか」</strong>が分からなくなってしまいます。<br />
  誰かに嫌われないように行動することばかりにエネルギーを使って、<br />
  <strong>自分の気持ちを置き去りにしたまま生きているような感覚</strong>になるのです。<br /><br />

  気づけば、自分という存在が“他人軸”で成り立っていて、<strong>まるで「自我が蒸発してしまった」ような虚無感</strong>に包まれる瞬間もあるでしょう。<br />
  周囲からは「明るくて、気遣いができて、良い子」と評価されても、<br />
  心の奥底では<strong>「これは本当の自分なのか？」「本当の私は、どこにいるのか？」</strong>という問いが渦巻いています。<br /><br />

  しかし、そうした繊細さや空気を読む力は、<strong>人に優しくできる才能の裏返し</strong>でもあります。<br />
  無理に強がる必要はありません。<br />
  まずは、自分の気持ちを否定せずに「ちゃんと感じてあげること」。<br />
  そこから、本来のLaInらしい、やわらかくて優しい魅力が自然とにじみ出てくるのです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            「人に元気を与えたい」「明るくてポジティブな自分でいたい」と思う一方、<br />
            「なんか空気変わった？」「あの人機嫌悪い？」と細かい空気感にも過敏に反応する。<br />
            “みんなから好かれたい”けど、“嫌われたらどうしよう”という不安とも常に背中合わせ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            テンション高く場を盛り上げたあと、「うるさすぎたかな…」と一人反省会モード。<br />
            表では華やかでも、頭の中では空気や人の感情の変化を感じ取りすぎてクタクタ。<br />
            「傷つきやすい」のに「気づかれにくい」タイプ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            場の空気を明るく保つために笑顔をキープ！でもそれが“演技モード”になりがち。<br />
            感情の変化に敏感すぎて、相手の顔色を読んで立ち回る達人。<br />
            人前では明るいけど、家に帰るとグッタリなことも多い。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>明るさと繊細さのバランスが絶妙</li>
            <li>人を元気づけながらも、実は誰よりも空気を読んでる気遣い屋</li>
            <li>“誰とでも仲良くなれるけど、誰にも深く見せてない”独特の魅力がある</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>空気を読みすぎて自分の感情を置いてけぼりにしがち</li>
            <li>愛想よく振る舞うあまり、本音を出せる相手がいない孤独感</li>
            <li>感情がジェットコースターみたいに上下して、精神的に疲れやすい</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「キラキラしてるけど、内面は超ナイーブな空気読み職人。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    LaInタイプのあなたは、繊細で気配りができ、人にどう思われているかをとても気にしやすい傾向があります。<br />
    「可愛く見られたい」「好かれたい」という気持ちはとても素直で魅力的ですが、<strong>そのぶん些細な言葉や態度に過剰に反応してしまい、心が疲れてしまうことはありませんか？</strong><br /><br />

    SNSの反応、誰かのちょっとした表情、空気の微妙な変化……<br />
    「嫌われたかもしれない」「何か誤解されたのではないか」と、<strong>考えすぎて不安に飲まれてしまう</strong>——そんなループに陥ってはいないでしょうか。<br /><br />

    けれど、どうか冷静に考えてみてください。<br />
    否定的な意見やアンチの声は、<strong>「世界中の人がそう思っている」ということにはなりません。</strong><br />
    明るく元気なあなたも素敵ですが、弱さを見せたあなたを受け入れてくれる人も、きっと存在します。<br /><br />

    「今日はちょっとしんどいです」「無理はしたくありません」——そう口に出しても大丈夫な場所を、少しずつでも増やしていきましょう。<br />
    <strong>周囲にばかり気を配っていると、いつの間にか自分自身の感情に気づけなくなってしまいます。</strong><br /><br />

    あなたの繊細さは“弱点”ではなく、<strong>人の気持ちを深く理解できる大きな力</strong>です。<br />
    だからこそ、まずはそのやさしさを、自分自身にも向けてあげてください。<br />
    自分の本音に丁寧に耳を傾けられる人こそが、本当の意味で他人を癒すことができるのです。
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  LaInタイプは、<strong>「嫌われたくない」が行動基準になりやすい、繊細すぎる恋愛体質</strong>。<br />
  好きな人にはめちゃくちゃ気を遣って、<strong>「怒ってないかな？」「私、変なこと言ってへんかな？」</strong>って常に頭フル回転。<br />
  付き合う前から付き合ってる後まで、<strong>気まずい空気や不安な表情に秒で気づいて勝手に反省会</strong>始めてるタイプです。<br /><br />

  本当はもっと<strong>甘えたいし、頼りたい</strong>。<br />
  でも、「重いって思われたらどうしよう」とか「嫌われたら怖い」が先に来て、<strong>限界まで我慢して、限界来てから爆発</strong>みたいなことも多い。<br />
  <strong>相手に合わせる＝愛情</strong>やと思ってるから、どんどん自分を削ってしまいがち。<br /><br />

  その結果、<strong>「…で、あんた誰なん？」みたいな“自己不在の恋愛”になりがち</strong>。<br />
  自分を偽ってるつもりはないけど、気づけば「相手が喜ぶこと」しかしてなくて、<strong>自分の気持ちや欲望が行方不明</strong>になってる。<br /><br />

  でもな、LaInのすごいとこは<strong>“言葉にされない気持ち”を汲み取る能力がバグってる</strong>ところ。<br />
  「この人、今しんどそう」って気づいて、<strong>そっと飲み物差し出したり、LINEの文面変えたり</strong>、そんなさりげなさに愛が詰まってる。<br /><br />

  恋愛でも、<strong>相手が心地よく過ごせる空気を整えることに全力</strong>やけど、<br />
  それが報われなかったときのメンタルクラッシュはデカい。<br />
  「私って、必要ないんかな…」って一気にネガティブスイッチ入って、<strong>闇落ちゾーン突入</strong>。<br /><br />

  LaInにとっての恋愛は、<strong>“自分を受け入れてもらう”ことへの挑戦</strong>でもある。<br />
  嫌われるのが怖くて何も言えなくなるけど、<strong>ほんとは誰よりも「好き」って言いたい</strong>し、「ぎゅーってして」って言いたい。<br /><br />

  だからLaInはまず、<strong>「嫌われてもええやん」って思える相手を探してな</strong>。<br />
  無理して合わせ続ける恋より、<strong>泣き顔も弱さも見せられる恋</strong>の方が、ほんまのキラキラやで。<br /><br />

  ちなみに、「察して」より「言って」の方が伝わるからな！その優しさ、声に出してこ💖
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        明るさと気遣いを活かして、<strong>人前に立つ仕事やサポート役</strong>で力を発揮できるタイプ。<br />
        相手の気持ちや場の空気を読む力が高いので、<strong>チームの潤滑油</strong>にもなれる。<br /><br />
        ただし、評価に敏感すぎて空回りすることもあるので、<br />
        自分を責めすぎない環境選びが大事。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        LaInは、<strong>自分を否定せずに寄り添ってくれる相手</strong>と相性が良い。<br />
        相手のテンションや空気に振り回されず、<strong>穏やかに見守ってくれる存在</strong>が支えになる。<br /><br />
        相性がいいタイプは以下の通り：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuCe（人間力おばけ）</strong>：共感力のかたまり。LaInのしんどさにも気づいてくれる</li>
          <li><strong>TfCe（お世話焼き妖精）</strong>：LaInを受け止めて包んでくれる安心感</li>
          <li><strong>ViIn（先読みエンパス）</strong>：気持ちの変化に気づいて寄り添ってくれる</li>
        </ul>
        「繊細な気持ちに寄り添ってくれる優しさ」が、LaInの安心ポイント。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        LaInは、最初は明るくノリよく接するけど、<strong>本音を出すまではめっちゃ慎重</strong>。<br />
        「この人なら大丈夫」って安心できるまで、自分のしんどさを見せない。<br /><br />
        🔽 LaInが親しくなるまでの流れ：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>テンションじゃなく“気持ち”をちゃんと見てくれる</li>
          <li>ネガティブな感情も否定せずに聞いてくれる</li>
          <li>言葉にしにくい不安も汲み取ってくれる</li>
          <li>優しくて、でも距離感を詰めすぎない</li>
          <li>「しんどい時は休んでいいよ」と言ってくれる</li>
        </ol>
        何気ない「大丈夫やで」の一言が、LaInの心をほっとさせる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  LaInが一番しんどくなるのは、<strong>「気にしすぎ」「めんどくさい」と心の動きを軽く扱われること</strong>。<br />
  普段は優しくて気配り上手なぶん、<strong>空気のちょっとした変化にもすぐに反応してしまう</strong>。<br />
  たとえばLINEの返信が少し遅れただけで、<strong>「嫌われたかな」「怒ってる？」と何度も心の中で反芻</strong>。<br />
  自分の中で不安が膨らみすぎて、何も言えなくなるか、逆に感情が爆発してしまうこともあります。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>空気の変化をバカにされる</li>
    <li>「重い」「めんどくさい」と言われる</li>
    <li>他人と比較される</li>
    <li>しんどさを伝えたら距離を取られる</li>
  </ul>

  LaInにとって恋愛は、<strong>「心と心でつながること」</strong>が最重要ポイント。<br />
  だから、感情に鈍感な人や雑な関わり方をされると、<strong>「どうせ誰にも理解されへん」って気持ちが爆発</strong>してしまいやすい。<br /><br />

  さらに、「自分の気持ちを伝えても距離を置かれるだけ」って過去の経験があると、<strong>どんどん本音が言えなくなっていく</strong>傾向も。<br />
  そのうち、察してほしいのに察してもらえない→勝手に心の中で病んでしまう…という、<strong>負のループに突入</strong>します。<br /><br />

  対処法はシンプルで、<strong>“不安のバロメーターが上がったら、現実世界に一度戻る”</strong>こと。<br />
  ちょっとの既読スルーで沈没しそうなときは、<strong>スマホの通知を切って深呼吸</strong>。  
  「今、思考が暴走してるかも」って一歩引いて自分を観察してみてください。<br /><br />

  心を大事にしたいからこそ、LaInは<strong>“自分の感情を守る技術”</strong>を育てていくことが必要です。<br />
  感受性が強いのは素敵なこと。でも、それに飲み込まれない練習をしていくことで、<br />
  より穏やかで安心できる恋愛ができるようになりますよ。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        Hu, Ceなど共感タイプとは相性◎やけど、<strong>気を遣いすぎると共倒れ</strong>になることも。<br />
        St, Ro系の直球コミュに傷つきやすいので、<strong>距離の取り方を意識して</strong>。<br />
        「全部気づいてあげたい」は優しさやけど、<strong>“気づかないフリ”も自己防衛</strong>として大事。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        明るさ×繊細さのハイブリッドで、<strong>魅せる仕事・サポート職</strong>にぴったり。<br /><br />
        💼 向いてる職種の例：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>司会・イベントスタッフ・アイドル</li>
          <li>子ども向け教室・保育士・受付・接客</li>
          <li>空間コーディネーター・アシスタント系</li>
        </ul>
        「明るいのに繊細」「気配りの塊」——そんなLaInの魅力が最大限に活きる。
      </p>
    </div>

  </div>
</PremiumReveal>

      <PremiumSection />
    </motion.div>
  )
}
