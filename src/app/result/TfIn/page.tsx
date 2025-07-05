'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function TfInPage() {
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
          src="/B8F89B10-72B8-405F-ABC3-D6B1B540CD08.png"
          alt="TfInキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">TfIn 他人軸共感型</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">人のために動ける。でも「私」はどこにいったんやろ…</p>
      </div>

     
      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Tf（他人ファースト） × 裏：In（インサイトフィール）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「空気が悪くなったら、自分のせいな気がしてしまうんです…」——<br />
  TfInタイプの方は、<strong>周囲の感情や場の空気にとても敏感で、つねに“人の気持ち”を優先して動く</strong>傾向があります。<br />
  誰かが不機嫌そうだったり、言葉のトーンが少し変わっただけでも、<strong>「自分のせいかも…」と無意識に受け取ってしまう</strong>ことが多いのです。<br /><br />

  その結果、<strong>気づけば自分の本音がどこにあるのか分からなくなってしまう</strong>——  
  まるで<strong>「私って誰だっけ？」</strong>という感覚に陥ることも少なくありません。<br />
  これは、他人を優先しすぎるあまり<strong>“自分を置き去りにしてしまう”</strong>状態とも言えます。<br /><br />

  また、「嫌われたくない」「誰かを傷つけたくない」という気持ちが先立つため、  
  自分の意見や感情を表に出すことが難しく、<strong>つい我慢を重ねてしまう</strong>のです。<br />
  その結果、<strong>周囲からは「都合の良い人」と受け取られてしまうこともあり、心の疲弊に繋がります</strong>。<br /><br />

  けれど、本来のTfInタイプは、<strong>他者の気持ちに深く寄り添える、非常に共感力の高い存在</strong>です。<br />
  だからこそ、その力を“自分を犠牲にする方向”ではなく、<strong>“自分も大切にしながら発揮できる環境”でこそ輝く</strong>のです。<br /><br />

  大切なのは、<strong>「あなた自身は、今どう感じているか？」</strong>という問いに丁寧に向き合うこと。<br />
  そして、あなたの本音を汲み取ろうとしてくれる人と出会えたとき、  
  はじめて<strong>安心して“素の自分”を出すことができる</strong>のです。<br /><br />

  TfInタイプの優しさは、<strong>決して都合の良さではなく、深い思いやりからくるもの</strong>です。  
  その尊い共感力が、<strong>あなた自身を大切にする方向に向かうこと</strong>を、どうか忘れないでください。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            調和・共感・思いやり。<br />
            「みんなが心地よい空気」が大事やから、<strong>つねにムードを読み取って行動</strong>。<br />
            でも、<strong>気を遣いすぎてしんどくなることに気づくのが遅い</strong>。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            「これ言っていいかな？」を100回ぐらい考えてから発言するタイプ。<br />
            相手の気持ちを先に予想して、<strong>自分の意見を引っ込める</strong>ことが多い。<br />
            “感情のレーダー”張りすぎて、神経がすり減ることもしばしば。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            人の感情に寄り添って行動できるけど、<br />
            自分がつらくなっても「大丈夫」と言いがち。<br />
            <strong>共感しすぎて、自分が感情を吸収してしんどくなる</strong>のがデフォ。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>空気と人の気持ちを察知するアンテナ力</li>
            <li>周囲を気遣う優しさと配慮の達人</li>
            <li>争いを避けて調和を作れるムードメーカー</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>自分の感情や意見を見失いやすい</li>
            <li>人の感情に振り回されて疲れやすい</li>
            <li>「嫌われたくない」「波風立てたくない」が強すぎて自己犠牲的に</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「“私”を見失いやすい“気配り特化型”共感屋さん。」</p>
        </div>

        

       <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    Tf×Inタイプのあなたは、<strong>空気を読む力、人の痛みを理解する力</strong>に長けていて、<br />
    “人の気持ち”に誰よりも寄り添える、心のナビゲーターのような存在だと思います。<br /><br />

    けれども、その共感力——<strong>時に自分の人生を他人に明け渡してしまうほど</strong>になっていませんか？<br />
    誰かの気持ちを優先しすぎて、「私、何がしたいんだっけ？」と自分がわからなくなる。<br />
    そんな日々が積み重なると、<strong>“いい人”を演じて疲れ切ってしまいます。</strong><br /><br />

    まず大前提として、<strong>あなたの人生の主人公は“あなた自身”です。</strong><br />
    他人の感情に反応する前に、<strong>「自分は今、どう感じているか」</strong>を丁寧に拾ってみてください。<br /><br />

    また、“断る”ことに罪悪感を持ってしまいがちですが、<strong>「NO」は自分を守るための大切な言葉</strong>です。<br />
    言葉にしなくても、「今は無理かも」と感じたら、<strong>無理に察して動こうとしない</strong>のも立派な優しさです。<br /><br />

    そして、自分と他人の間に“心の境界線”を引くこと。<br />
    <strong>バウンダリーがない共感は、いずれ破綻します。</strong><br />
    ちゃんと線を引いてこそ、本当に相手の力になれるのです。<br /><br />

    共感力のあるあなたは、人を癒す力も、人に流されて消耗する危うさも、どちらも持ち合わせています。<br />
    だからこそまずは、<strong>「自分を尊重する共感」</strong>を、今日から始めてみてはいかがでしょうか。
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  TfInタイプは、<strong>「この言い方で相手が傷ついたらどうしよう」</strong>って、  
  まだ起きてもない相手の感情まで想像してしまう、“共感先回り型”の恋愛気質。<br />
  自分の気持ちを伝える前に、<strong>「相手にどう思われるか」「嫌われへんかな」</strong>って不安が先に立って、  
  結果として<strong>自分を抑えることが日常になってしまいやすい</strong>。<br /><br />

  恋愛においても、「わがまま」「重い」って思われるのが怖くて、  
  本音を飲み込んだり、相手に合わせすぎたりすることが多い。<br />
  でも実はその裏で、<strong>「わかってくれへんのに我慢してる自分」に静かに傷ついてる</strong>。<br /><br />

  TfInの共感力は本物やから、<strong>相手の小さな感情の揺れも見逃さへん</strong>。  
  だからこそ、ちゃんと向き合ってくれる人に対しては、  
  <strong>深く・丁寧に・誠実に尽くすことができる“隠れた一途タイプ”</strong>でもある。<br /><br />

  ただし、相手が鈍感だったり、自分本位すぎたりすると、  
  <strong>「この人のために尽くす意味あるんかな」ってふと冷めてしまうことも</strong>。<br />
  一度「自分を大事にしてくれない」って感じてしまったら、そこから心を戻すのは結構むずかしい。<br /><br />

  TfInが本当に安心できるのは、<strong>“察する前に受け取ってくれる人”</strong>。  
  それは「共感してあげるよ」って上からじゃなくて、  
  <strong>「あなたはどう思ってるの？」ってそっと聞いてくれるような対話</strong>ができる相手やねん。<br /><br />

  傍から見れば「やさしすぎる人」やけど、  
  実はめちゃくちゃ<strong>傷つきやすくて、繊細な自尊心を抱えながら恋してる人</strong>。<br />
  TfInの愛は、<strong>“言わないやさしさ”の塊</strong>やからこそ、  
  気づいてくれる人との恋は、一生ものになる可能性を秘めてるんやで。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
