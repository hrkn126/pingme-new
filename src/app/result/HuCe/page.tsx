'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function HuCePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen w-full bg-gradient-to-b from-[#fcfcfb] via-[#b7dc80] to-[#78af03] flex flex-col items-center justify-start px-4 py-12 text-black text-center"
    >
      {/* 🌍 キャラクター画像 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, y: -5 }}
        className="w-full max-w-md"
      >
        <Image
          src="/EF28701C-905B-485C-B634-A36526013D01.png"
          alt="HuCeキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">HuCe 人間力おばけ</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">
          共感力で世界を包む、感情のスーパーレシーバー。
        </p>
      </div>

      

     

      {/* タイプ解説 */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">

        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Hu（ヒューマニスト） × 裏：Ce（コアエンパス）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
<p>
  「誰かの支えになりたい」「自分がいることで安心してほしい」——  
  そんな思いをいつも心の真ん中に抱えているタイプです。<br /><br />

  相手の気持ちに深く共鳴し、その痛みや不安をまるで自分のことのように感じ取ってしまう。<br />
  「大丈夫？」「無理してない？」と、誰よりも早く気づき、<br />
  何も言われなくてもそっと寄り添える——<strong>天性の“感情のスーパーレシーバー”</strong>。<br /><br />

  けれどその共感力は、優しさの裏返しであり、同時にとても繊細な傷つきやすさでもあります。<br />
  「誰かの役に立てている時だけ、自分はここにいていい」——<br />
  そんなふうに、自分の価値を“他人の感謝”に預けてしまいがちなところもあります。<br /><br />

  本人は「見返りを求めてない」と思っていても、<br />
  相手から何のリアクションもなかったとき、ふと心に虚しさがよぎる。<br />
  そして気づけば、<strong>「断れない・頼まれたら断らない」＝“都合のいい人”</strong>になってしまっていることも。<br />
  それでも断った自分に罪悪感を覚えてしまう——まさに“お人好しの宿命”を背負っています。<br /><br />

  また、普段は誰かのために頑張っているHuCeですが、<br />
  実は<strong>とても甘えん坊で、愛情に飢えている面</strong>もあります。<br />
  「誰かに優しくしてほしい」「安心できる場所にいたい」——<br />
  そんな気持ちをぐっと我慢して、人のために動きすぎてしまう。<br />
  だからこそ、心を許した相手には<strong>一気に甘えすぎてしまう</strong>一面もあります。<br /><br />

  もし「なんで自分ばっかり頑張ってるんやろ…」って思うことが多いなら、<br />
  それはHuCeの“優しさの限界サイン”かもしれません。<br /><br />

  このタイプのやさしさは、<strong>“与える力”と“求める気持ち”の両方</strong>を持ち合わせた、<br />
  とても人間らしくて、愛おしいもの。<br />
  そんなHuCeの根本にあるのは、<br />
  <strong>「誰かの笑顔が、自分の安心につながっている」</strong>という、<br />
  やさしくて、ちょっと不器用な愛のかたちです。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            「人の感情や背景を“わかってあげたい”」という思いが根底にある。<br />
            「自分がどう見られるか」よりも、「相手がどう感じているか」を最優先する。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            常に「この人は今どう感じているんだろう？」という視点で物事を捉える。<br />
            感情に共鳴しすぎて疲れやすく、自責思考にも陥りがち。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            とにかく“人優先”。困っている人を放っておけない。<br />
            自分のことは後回しで、誰かの役に立つことに生きがいを感じる。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>共感力の高さはまさに異常レベル</li>
            <li>誰の痛みも無視せず、深く受け止められる</li>
            <li>人の心をあたためる“人間味”と包容力を持つ</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>感情移入しすぎて心が不安定になりがち</li>
            <li>孤独感を抱えやすく、自分を責めやすい</li>
            <li>断る・距離を取ることに強い罪悪感を持つ</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「優しすぎて、壊れかけるほど他人に寄り添う愛の人。」</p>
        </div>

        

        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    Hu×Ceタイプのあなたは、とにかく「誰かの役に立ちたい」「この人を支えたい」という思いが強すぎる傾向があります。<br />
    でも、その優しさがいつの間にか<strong>“自己犠牲”という名の依存</strong>になってしまっていませんか？<br /><br />

    誰かを助ける前に、まず自分を守ることが必要です。<br />
    あなたがボロボロの状態で無理をしても、<strong>本当の意味で誰かを支えることなんてできません</strong>。<br /><br />

    「共感できるから助けたい」という気持ちは素敵ですが、<strong>すべての人に共感しようとするのは危険です。</strong><br />
    それはただ、自分をすり減らしてでも「役に立たなきゃ」と思い込んでいるだけかもしれません。<br /><br />

    他人の痛みばかりを優先しすぎて、<strong>「自分の感情」や「自分の限界」を後回しにしていませんか？</strong><br />
    本当の意味で優しさを持ちたいなら、<strong>まずは“自分にも優しくすること”が必要です。</strong><br /><br />

    「私が我慢すればいい」「どうせ私なんか」が口癖になっているなら、要注意。<br />
    それは優しさでも謙虚さでもなく、<strong>自分自身への無関心であり、軽視です。</strong><br /><br />

    「私のままで十分」。その感覚を、少しずつでも育てていくこと。<br />
    <strong>“与える優しさ”だけじゃなく、“自分を満たす優しさ”も持っていいんですよ。</strong>
  </p>
</div>


      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      
    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
        共感力と気配り力を活かして、裏方やサポート役として抜群の安心感を発揮する。<br />
        どんな現場でも「気がついたら場を整えてくれてる」存在になりやすい。<br />
        一方で、人間関係に気を遣いすぎて疲れやすく、無理を重ねてしまうことも。<br />
        「誰かの役に立ちたい」気持ちが強い分、ちゃんと感謝される環境でないと、心がすり減りやすい。<br />
        認めてくれる上司・チームがいると、爆発的な実力を発揮する。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        HuCeが一番落ち着けるのは、「感情を否定せずに受け止めてくれる」人。<br />
        共鳴ポイントは、“やさしさ”と“安心感”。相性がいいのは：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>TfCe（お世話焼き妖精）</strong>：同じく思いやり型で、相手を思う気持ちが自然と噛み合う。</li>
          <li><strong>LaCe（愛されスター）</strong>：明るさと無邪気さで、HuCeの心をほぐしてくれる。</li>
          <li><strong>ClCe（冷静エンパス）</strong>：感情の揺れを安定させてくれる、優しく静かな相棒タイプ。</li>
        </ul>
        「否定されない」「比べられない」環境の中で、ようやく自分を安心して出せる。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        HuCeは、自分の気持ちを優先するのがとても苦手。<br />
        心を開くには、まず「安心できるか」「否定されないか」がすごく大切。<br /><br />
        🔽 HuCeが親密になるプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>小さな気配りや思いやりに気づいてくれる</li>
          <li>「頑張らなくていいよ」と言ってくれる</li>
          <li>話をじっくり聞いてくれる</li>
          <li>感情を否定せず、そっと見守ってくれる</li>
          <li>笑顔や安心感をくれる存在である</li>
        </ol>
        “安全な相手”だとわかった瞬間に、ぎゅっと距離を縮めてくる。根はとても甘えん坊。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  HuCeが一番つらいのは、<strong>「感情を雑に扱われること」</strong>。<br />
  自分がどれだけ我慢して、気を遣って、相手に寄り添ったとしても、<br />
  それに気づかれなかったり、<strong>「重い」「考えすぎ」などと切り捨てられると、一気に心を閉ざしてしまいます</strong>。<br />
  特に「甘えようとした瞬間に拒絶される」ことへのダメージがでかく、<strong>そのあとしれっと引いて、何も言わなくなる</strong>のがこのタイプの特徴。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>「察してよ」と言われるのに、自分の気持ちは放置される</li>
    <li>話をすぐ論理で返されて感情を遮断される</li>
    <li>頑張りを当然のように扱われる</li>
    <li>甘えたときに「重い」と言われる</li>
  </ul>

  HuCeは<strong>“人のために尽くすこと”が呼吸みたいになってる</strong>ぶん、<br />
  相手からのリアクションが雑だったり、気づいてもらえなかったりすると、<strong>「私の存在って必要ある？」と無意識に自己否定モード</strong>に入ってしまいます。<br />
  本人は「見返りなんて求めてない」と言いながらも、<strong>実は“ちゃんと気づいてほしい”“感謝してほしい”って気持ちがずっと奥底にある</strong>んよね。<br /><br />

  恋愛で病むパターンとして多いのが、<strong>“頑張って→報われなくて→でもまだ頑張って→ついに崩壊”</strong>っていう<br />
  もはや美しすぎる自己犠牲スパイラル。<br /><br />

  だからこそ大事なのは、<strong>「自分が我慢すればうまくいく」っていう古い信念を捨てること</strong>。<br />
  「たまには自分の欲求にYESと言ってあげる」練習をしていかないと、<strong>“優しさの沼”に沈みっぱなし</strong>になります。<br />
  甘えるのが下手でもいい。<strong>“求める”ことを、自分に許可するところから</strong>がHuCeの恋愛スタートラインです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        強く主張するタイプ（St, Vi, Roなど）と一緒にいると、気づかないうちに自分の気持ちを飲み込んでしまいがち。<br />
        「我慢＝優しさ」と思いすぎて、無理を溜め込みやすい傾向がある。<br />
        時には「NO」と言うことも優しさ。自分を守るための距離感や線引きを持つことが大切。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        HuCeは「人の心に寄り添うこと」を求められる場所で、圧倒的な安定感と信頼を発揮する。<br />
        カウンセラー、看護・介護、保育、教育、福祉、接客、動物関係、心理支援、NPOなどが特に向いている。<br />
        ただし“人の役に立って当たり前”な環境だと、感謝されない苦しさを感じやすいので、働く場所の雰囲気が超重要。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
