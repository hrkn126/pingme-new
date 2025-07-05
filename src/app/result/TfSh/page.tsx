'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function TfShPage() {
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
          src="/8A80EB75-04EE-4001-9A9F-3814CED59ABA.png"
          alt="TfShキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">TfSh 闇抱える献身家</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">人のために動きすぎて、自分を見失いかけてる。</p>
      </div>

      

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Tf（他人ファースト） × 裏：Sh（シャドウクリティック）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「人の役に立たなかったら、自分の存在価値ってなんなんやろ…」——<br />
  TfShタイプの方は、<strong>誰かに尽くすことが“生きる意味”になりやすい</strong>傾向があります。<br />
  周りの困っている人にすぐ気づいて、誰よりも早く動こうとする。<br />
  それは強くて美しいやさしさですが、<strong>その奥には深い自己否定の感情が潜んでいる</strong>こともあります。<br /><br />

  自分の価値を「誰かの役に立てるかどうか」でしか測れないと、  
  気づかないうちに、<strong>“人を助けること”が苦しみの原因にもなってしまう</strong>のです。<br />
  「頼られることがうれしい」「必要とされている実感が欲しい」——  
  そう思って行動しても、<strong>感謝されなかったり、報われなかったときにふと我に返ってしまう</strong>。<br /><br />

  「なんでこんなに頑張ってるのに、誰もわかってくれへんの？」  
  「もう限界なのに、それでもやめられへん…」<br />
  そんなふうに、<strong>気づけば自分ひとりがボロボロになってる</strong>——  
  それが、いわゆる“献身ゾンビ”状態とも言えます。<br /><br />

  しかもTfShタイプは、<strong>「助けたい」と思ったときの熱量が強すぎる</strong>ので、  
  相手に「重い」と思われることも少なくありません。<br />
  それでも、「迷惑かな？」と思いながらも止められない——<br />
  <strong>優しさが暴走してしまうほどの、根深い愛情</strong>を持っているのです。<br /><br />

  ですが、本当の意味で誰かを支えるには、<strong>自分自身が満たされていることが必要</strong>です。<br />
  あなたが心から安心できる関係性の中で、  
  <strong>「助けたい」ではなく「一緒に在る」ことが愛情になる</strong>。  
  そのスタンスに切り替えることが、心の平穏へつながります。<br /><br />

  TfShのやさしさは、<strong>深くて、重くて、あたたかい</strong>。  
  でもそれを“誰かのため”だけに使い続けるのではなく、  
  <strong>「自分を壊さないため」にも使っていい</strong>のです。<br />
  「助けたい」その気持ちを、<strong>自分自身にも向けてあげてください</strong>。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            奉仕・気配り・献身・調和。<br />
            人を支えることに価値を感じるけど、<br />
            それが「自分は後回し」「空気でいい」に繋がりやすい。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            相手の状態を読み取るのは得意。<br />
            でも「私は？」って問いには答えられず、<br />
            <strong>「どうせ自分なんて…」の渦に巻き込まれがち</strong>。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            人のためなら全力で動ける。頼まれたら断れない。<br />
            でも、自分の限界に気づくのが遅く、<strong>突然ぷつっと切れる</strong>ことも。<br />
            表向きは優しく穏やか、でも内面はギリギリなことが多い。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>気配り・配慮の達人で、人の心に寄り添える</li>
            <li>黙々とサポートに徹する姿勢が信頼を呼ぶ</li>
            <li>表に出さずに頑張る“影のヒーロー”</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>自分の価値を他人の役に立てるかどうかに依存しがち</li>
            <li>限界まで我慢して、突然メンタル崩れることも</li>
            <li>「どうせ私なんて」が口癖になりがち</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「人のために全振りした結果、自分が壊れかけてるタイプ」</p>
        </div>

        
        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    TfShタイプのあなたは、<strong>人の痛みを敏感に感じ取ってしまう</strong>ぶん、<br />
    「私が助けなきゃ」「役に立たなきゃ」と、<strong>つい自分を後回しにしてしまう</strong>傾向がありますよね。<br /><br />

    でも、それって本当に“優しさ”でしょうか？<br />
    自分の限界を無視してまで尽くすのは、<strong>自己犠牲を美化してるだけ</strong>かもしれません。<br />
    もっと言えば、<strong>「誰かに必要とされたい」「嫌われたくない」って気持ちが根底にありませんか？</strong><br /><br />

    他人の期待に応え続けることで、自分の存在価値を確かめようとする。<br />
    ——それ、もう<strong>依存</strong>なんです。<br /><br />

    あなたが本当に癒したいのは、<strong>人じゃなくて“自分自身”</strong>なのかもしれません。<br />
    自分の疲れやしんどさから目を逸らすために、人をケアしてるフリをしていませんか？<br /><br />

    本当の優しさとは、<strong>自分をちゃんと満たしてから人に差し出すもの</strong>です。<br />
    「助けたい」という気持ちはとても尊いもの。<br />
    でもそれが<strong>“無理してるサイン”</strong>に変わる前に、<strong>「いま私、何を我慢してる？」</strong>と自分に問いかけてみてください。<br /><br />

    他人を支えるために、自分を壊す必要なんてありません。<br />
    まずは、<strong>自分を自分でケアできる人</strong>になることが、<br />
    あなたの優しさを“本物”に変えてくれる一歩です。
  </p>