<p>
  TfInタイプは、<strong>「人の気持ちを感じ取り、先回りして動ける」共感型のサポート職人</strong>。<br />
  「あれ？今ちょっと空気変わったかも…」みたいな、<strong>小さな感情の揺れや場の違和感</strong>を見逃さず、即座にフォローや調整に動けるのが最大の強みです。<br /><br />

  仕事の中でも、<strong>誰かの心を支える・関係を円滑にする</strong>ことに自然と意識が向くため、<strong>人と人の間をつなぐ存在</strong>として信頼されやすいタイプ。<br />
  ただし、そのぶん<strong>“他人優先”がデフォルトになりやすく、自分のキャパや本音を見失いがち</strong>。<br />
  周囲がしんどそうな時ほど「自分は大丈夫」と無意識に思い込んでしまうため、<strong>内側にストレスが溜まりやすい</strong>傾向もあります。<br /><br />

  向いてる職業は、<strong>福祉・教育・医療・人事・カスタマーサポート・仲介系</strong>など、<strong>人の心に寄り添う場</strong>。<br />
  ただ、チームの空気を読みすぎて疲弊しないように、<strong>「自分は今しんどくないか？」という内省の習慣</strong>を持つことが大切です。<br /><br />

  <strong>共感力 × 調整力 × 空気を読むセンス</strong>を武器に、裏方の優秀なバランサーとして輝けるタイプ。<br />
  でもほんまに無理しすぎんように。<strong>“自分の心の声”にも、そろそろ耳を傾けてな</strong>。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        TfInは、<strong>自分の優しさをちゃんと受け止めてくれる人</strong>に安心します。<br />
        ゆっくり寄り添ってくれるタイプや、言葉で気持ちを伝えてくれる人と相性◎。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuCe（人間力おばけ）</strong>：感情の深い部分で通じ合える</li>
          <li><strong>LaIn（繊細キラキラ）</strong>：繊細さに共鳴しやすく、優しさの相乗効果</li>
          <li><strong>StCe（真正直エンパス）</strong>：感情に真っ直ぐな姿勢に癒される</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        TfInは、<strong>慎重かつ観察型</strong>。<br />
        自分の感情を出すよりも、まず「この人は安全かな？」と相手をよく観察します。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>感情の起伏が激しすぎず、穏やか</li>
          <li>否定せずに話を聞いてくれる</li>
          <li>沈黙や空気を無理に埋めようとしない</li>
          <li>疲れたときに「大丈夫？」と気づいてくれる</li>
          <li>無理せず一緒にいられる安心感</li>
        </ol>
      </p>
    </div>

    <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  TfInが一番しんどくなるのは、<strong>感情を雑に扱われること</strong>。<br />
  本人はすごく丁寧に人の気持ちを受け取って、ちょっとした変化も見逃さずに気づこうとする。<br />
  だからこそ、自分の感情を適当に扱われたり、茶化されたりすると、<strong>深く深く落ち込む</strong>。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>「気にしすぎ」と片づけられる</li>
    <li>人前で感情を軽くいじられる</li>
    <li>ちゃんと話しても、論理で押し返される</li>
    <li>共感ゼロで会話が進む</li>
  </ul>

  TfInは、<strong>“人の気持ち”にすぐ同化してしまうタイプ</strong>。<br />
  相手が落ち込んでたら自分も沈むし、イライラしてたら自分が悪いのかな？って思い始める。<br />
  つまり、<strong>相手の感情を“自分のせい”に変換してしまいやすい</strong>んやね。<br /><br />

  だからこそ、パートナーが無神経だったり、自分の気持ちを粗く扱ってきたとき、  
  「自分がダメだからだ」「もっと気を使わなきゃ」と、<strong>さらに自分をすり減らしてしまう</strong>。<br /><br />

  特にしんどいのは、<strong>相手の機嫌が悪い時</strong>。  
  怒ってないって言われても空気が重いと、「なにか私やった？」って不安でいっぱいになる。<br />
  自分の心のスペースが狭くなってくのに、相手を優先して気を使い続けるから、  
  最終的には「自分がどうしたいか」がわからなくなる。<br /><br />

  でも本当は、<strong>「共感」って“自分を犠牲にすること”じゃない</strong>んよ。<br />
  相手の気持ちを大切にする力は、そのままで素晴らしい。  
  ただ、それが“同化”になってしまうと、自分の輪郭がどんどん曖昧になっていって、  
  恋愛が「疲れるだけのもの」になりがち。<br /><br />

  必要なのは、<strong>「自分の気持ちも同じくらい大事にしていい」って感覚</strong>。<br />
  それを持つだけで、「優しさの方向」が相手だけじゃなくて、自分にも向けられるようになる。<br /><br />

  TfInは、人の感情に飲み込まれやすいからこそ、  
  <strong>「共感≠同化」っていうフィルターを自分の中に持つこと</strong>がめちゃくちゃ大事。<br />
  その境界線をうまく引けたら、恋愛で消耗しなくなるし、自分の価値もちゃんと守れるようになる。<br /><br />

  毎朝鏡の前で貼り紙読んでください。<br />
  「共感は、相手と一緒に沈むことじゃない。寄り添いながら、自分の気持ちも忘れないこと。」ってね。<br /><br />

  あなたの共感力は、ちゃんと“愛される力”にもなれるから、大丈夫。
</p>


    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        自己主張の強いタイプ（St, Vi）といると、<strong>気づかぬうちに我慢が溜まりがち</strong>。<br />
        また、共感型（Hu, In, Ce）とは仲良くなりやすい反面、<strong>相手のしんどさを吸収して疲れる</strong>ことも。<br />
        他人の感情と自分の感情の「境界線」を持つことが課題。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        TfInは、<strong>人を支えたり気持ちをフォローしたりする仕事</strong>で輝きます。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>カウンセラー・保育士・福祉・医療などのケア職</li>
          <li>接客・秘書・ユーザーサポートなどの人対応系</li>
          <li>感情の機微に気づけるコーディネーターやアシスタント職</li>
        </ul>
        「誰かの気持ちを理解したい」——その想いが仕事にも活きるタイプです。
      </p>
    </div>

  </div>
</PremiumReveal>

      <PremiumSection />
    </motion.div>
  )
}
