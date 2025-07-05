export type Question = {
  id: number;
  question: string;
  example: string;
  yesTypes: string[];
  noTypes: string[];
};

export const questions: Question[] = [

{
  id: 51,
  question: 'つらい時人前では明るく振る舞えるけど、心の中ではすごいしんどいと感じている',
  example: 'しんどくても平気なフリしてしまう。全然大丈夫〜！って言いがち',
  yesTypes: ['In'],
  noTypes: ['Ro']
},
{
  id: 52,
  question: '相手の一言がずっと頭に残ってしまって寝れないことがある。',
  example: '「あれって嫌味やったんかな、どういう意味合いで言ったんやろ」って夜中に何回も思い返す',
  yesTypes: ['In'],
  noTypes: ['Sh']
},
{
  id: 53,
  question: '周りからの印象が良すぎると、期待に応えなきゃってプレッシャーを感じる。',
  example: '「しっかりしてるよね」って言われるほど、もっと上を目指そうとしてしんどくなる',
  yesTypes: ['In'],
  noTypes: ['Ce']
},
{
  id: 54,
  question: 'その場ではなんも感じないけど、あとで1人で反省会をする。',
  example: '「あの返しうまくなかったな…」「失礼やったかも…」ってグルグル考える',
  yesTypes: ['In'],
  noTypes: ['Ro']
},
{
  id: 55,
  question: '相手のちょっとした反応に「あ、嫌われたかも」って思ってしまう。',
  example: 'LINEの返信がそっけないだけで不安になる',
  yesTypes: ['In'],
  noTypes: ['Sh']
},
{
  id: 56,
  question: '友達の投稿見て「人生充実しててすごいな…」って落ち込むことある。',
  example: 'snsでキラキラしてる友達を見て、自分は部屋でダラダラしてるだけで惨めになる',
  yesTypes: ['In'],
  noTypes: ['Ro']
},
{
  id: 57,
  question: '相手にどう思われてるかを気にして行動を調整する',
  example: 'LINEをすぐ返したら暇人やと思われそうで、わざと時間おいて返す',
  yesTypes: ['In'],
  noTypes: ['Sh']
},
{
  id: 58,
  question: '既読スルーされたら「嫌われたんかな…」って1人で悩む。',
  example: 'ただ忘れてるだけかもやけど、“何か悪いことした？”って自問する',
  yesTypes: ['In'],
  noTypes: ['Ce']
},
{
  id: 59,
  question: '感情の波を見せたくないから、常にフラットを装ってる。',
  example: '嬉しいときも悲しいときも“いつも通り”に見せようとする',
  yesTypes: ['In'],
  noTypes: ['Sh']
},
{
  id: 60,
  question: '夜中に急に「私って何やってるんやろ…」って病む瞬間ある。',
  example: 'SNS閉じた瞬間、めっちゃ孤独感じるときある。自分の人生がアホらしくなる',
  yesTypes: ['In'],
  noTypes: ['Ro']
},
{
  id: 61,
  question: 'テンション高い人に絡まれると、ついていけなくて逆に引いてしまう',
  example: 'その場では笑っていても、このノリはよ終われって思ってしまう',
  yesTypes: ['In'],
  noTypes: ['Ce']
},
{
  id: 62,
  question: '本音を出すことで距離ができるのが怖い。',
  example: '本音を言い合える関係に憧れるけど、引かれたり嫌われるのが怖くて本音飲み込みがち',
  yesTypes: ['In'],
  noTypes: ['Sh']
},
{
  id: 63,
  question: '会話の途中で沈黙があると、無理につなげようとして変なこと言ってしまう',
  example: '沈黙＝気まずい。なんか喋らなって常に考えてる',
  yesTypes: ['In'],
  noTypes: ['Ce']
},
{
  id: 64,
  question: '自分の言動、行動がどう受け取られるかまで考えるから、何回も確認する。',
  example: 'LINEの返信送る前に何回も読み返して、「やっぱやめよ」ってなること多い',
  yesTypes: ['Sh'],
  noTypes: ['Ro']
},
{
  id: 65,
  question: '強気な自分を演じてしまうのは、本当の自分を見せるのが怖いから。',
  example: '「自信あるように見られたい」けど、内心は弱い',
  yesTypes: ['Sh'],
  noTypes: ['Ce']
},
{
  id: 66,
  question: '褒められたとき、嬉しいよりも「ほんまにそう思ってる？」って疑ってしまう。',
  example: '「可愛いね」って言われても、内心「どうせ社交辞令やろ」って思ってる',
  yesTypes: ['Sh'],
  noTypes: ['In']
},
{
  id: 67,
  question: '信頼してる人にだけ出せる“素”がありすぎて、人前の自分とギャップを感じる。',
  example: '学校ではボケたりふざけたりできひんけど、家の中や仲良い人の前では踊ったり歌ったりボケまくり',
  yesTypes: ['Sh'],
  noTypes: ['Ro']
},
{
  id: 68,
  question: '怒られてなくても「怒らせたかも」って勝手に不安になることがある。',
  example: '先生のテンションが低いと「やば、何かしたかも」って焦る',
  yesTypes: ['Sh'],
  noTypes: ['Ce']
},
{
  id: 69,
  question: '正直な意見聞かせてって言われるのが1番プレッシャーに感じる。',
  example: '“本音出すのが怖いからこそ、普段から建前で守ってるんやけど…”って思う',
  yesTypes: ['Sh'],
  noTypes: ['In']
},
{
  id: 70,
  question: '気を遣いすぎて、自分の意見が分からなくなることがある。',
  example: 'みんなに合わせすぎて「結局自分の意見は何」って混乱する',
  yesTypes: ['Sh'],
  noTypes: ['Ce']
},
{
  id: 71,
  question: '誰かに本気で嫌われるのが怖すぎて、八方美人になる。',
  example: 'ほんまは嫌いやし関わりたくないけど、全員にいい顔して結局疲れる',
  yesTypes: ['Sh'],
  noTypes: ['Ro']
},
{
  id: 72,
  question: '自分のことをちゃんと理解してくれる人なんていないと思ってる。',
  example: '「分かってくれる人はおらん」ってどこかで壁作ってしまってる',
  yesTypes: ['Sh'],
  noTypes: ['In']
},
{
  id: 73,
  question: '課題とかレポートとか見せてって言われがちやけど、ほんまはすごい疲れる',
  example: '期待されてる気がして「ずっと頼られなあかんの？」ってなる',
  yesTypes: ['Sh'],
  noTypes: ['Ce']
},
{
  id: 74,
  question: '物事がうまくいかなかった時、原因追及より先に自分自身を責めてしまう',
  example: 'どんな失敗でも、私はいつもなんでこうなんやろ、、って病む',
  yesTypes: ['Sh'],
  noTypes: ['Ro']
},
{
  id: 75,
  question: '誰かと深く仲良くなるほど、見捨てられるのが怖くなる。',
  example: '信頼できるようになればなるほど「いつか離れていくかも」って怖さも増す',
  yesTypes: ['Sh'],
  noTypes: ['In']
},
{
  id: 76,
  question: '感情を見せること＝弱さだと思ってる部分がある。',
  example: '泣くのとか、ほんまにギリギリまで見せたくない',
  yesTypes: ['Sh'],
  noTypes: ['Ro']
},
{
  id: 77,
  question: '感情よりもまず“事実”を確認しないと気が済まないタイプだと思う。',
  example: '友達の愚痴も「何が起こったか」から整理したくなる',
  yesTypes: ['Ro'],
  noTypes: ['Ce']
},
{
  id: 78,
  question: '感情に流される人を見てると、少し距離を置きたくなる。',
  example: '余計に泣いたり怒ったりする人見ると心配より、「落ち着けよ…」って引いてしまう',
  yesTypes: ['Ro'],
  noTypes: ['In']
},
{
  id: 79,
  question: '「とりあえず気持ち聞いて」って言われるのがちょっと苦手。',
  example: '話聞いてもらうなら“どうして欲しいのか”まで教えてから話してほしい',
  yesTypes: ['Ro'],
  noTypes: ['Sh']
},
{
  id: 80,
  question: '人の感情に共感しきれない自分に、罪悪感を抱いたことがある。',
  example: '「それってそんなに落ち込むことか…？」って思ってしう自分がいる',
  yesTypes: ['Ro'],
  noTypes: ['Ce']
},
{
  id: 81,
  question: '何を話すにも結論がない話は嫌い',
  example: 'オチのない話が続くとイライラしてしまう',
  yesTypes: ['Ro'],
  noTypes: ['Sh']
},
{
  id: 82,
  question: '気持ちや考えは”察する”よりも明確に言葉にして伝えてほしいと感じる',
  example: '機嫌悪い態度になられるより、『今ちょっとイライラしてる』って伝えてほしい',
  yesTypes: ['Ro'],
  noTypes: ['In']
},
{
  id: 83,
  question: '人間関係でも「損得」を無意識に考えてしまうことがある。',
  example: 'この人と絡んでて自分に得あるんかな？って考えがち',
  yesTypes: ['Ro'],
  noTypes: ['Ce']
},
{
  id: 84,
  question: '感情的な行動より、冷静で合理的な行動を優先すべきだ',
  example: '怒ってその場で突っかからずに、自分の中で整理してから冷静に解決できる',
  yesTypes: ['Ro'],
  noTypes: ['Sh']
},
{
  id: 85,
  question: '何かを理解する時、自分で情報を見て倫理的に整理しないと納得できない',
  example: '友達に勧められた物でも、まずネットで調べて口コミ見てからじゃないと買わない',
  yesTypes: ['Ro'],
  noTypes: ['In']
},
{
  id: 86,
  question: '会話の中やドラマなどで、ロジックが破綻してるとすぐ気になってしまう。',
  example: 'ドラマの内容に少しでも矛盾に気づくと、内容に集中できなくなり進めない',
  yesTypes: ['Ro'],
  noTypes: ['Ce']
},
{
  id: 87,
  question: '人に流されなんでも引き受けるより、ちょっと冷たいくらいがちょうどいいと思ってる。',
  example: '頼られすぎるのもしんどいし、サバサバしている方が楽',
  yesTypes: ['Ro'],
  noTypes: ['Sh']
},
{
  id: 88,
  question: '共感が必要な場面でも「でもさ…」って反論したくなることがある。',
  example: 'みんなが味方してる時に「いやでもそれって…」って内心思うことある',
  yesTypes: ['Ro'],
  noTypes: ['In']
},
{
  id: 89,
  question: '「冷たい」って言われるけど、自分では“これが自分の素”やと思ってる。',
  example: '感情表現が少ないせいで誤解されやすい',
  yesTypes: ['Ro'],
  noTypes: ['Sh']
},
{
  id: 90,
  question: '共感してもらえるだけで、内容の正しさなんてどうでもよくなるくらい安心できる',
  example: '「うんうんわかるよ」この一言言ってもらえるだけで、すごい救われる',
  yesTypes: ['Ce'],
  noTypes: ['Ro']
},
{
  id: 91,
  question: '本音と建前を使い分けるのが上手い方やと思う。',
  example: 'ほんまは興味ないけど、『行ってみたい！』って相手に合わせることできる',
  yesTypes: ['Ce'],
  noTypes: ['In']
},
{
  id: 92,
  question: '問題が起きた時、自分が悪いという思考より相手に非があるんじゃ、、って先疑う',
  example: '友達とギクシャクしたら、なんであの子あんな言い方したん？って先に友達攻めがち',
  yesTypes: ['Ce'],
  noTypes: ['Sh']
},
{
  id: 93,
  question: '相手に勝手に期待して、勝手に失望することがある',
  example: '絶対あそぼな、また誘うわ！って言われたのに一向に誘われなくて落ち込む',
  yesTypes: ['Ce'],
  noTypes: ['Ro']
},
{
  id: 94,
  question: '相手の気持ちを優先しすぎて、気づけば自分がしんどい状態になってる',
  example: 'あの子のためって動くけど、結局最終的に自分がしんどくなってる、ボロボロになってる',
  yesTypes: ['Ce'],
  noTypes: ['In']
},
{
  id: 95,
  question: '気持ちをわかって欲しいと思ってるのに、うまく伝えられなくて人知れず傷つく',
  example: '今の気づいて欲しかったな、、。て、伝わらんかった時自分が間違ってたんやって落ち込む',
  yesTypes: ['Ce'],
  noTypes: ['Sh']
},
{
  id: 96,
  question: '人のちょっとした雰囲気や見た目の変化にすぐ気づける',
  example: '髪型とかコスメとかもそうやけど、辛そうやなとか心情にも気づける',
  yesTypes: ['Ce'],
  noTypes: ['Ro']
},
{
  id: 97,
  question: '誰かが怒られているのを見ると、自分のことのように心が痛くなる',
  example: '職場とか学校で怒られてる人見ただけでそわそわする、しんどい',
  yesTypes: ['Ce'],
  noTypes: ['In']
},
{
  id: 98,
  question: '気使わなくても話せるってよく言われる',
  example: 'なんか落ち着くとか安心する存在とか言われる',
  yesTypes: ['Ce'],
  noTypes: ['Sh']
},
{
  id: 99,
  question: '感情が表に出やすくて、自分でもコントロールが難しいときがある。',
  example: '泣くつもりなくても、話してるうちに涙が出てくる',
  yesTypes: ['Ce'],
  noTypes: ['Ro']
},
{
  id: 100,
  question: '言葉にできないモヤモヤを済みとって、代弁するのが得意',
  example: '友達がなんて言っていいかわからんって詰まった時に、すぐ理解して言い当てれる',
  yesTypes: ['Ce'],
  noTypes: ['In']
}]