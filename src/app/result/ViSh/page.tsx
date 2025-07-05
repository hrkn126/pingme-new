'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import PremiumReveal from '@/components/PremiumReveal'
import PremiumSection from '@/components/PremiumSection'

export default function ViShPage() {
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
          src="/C49F1DD2-9CE3-48EC-983A-5A83ED4F731F.png"
          alt="ViShキャラクター"
          width={800}
          height={800}
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* タイプ名・キャッチコピー */}
      <div className="mt-6 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold">ViSh 幻想と影の人</h1>
        <p className="text-lg md:text-xl opacity-80 mt-2">この世界に馴染めなくても、自分の世界を生きてる。</p>
      </div>

     

      {/* 解説セクション */}
      <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold">【タイプ構成】</h2>
          <p>表：Vi（ヴィジョナリスト） × 裏：Sh（シャドウクリティック）</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【根本動機】</h2>
          <p>
  「この世界、なんか生きづらすぎへん？」——<br />
  ViShタイプの方は、<strong>現実社会の矛盾や冷たさに敏感で、心の中に“もう一つの世界”を持って生きている</strong>タイプです。<br />
  ふとした瞬間に現実がつらすぎて、<strong>想像や妄想の中に逃げ込むことで、自分の心を守ってきた</strong>。<br /><br />

  その世界は、誰にも侵されない美しさと静けさがあって、<strong>現実のストレスや喧騒とはまったく違う、安心できる居場所</strong>になっています。<br />
  でもそのぶん、<strong>「現実と向き合うのがしんどい」「もう自分にはファンタジーしか残ってない」</strong>と感じることも多く、<br />
  外から見ると“現実逃避”に映ってしまうこともあるかもしれません。<br /><br />

  実際、ViShタイプの中には、<strong>人間関係・社会構造・生き方そのものへの違和感が強すぎて、</strong><br />
  「この社会にちゃんと馴染める気がしない」「そもそも自分はこの世界のルールで動けない」と感じている方も少なくありません。<br /><br />

  ただし、それは単なる“逃避”ではなく、<strong>繊細すぎる感性と深すぎる内面世界を持った人が自分を守るための手段</strong>でもあります。<br />
  現実に傷ついても、その痛みを物語や創作、空想の中で昇華できるのが、ViShタイプの強みです。<br /><br />

  逆に言えば、その<strong>内面の幻想世界があるからこそ、誰にも真似できないアートや言葉が生まれる</strong>。<br />
  現実と戦い続けるのではなく、<strong>自分の“心の宇宙”を活かして、現実に橋をかける</strong>ような生き方ができたとき、  
  ViShの持つ“幻想と影”は<strong>唯一無二の魅力として光り出します</strong>。<br /><br />

  周りの人に理解されなくても大丈夫。<br />
  <strong>あなたの描く世界に、心から共鳴する誰かがきっといます</strong>。
</p>

        </div>

        <div>
          <h2 className="text-lg font-semibold">【価値観】</h2>
          <p>
            創造・表現・美学・内省。<br />
            理想と自己否定が入り混じってて、<strong>現実に馴染めない感覚</strong>を抱えやすい。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【思考傾向】</h2>
          <p>
            突拍子もない空想が得意。<br />
            でも「自分おかしいんかな…」と<strong>強い不安と葛藤</strong>を抱えることも。<br />
            想像力と自己否定が共存する独特のメンタル。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【行動傾向】</h2>
          <p>
            表現は得意。でも、<strong>評価されるのが怖くて引っ込めがち</strong>。<br />
            「こうありたい」と「こう見られたい」のギャップに苦しみ、<br />
            アートや創作に心の避難所を見つける。
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【強み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>唯一無二の感性・世界観を持っている</li>
            <li>深い洞察力と哲学的思考</li>
            <li>“心の闇”を表現に昇華できるアーティスト性</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【弱み】</h2>
          <ul className="list-disc list-inside pl-2">
            <li>自己否定が強く、自信を持ちにくい</li>
            <li>感情の波が大きく、気分屋に見えることも</li>
            <li>現実社会との折り合いをつけるのが苦手</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">【一言で言うと】</h2>
          <p>「心の中に“もう一つの世界”を生きる人。」</p>
        </div>

        
        <div>
  <h2 className="text-lg font-semibold">【成長ポイント】</h2>
  <p>
    ViShタイプのあなたは、<strong>現実よりも心の内側にある世界の方がずっと鮮明で美しい</strong>と感じるタイプかもしれません。<br />
    幻想的な感性、直感的なひらめき、そして鋭い感受性。<br />
    他人には見えない景色を見て、感じられない痛みを抱えてきた繊細な魂の持ち主です。<br /><br />

    でもその反面、<strong>「自分は普通じゃない」「どうせ誰にもわかってもらえない」</strong>という孤独感を心の奥で抱えていませんか？<br />
    無意識に現実から距離をとって、夢や創作、空想の中に心を逃がすことが“癒し”になっていたのではないでしょうか。<br /><br />

    けれど、<strong>その“幻想”はあなたを守ってくれる一方で、孤立も生みやすい</strong>ものです。<br />
    傷つくのが怖いから、現実と関わることを避け続けていくと、<strong>「生きてる実感」や「人とのあたたかい繋がり」も手放すことになります。</strong><br /><br />

    あなたに必要なのは、<strong>「現実の痛みも受け入れて、自分の感性を表現していく勇気」</strong>です。<br />
    アウトプットすることでしか、自分の存在を誰かと共有することはできません。<br /><br />

    「普通にならなきゃ」と思う必要なんてありません。<br />
    そのままでいいんです。<strong>むしろ“普通”からはみ出してることが、あなただけの価値</strong>なんです。<br /><br />

    <strong>人の期待ではなく、“自分が何に癒されるか”を優先して</strong>ください。<br />
    「夢の世界」で得た気づきや痛みを、ぜひ“現実”にも届けていってください。<br />
    あなたの世界観は、現実を生きる誰かの“逃げ場”にも“救い”にもなり得るのです。
  </p>