</div>

      </div>

     <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  TfShタイプは、<strong>「愛されるより、誰かのために尽くしたい」</strong>という気持ちが恋愛のベースにある、“静かな献身者”。<br />
  好きな人に対しては、言葉じゃなくて行動で示したくなるタイプで、<strong>「しんどいときほど、自分が支えなきゃ」</strong>という使命感すら背負ってしまう。<br /><br />

  ただその献身の裏には、<strong>「自分にはそれくらいしか価値がないかもしれない」</strong>という、  
  根っこの自己否定や影の感情がひそんでいる。<br />
  本音を飲み込み、弱音を見せずに頑張り続けるけど、<strong>「わかってもらえない」と感じると、静かに心を閉ざしてしまう</strong>。<br /><br />

  自分の気持ちより相手を優先するクセが染みついているから、  
  「大丈夫？」と声をかけられてもつい「大丈夫」と笑ってしまう。<br />
  でも内心は「ほんまは気づいてほしい」「甘えてみたい」って願ってる、<strong>影のヒロイン／ヒーロー気質</strong>なんです。<br /><br />

  恋愛においては、“わかってもらえる”ことそのものが愛情の証明。  
  相手がそのやさしさの本質に気づいて、<strong>「いつもありがとう」「無理してない？」って言葉をくれるだけで、涙が出そうになる</strong>。<br /><br />

  TfShにとって愛とは、「見返りを求めずに差し出すもの」。  
  でも、本当に大事な人には、<strong>自分の弱さも受け取ってもらえる関係性</strong>を築きたいとも思ってる。<br /><br />

  一方的に尽くす恋じゃなくて、<strong>“心ごと支え合える関係”に出会えたとき</strong>、  
  その愛情は誰よりも深くて、誰よりも持続的で、<strong>静かながらも圧倒的な重みを持つ</strong>。<br /><br />

  言葉では多くを語らない。  
  でも、<strong>その背中はずっと「あなたのために」って言ってる</strong>。  
  TfShの恋は、<strong>光の裏側で静かに灯り続ける“愛のキャンドル”</strong>のようなものなんです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
