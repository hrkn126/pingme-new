'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function LaShPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#fbe7ee] via-[#f4b1c4] to-[#d47499] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
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
          src="/A3835E41-7D09-4313-8A35-F60D4917AE93.png"
          alt="LaShキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">LaSh 病みかわ芸人</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          明るさは、最大の防衛本能。
        </p>
      </div>

      

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：La（ライトスター） × 裏：Sh（シャドウクリティック）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
         <p>
  「明るい自分でいなきゃ。でも本当はとても苦しい…」<br />
  LaShタイプは、<strong>笑いや明るさで人を惹きつけながら、内面には深い自己否定や孤独感</strong>を抱えています。<br />
  「人に愛されたい」という気持ちと、「本当の自分を見せるのが怖い」という気持ちの間で、<br />
  日々揺れながら生きている<strong>“ギャップのかたまり”</strong>のような存在です。<br /><br />

  またこのタイプは、<strong>本当は目立ちたいのに、堂々と目立つことに強い不安や抵抗感</strong>を持っています。<br />
  「人前に立って注目されたい」という願望は確かにありますが、<br />
  実際に注目されると「滑ったらどうしよう」「嫌われたらどうしよう」と怖くなってしまう傾向があります。<br /><br />

  そのため、<strong>安心できる内輪の場や少人数の環境ではテンション高めにふるまえたり、“イキれる”自分でいられる</strong>一方、<br />
  不特定多数の前では自信を失いやすく、存在感を消してしまうこともあります。<br /><br />

  <strong>笑いをとることで場に受け入れてもらおうとしたり、空気を読んで明るくふるまうことで「好かれる自分」を演じようとする</strong>ことも多く、<br />
  無意識に“いい人”や“面白い人”の仮面をかぶってしまいがちです。<br /><br />

  けれどその分、<strong>他人の目線や空気の変化に異常に敏感で、些細な一言で一日中落ち込むような繊細さ</strong>を持ちあわせています。<br />
  自分では「なんでこんなに弱いんだろう」と責めてしまうけれど、<strong>実はそれだけ他人の感情を察しやすく、共感能力が高い</strong>という裏返しでもあります。<br /><br />

  自分を好きになれず、それでも人に好かれたいという矛盾を抱えて、<br />
  明るさの仮面をかぶって生き抜こうとするその姿に、LaShタイプならではの繊細さと強さが宿っています。<br />
  <strong>「本当は誰よりも“本音でつながれる誰か”をずっと探している」</strong>──<br />
  そんな思いを、笑顔の奥にそっと隠しているのです。
            </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            「楽しませたい」「面白いと思われたい」が行動の原動力。<br />
            でも、誰かの一言や無視に敏感で、<strong>一人になった瞬間にメンタルが落ちる</strong>ことも多いです。<br />
            明るさ＝本音ではなく、むしろ<strong>明るさこそが“自己防衛”</strong>になっているケースが多く見られます。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            人を笑わせたあと、自分の言動を何度も思い返しては、<br />
            「やりすぎたかも」「滑ったかも」と不安になることがよくあります。<br />
            <strong>外ではムードメーカー、内では自己嫌悪との戦い</strong>をしているようなタイプです。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            ムードメーカーっぽく振る舞いがちですが、それは<strong>努力でつくった明るさ</strong>であることも多いです。<br />
            ネタにされることで安心したり、「おもしろい人」ポジションに逃げ込むことで、<br />
            本音や弱さを見せずにすむようにふるまいます。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>周囲を和ませるユーモア力と場づくり能力</li>
            <li>明るさと繊細さの絶妙なバランス</li>
            <li>「笑わせる」と「癒す」を両立できるレアな才能</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>“明るい自分”を演じ続けてしまい、限界を見せられない</li>
            <li>ネタキャラ化されることで安心しつつ、本音を見てもらえない寂しさもある</li>
            <li>自己肯定感が低く、「自分って結局なんなんだろう」と悩みやすい</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「笑ってるけど、心では泣いてる“エンタメ系さみしがり屋”。」</p>
        </div>

        
        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    La×Shタイプのあなたは、どんなときでも場を明るくしたり、人を笑わせたりする力にとても長けていらっしゃいます。<br />
    その笑顔やユーモアに、救われている人もきっとたくさんいるはずです。<br /><br />

    ですが、もしその“明るさ”が、<strong>「本音を隠すため」や「自分のしんどさをごまかすため」になっているとしたら</strong>、少し立ち止まって考えてみてください。<br /><br />

    誰かにツッコまれること、ネタにされることは慣れていても、<strong>「本音で甘える」「真面目に弱音を吐く」ことには慣れていない</strong>のではありませんか？<br />
    本当はもっと助けてほしいのに、「笑ってるから大丈夫だよね」と誤解されてきたご経験はありませんか？<br /><br />

    「笑われている」のではなく「笑わせている」。<br />
    その自覚が持てたとき、<strong>あなたの“明るさ”は武器ではなく、強くてやさしい魅力</strong>に変わっていきます。<br /><br />

    そして、“ネタにされる自分”だけがあなたではありません。<br />
    誰かにちゃんと心を見せて、真剣に受け止めてもらえる——そんな経験も、どうか大切にしてください。<br /><br />

    傷ついてきた過去ごと、あなたをそのまま愛してくれる人は、きっといます。<br />
    だからこそ、<strong>「ちゃんと傷ついた」自分のことも、笑い飛ばす前に一度しっかり見つめてあげてください</strong>ね。
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  LaShタイプは、<strong>「愛されたいのに素直になれない」</strong>という<strong>矛盾の塊</strong>です。<br />
  明るく振る舞ってはいるものの、その裏では「嫌われたらどうしよう」「重いって思われたらイヤやな…」という不安が常に頭をよぎっています。<br />
  そのせいで本音を見せることができず、冗談っぽくごまかしたり、わざと茶化してしまうクセがあります。