</div>

      </div>

      <PremiumReveal>
  <div className="max-w-2xl text-left space-y-6 text-sm md:text-base leading-relaxed mt-12">

    <div>
      <h2 className="text-lg font-semibold">【恋愛傾向】</h2>
      <p>
  ViShタイプは、<strong>「誰かと本気で繋がりたい」という強い願いと、「どうせ理解されへんやろ」という諦めがずっと心の中でせめぎ合っているロマンティスト</strong>。<br />
  恋愛においても、ただ仲が良いとか気が合うだけでは満たされません。<br />
  <strong>感性・美学・物語性・共鳴</strong>——そういった抽象的な“魂の相性”が噛み合って、初めて本気で惹かれていきます。<br /><br />

  でも、自分の内面はあまりにも複雑で、繊細で、ちょっと重たくて。<br />
  <strong>そのままさらけ出すのが怖くて、「察してほしい」「気づいてほしい」って、間接的な表現で愛を試してしまう</strong>こともしばしば。<br />
  だけど相手が気づいてくれなかった時、<strong>「ほらな、やっぱり私は誰にも理解されへん」</strong>って、自己否定のループに入ってしまいやすいんです。<br /><br />

  それでも、誰かが自分の中の影や痛み、そしてその奥にある小さな光に気づいてくれたとき——<br />
  <strong>ViShは、他の誰よりも深く、幻想的で濃密な愛情を注ぐパートナーになります</strong>。<br />
  愛し方はどこまでも繊細で、静かで、でも底が見えないほど深くて、<strong>“二人だけの世界”をまるで芸術作品のように築きあげていきます</strong>。<br /><br />

  現実には馴染めない。でも、<strong>心が震える瞬間</strong>があるなら、それを信じて生きていたい。<br />
  ViShはそんな矛盾を抱えながらも、<strong>どこかで“自分をまるごと受け止めてくれる誰か”をずっと待ち続けている</strong>んです。<br /><br />

  「現実の中にも、ほんの少しだけ夢を見させてくれる人」。<br />
  そんな存在と出会えたなら、<strong>ViShは初めて、“この世界でも生きていけるかも”と思えるようになる</strong>のかもしれません。
</p>


    </div>

    <div>
      <h2 className="text-lg font-semibold">【仕事傾向】</h2>
      <p>
  ViShタイプは、<strong>“感情の奥”や“世界の裏側”を感じ取るセンサーが非常に鋭く、心の深層を表現する力に長けています</strong>。<br />
  そのため、一般的な職場や「正解のある業務」にどこか息苦しさを感じやすく、<strong>感性や哲学を活かせる“自由な領域”でこそ、本来の力を発揮します</strong>。<br /><br />

  特に、<strong>創作・芸術・執筆・映像・心理・哲学・スピリチュアル分野</strong>など、<br />
  「感情」や「人の内面」を深く掘り下げる領域とは抜群の相性を持ちます。<br />
  ViShにとって、仕事とは<strong>社会の役割を果たすものというより、“世界と繋がる手段”</strong>であり、<br />
  同時に<strong>「自分がこの世界に存在している意味」を探る行為</strong>でもあるのです。<br /><br />

  また、<strong>集団の中で空気を読み続けるような環境や、感情の起伏が激しいチーム</strong>にいると、知らず知らずのうちにエネルギーを消耗してしまうことも多いタイプ。<br />
  そのため、<strong>一人でじっくり取り組める仕事や、空間・時間にゆとりのある働き方</strong>の方が、心の安定と創造性の両方を守ることができます。<br /><br />

  <strong>“繊細さ”や“影”は、ViShの弱点ではなく才能そのもの</strong>。<br />
  その特性を活かせる仕事やライフスタイルを選ぶことで、<strong>唯一無二の存在感</strong>を放つことができるのがこのタイプの最大の魅力です。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【相性の良いタイプ】</h2>
      <p>
        ViShは、<strong>自分の“世界観”を否定せずに見てくれる人</strong>と深く繋がれます。<br />
        無理に明るくさせようとせず、<strong>そっと寄り添ってくれる人</strong>に心を開く。<br /><br />
        相性が良いタイプ：
        <ul className="list-disc list-inside pl-4 mt-2">
          <li><strong>HuIn（共感マスター）</strong>：深い感情を分かち合える</li>
          <li><strong>ViCe（理想共感派）</strong>：感性や美意識が似ている</li>
          <li><strong>TfSh（闇抱える献身家）</strong>：影とやさしさの共鳴コンビ</li>
        </ul>
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【親密になるまでのステップ】</h2>
      <p>
        ViShは、<strong>最初は壁を作って様子見する“影の観察者”</strong>。<br />
        自分の世界を守ることが最優先やから、軽いノリでは絶対に開かない。<br /><br />
        🔽 心を開くプロセス：
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li>独自の世界観を尊重してくれる</li>
          <li>心の闇や孤独を否定せず受け止めてくれる</li>
          <li>感性や哲学的な話に付き合ってくれる</li>
          <li>「無理して明るくならなくていいよ」と言ってくれる</li>
          <li>評価ではなく、“理解しようとする姿勢”がある</li>
        </ol>
      </p>
    </div>

    <div>
     <h2 className="text-lg font-semibold">【恋愛でのNGパターン】</h2>