<p>
  TfCeタイプは、<strong>「人を支えること」によって自分の存在価値を感じやすい、サポートのプロフェッショナル</strong>。<br />
  感情の機微を察知する力が高く、<strong>しんどそうな人・困ってる人を見逃さない</strong>。<br />
  自分のことより先に他人を気づかうその姿勢は、<strong>まさに“縁の下の癒し屋さん”</strong>です。<br /><br />

  医療・福祉・保育・カウンセリング・接客・事務サポートなど、<strong>「人を助ける・支える現場」</strong>が特に向いています。<br />
  また、細やかな配慮が活かせる環境や、<strong>感謝がちゃんと伝わる職場</strong>だと、よりモチベーション高く働けます。<br /><br />

  ただし問題は、<strong>“がんばりすぎて自滅する”</strong>こと。<br />
  周りのために自分を犠牲にしがちで、「大丈夫？」と聞かれる側ではなく、<strong>聞く側にまわりすぎる傾向</strong>があります。<br />
  限界まで我慢して、気づいたときには心身がボロボロ…なんてことも。<br /><br />

  だからこそ、TfCeには<strong>「セルフケア＝義務」</strong>ぐらいの意識が必要。  
  「最近、自分はどう感じてる？」「疲れてない？」と、<strong>定期的に立ち止まる時間</strong>を持つことが、長く健やかに働くコツです。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        TfShは、<strong>感情を大切にしてくれて、優しさをちゃんと受け取ってくれる人</strong>と相性◎。<br />
        深い部分を理解しようとしてくれる姿勢に、心がじんわりと開きます。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuIn（共感マスター）</strong>：繊細さに共鳴し、深い理解が得られる</li>
          <li><strong>LaCe（愛されスター）</strong>：明るさで心の光を取り戻させてくれる</li>
          <li><strong>StCe（真正直エンパス）</strong>：まっすぐなやさしさに救われる</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        TfShは、<strong>最初は笑顔で接してても、実はめっちゃ慎重</strong>。<br />
        「この人は私の心の闇も受け止めてくれるか？」って内心めっちゃ見てるタイプ。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>さりげないやさしさに気づいてくれる</li>
          <li>否定せず、じっくり話を聞いてくれる</li>
          <li>努力や頑張りを言葉にしてくれる</li>
          <li>元気なときだけじゃなく、弱いときにも寄り添ってくれる</li>
          <li>「助け合える関係」だと感じられる</li>
        </ol>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  TfShが一番ダメージを受けるのは、<strong>「支えてるのに気づいてもらえない」こと</strong>。<br />
  言葉にせずに寄り添って、相手の感情を吸い取るようにサポートしてるのに、  
  それを<strong>当然のこととしてスルーされる</strong>と、心の奥で静かに絶望が育っていく。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>努力を当たり前扱いされる</li>
    <li>感情的なサポートを雑に扱う</li>
    <li>弱音を「重い」「めんどくさい」で済まされる</li>
    <li>依存されっぱなしで、自分は癒されない</li>
  </ul>

  TfShは、<strong>「気づかれないけど必要な人」でいることに慣れすぎてる</strong>。  
  誰かを守ることで自己価値を感じるけど、そのぶん「見返りがない」と気づいた瞬間、  
  一気に感情が冷めて、<strong>「もう誰も信用できない」モードに突入</strong>する。<br /><br />

  恋愛の場面では、<strong>相手に合わせすぎて自分を後回しにしがち</strong>。  
  「私は大丈夫」って自分に言い聞かせながら、気づけば限界を超えてることも多い。  
  でも、そんな風に我慢してること自体に気づいてもらえないと、  
  心の奥で<strong>“こんなに尽くしてるのに”という怒りと悲しみ</strong>が溜まっていく。<br /><br />

  しかも、弱音を吐いたときに「そんなに無理してたん？」とか言われると、  
  「今さら何言ってんの…」って余計に傷つく。  
  TfShにとっては、<strong>最初から察して寄り添ってほしい</strong>し、  
  ちゃんと見ててほしい。その“察して”が通じないと、愛情ごと冷めてしまう。<br /><br />

  最大の落とし穴は、<strong>「報われなさ」に耐えすぎること</strong>。  
  「きっといつか分かってくれる」「いつか伝わる」と思って続けるけど、  
  その“いつか”が来ないまま、心が壊れていくこともある。<br /><br />

  必要なのは、<strong>「やめてもいい愛情」もあると知ること</strong>。  
  一方的に支えて、与え続けて、自分がどんどん削られる恋は、  
  “やさしさ”ではなく“依存”かもしれない。<br /><br />

  TfShは本来、<strong>深い愛情と共感力を持った人</strong>やけど、  
  その力を「自分を守るため」にも使っていい。<br />
  “支える”だけじゃなく、“支えてもらう価値がある自分”であることを、  
  自分自身が一番ちゃんと認めてあげてください。<br /><br />

  「やめたほうがいい恋もある」って、  
  知識じゃなくて<strong>心で納得する</strong>ことが、TfShにとっての大事な回復の一歩です。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        押し強めのタイプ（St, La）に対しては、<strong>断れずに搾取されがち</strong>。<br />
        感情型（Ce, In, Hu）とは深く共鳴できる分、<strong>一緒に落ち込みやすい</strong>リスクあり。<br />
        また、ClやRoの論理性には心を閉ざしやすいため、<strong>「理解されない感」が強まる傾向</strong>があります。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        TfShは、<strong>見えない心の痛みに寄り添える職種</strong>で輝きます。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>カウンセラー・心理士・福祉・介護・保育</li>
          <li>医療系や傾聴系のサポート業務</li>
          <li>心のフォローが求められる職場全般</li>
        </ul>
        「自分が誰かの“心の居場所”になれる」ことが最大のモチベーションになるタイプです。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