</p>

<p>
  また、自分に自信が持てないからこそ、<strong>相手のリアクション一つで情緒がジェットコースター</strong>。<br />
  LINEの返信が遅いだけで「もう冷められたかも…」と闇落ち寸前。<br />
  でも、「重いと思われたくない」というブレーキが発動して、結果的に<strong>“何も言えずに病んで消える”</strong>なんてことも日常茶飯事です。
</p>

<p>
  そしてなにより、<strong>「わたしなんて…」と言いつつ、実はめちゃくちゃ構ってほしい</strong>。<br />
  それに気づいてくれる人には、愛情を全力でぶつけます。が、<strong>“普通の恋愛”では物足りない</strong>のもこのタイプの特徴。<br />
  ちょっと波乱があるくらいのドラマティックな恋のほうが燃えるし、<strong>突き放される→泣く→また好きになる</strong>という謎のループに自ら突っ込んでいきがちです。
</p>

<p>
  でも、ちゃんと内側を見てくれる人には、<strong>想像以上に一途で、誠実で、ピュアな愛情</strong>を注ぐことができます。<br />
  笑顔の裏の繊細さと葛藤まで含めて受け入れてくれる相手が現れた時、LaShタイプの恋は、<strong>一生モノの深い繋がり</strong>になります。
</p>

       </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        明るさと気配り力、そしてちょっとした「自虐ネタ」やユーモアを武器に、<strong>場を和ませる仕事・人前に立つ仕事</strong>に適性があります。<br />
        芸人やイベントスタッフ、保育系、SNS系の発信など、<strong>人の気持ちを軽くする仕事</strong>が向いています。<br />
        ただし、自分の感情を抑えて頑張りすぎない環境づくりがカギになります。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        LaShは、<strong>「ふざけていても内面をちゃんと見てくれる」相手</strong>に心を開きます。<br />
        いじるだけで終わらず、時に真面目に向き合ってくれる人との関係性が安心の土台になります。<br /><br />
        相性が良いタイプは以下の通り：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuIn（共感マスター）</strong>：ネタの裏のしんどさに気づいて寄り添ってくれる</li>
          <li><strong>TfCe（お世話焼き妖精）</strong>：無理してる時にそっと支えてくれる</li>
          <li><strong>ViCe（理想共感派）</strong>：テンションに流されず、ちゃんと心を見てくれる</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        LaShは、<strong>最初はふざけて距離を詰めるけど、本音は慎重に隠すタイプ</strong>です。<br />
        「ネタキャラでいれば嫌われない」という安心感の裏で、<strong>本当は“素”を見せるのが怖い</strong>と感じています。<br /><br />
        🔽 LaShが心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>ふざけてる時も本気で向き合ってくれる</li>
          <li>無理に明るくしなくていい空気感を作ってくれる</li>
          <li>「ネタにしなくても好かれてる」と感じさせてくれる</li>
          <li>弱音も“ちゃんと受け止めて”くれる</li>
          <li>笑いだけじゃない関係性を築ける</li>
        </ol>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  LaShが一番つらくなるのは、<strong>「ふざけて流される」「“面白い人”で終わる」</strong>関係性です。<br />
  本当はわかってほしいのに、ネタにされて終わる時、心の中では静かに崩れていってます。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>本音で話した時に冗談で流される</li>
    <li>ずっと「おもろい人」としてだけ扱われる</li>
    <li>急に冷たくなる、無視される</li>
    <li>「何が面白いかわからん」と否定される</li>
  </ul>

  LaShの内面は、<strong>「笑わせる＝愛される手段」</strong>という深いセルフルールでできている。<br />
  だからこそ、ふざけることで繋がりを保とうとするし、ツッコミやボケで愛情の代替をしがち。<br /><br />

  でもその反動で、<strong>「ほんとはちゃんと見てほしい」「甘えてもいい存在でいたい」</strong>という欲求が抑えられていく。<br />
  結果、<strong>ネタに逃げすぎて本音が言えない</strong> → <strong>誰にも頼れない</strong> → <strong>病みモードに突入</strong>というテンプレ地獄。<br /><br />

  しかもこのタイプ、<strong>病んでる自分を“可愛い”と思ってしまう自己演出癖</strong>まで抱えてたりする。<br />
  つまり、「寂しい」じゃなくて「闇かわ」って名前をつけて安心しようとしてるけど、<strong>その時点でもうだいぶ重い</strong>。<br /><br />

  自分で言う「闇かわ」はまだ笑えるけど、<strong>他人から見たらただの“取扱注意人物”</strong>になってる可能性、大いにあります。<br /><br />

  対策は明確。<strong>「笑わせなきゃ愛されない」って思い込みを、一回ぶっ壊すこと</strong>。<br />
  ほんとの自分を見てほしいなら、まず自分がその「ほんと」をちゃんと認めてあげないと。<br /><br />

  “萌え”と“病み”は紙一重。でも、<strong>誰かに救ってもらう前に、自分の重さにはちゃんと気づいてあげてください</strong>。<br />
  自分で自分を笑わせられるくらいになれたら、LaShの恋愛はもっとラクに、もっと深くなる。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        共感型（Hu, Ce, In）とは気が合いますが、<strong>お互いに気を遣いすぎて共倒れ</strong>することも。<br />
        論理型（Cl, Ro）に「いじり」として扱われると<strong>深く傷つくこともある</strong>ので注意が必要です。<br />
        「ふざけたキャラ」だけで扱われないよう、<strong>安心して本音を語れる関係</strong>を大切にしてください。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        明るさと闇の両方を“ネタ化”できるLaShタイプは、<strong>表現系・発信系</strong>の仕事に強い適性があります。<br /><br />
        💼 向いている職業の例：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>芸人・YouTuber・SNSコンテンツ制作</li>
          <li>声優・イベント司会・エンタメ企画</li>
          <li>幼児教育・福祉系・癒しと笑いのある分野</li>
        </ul>
        「明るくてふざけてるのに、なぜか心に残る」——それがLaShの魅力です。
      </p>
    </div>
  </div>
</PremiumReveal>
      <PremiumSection />
    </motion.div>
  )
}