<p>
  ViShが深く傷つくのは、<strong>感性や内面を軽く扱われたとき</strong>。<br />
  見た目や雰囲気のイメージで判断されたり、「変わってるね」で終わらされると、  
  「この人、ほんとの私なんか見ようともしてないな」と感じてしまう。<br /><br />

  ❌ <strong>NG例：</strong>
  <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
    <li>「考えすぎ」「重い」などと否定される</li>
    <li>明るさや社交性ばかりを求められる</li>
    <li>独自の表現や発想を笑われる</li>
    <li>理解しようとせず、「変わってる」で終わらせる</li>
  </ul>

  ViShは、<strong>自分の中に深く静かな宇宙</strong>を抱えているタイプ。  
  繊細な感覚や空想、過去の記憶と強く結びついた感情を生きていて、  
  それを“言葉”や“行動”で分かりやすく見せるのがとても苦手。<br /><br />

  だからこそ、恋愛においては<strong>「ちゃんと理解してくれる人」に強く惹かれる</strong>し、  
  逆に「わかってもらえない」「否定された」と思った瞬間、<strong>一気に心を閉ざしてしまう</strong>。  
  その扉は、一度閉じると滅多に開かない。<br /><br />

  特にしんどいのは、<strong>幻想の恋愛像と、現実のギャップ</strong>。  
  ViShは、自分でも気づかないうちに恋愛に“理想”や“物語”を重ねていて、  
  相手がその理想からズレると、「あれ…こんなはずじゃなかった」と落胆することがある。<br /><br />

  でもその落胆は、相手のせいじゃない。  
  自分の中で描いていた幻想の像に、現実の相手が合わなかっただけ。  
  それに気づけず、「こんな自分じゃ愛されないんだ」と<strong>自己否定に向かってしまう</strong>のがViShの危うさです。<br /><br />

  大事なのは、<strong>“空想の中の完璧な誰か”じゃなく、“目の前にいる不完全な誰か”と向き合うこと</strong>。  
  理解してくれるまで時間がかかっても、「知ろうとしてくれる人」は必ずいます。  
  そして何より、<strong>“幻想に閉じこもらず、自分からも手を伸ばす”</strong>ことが、ViShの恋愛における大きな一歩になります。<br /><br />

  「幻想の中の恋愛像と現実を比較して病むので、<strong>“今目の前にいる人とちゃんと向き合う”っていう選択をどうぞ</strong>。」  
  それができたとき、孤独で終わる恋愛から、少しずつ救われていきます。
</p>

    </div>

    <div>
      <h2 className="text-lg font-semibold">【人間関係での注意点】</h2>
      <p>
        明るすぎるタイプ（La, Tf）とは、<strong>テンション差に疲れやすい</strong>。<br />
        共感型（Ce, Hu, In）とは深く繋がれるけど、<strong>情緒の渦に巻き込まれるリスク</strong>もあり。<br />
        現実思考のClやRoには、<strong>「理解不能」扱いされて孤独を感じがち</strong>。
      </p>
    </div>

    <div>
      <h2 className="text-lg font-semibold">【向いてる職業】</h2>
      <p>
        ViShは、<strong>内面の世界を表現できるクリエイティブ分野</strong>で輝きます。<br /><br />
        💼 向いている職業：
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>作家・画家・映像作家・音楽家</li>
          <li>幻想系の演出家・アーティスト</li>
          <li>心理・哲学・宗教・幻想表現を扱う研究職</li>
        </ul>
        「表に出せない心」を作品に昇華する、そんな仕事に魂燃えるタイプやで。
      </p>
    </div>

  </div>
</PremiumReveal>


      <PremiumSection />
    </motion.div>
  )
}
