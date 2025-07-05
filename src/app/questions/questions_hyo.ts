export type Question = {
  id: number;
  question: string;
  example: string;
  yesTypes: string[];
  noTypes: string[];
};

export const questions: Question[] = [
  
  
    {
    "id": 1,
    "question": "周りの空気を読んで自分の言動を調整することが多い。",
    "example": "「これ言ったら雰囲気悪くなるかな？」って発言する前に自然と気をつかってしまう。",
    "yesTypes": ["La"],
    "noTypes": ["St"]
  },
  {
    "id": 2,
    "question": "人からよく「優しいね」って言われる。",
    "example": "困ってる人が知らない人でも助けたい。",
    "yesTypes": ["Tf"],
    "noTypes": ["Cl"]
  },
  {
    "id": 3,
    "question": "グループの輪の中心にいることが多い。",
    "example": "気づいたら自分の周りに人が集まってて、自然と盛り上げ役になってることが多い。",
    "yesTypes": ["La"],
    "noTypes": ["Hu"]
  },
  {
    "id": 4,
    "question": "場の雰囲気を壊すのがすごく怖いと感じる。",
    "example": "気まずい空気が苦手で、無理にでも盛り上げようとする。",
    "yesTypes": ["La"],
    "noTypes": ["Vi"]
  },
  {
    "id": 5,
    "question": "みんなにいい顔をしてしまう。",
    "example": "本音では「それは違うやろ」って思っても、相手に合わせて肯定しがち。",
    "yesTypes": ["Tf"],
    "noTypes": ["St"]
  },
  {
    "id": 6,
    "question": "理屈よりも感情で動くことが多い。",
    "example": "「なんかムカつく」だけで態度に出てしまうときがある。",
    "yesTypes": ["St"],
    "noTypes": ["Cl"]
  },
  {
    "id": 7,
    "question": "感情が声や顔に出にくい方やと自負している。",
    "example": "心配してるのに、表情や口調に出ないだけで無関心や他人事やね、など言われがち。",
    "yesTypes": ["Cl"],
    "noTypes": ["Hu"]
  },
  {
    "id": 8,
    "question": "自分のことよりも、相手のことを優先してしまう。",
    "example": "体調悪くても「大丈夫？」って聞かれると、先に相手を気づかう。",
    "yesTypes": ["Tf"],
    "noTypes": ["Vi"]
  },
  {
    "id": 9,
    "question": "新しいことや変化にワクワクしやすい。",
    "example": "新しい環境や初対面の人に対して、不安より楽しみが勝つ",
    "yesTypes": ["Vi"],
    "noTypes": ["Cl"]
  },
  {
    "id": 10,
    "question": "相手の反応を気にして、本音を飲み込むことがある。",
    "example": "相手の意見と真逆であっても「ほんまは違うけど…めんどいしまあいっか」ってなる。",
    "yesTypes": ["Tf"],
    "noTypes": ["St"]
  },
  {
    "id": 11,
    "question": "意見を求められると、みんなの気持ちも考えてしまう。",
    "example": "「自分はこう思うけど、あの子はこう思ってるやろうし…」って脳内会議してみんなが納得する意見探しがち。",
    "yesTypes": ["Tf"],
    "noTypes": ["St"]
  },
  {
    "id": 12,
    "question": "他人に対して怒りを感じることはほとんどない。",
    "example": "「まあ仕方ないよな」って流して済ます。",
    "yesTypes": ["Hu"],
    "noTypes": ["St"]
  },
  {
    "id": 13,
    "question": "自分の気持ちよりも場の空気を優先することが多い。",
    "example": "「反対だけど…ここで言ったら空気壊すしな...」って気使う。",
    "yesTypes": ["La"],
    "noTypes": ["Cl"]
  },
  {
    "id": 14,
    "question": "どっちにするか聞かれた時、ほんまは意見あるけどどっちでもいいよと言いがち。",
    "example": "ほんまはしたいこと、行きたいとこあるけど相手の意見に合わせがち。",
    "yesTypes": ["Tf"],
    "noTypes": ["Cl"]
  },
  {
    "id": 15,
    "question": "相手の感情をすぐ察知してしまう。",
    "example": "みんなが楽しそうにしていても、あの子の笑顔ぎこちないなってすぐわかる",
    "yesTypes": ["Hu"],
    "noTypes": ["Cl"]
  },
  {
    "id": 16,
    "question": "「ノリ」で行動を決めることが多い。",
    "example": "旅行とかガチガチにスケジュール立てずにとりあえず行ってみてから考える派",
    "yesTypes": ["Vi"],
    "noTypes": ["Tf"]
  },
  {
    "id": 17,
    "question": "人前で目立つことに抵抗がない。",
    "example": "グループワークで誰が発表する？ってなったら、「やるで！」ってすぐ言える。",
    "yesTypes": ["La"],
    "noTypes": ["Hu"]
  },
  {
    "id": 18,
    "question": "良い意味でも悪い意味でもわかりやすく感情が顔や声に出てしまう。",
    "example": "テンション高いとき、声のトーン爆上がりしてる。逆に機嫌悪いときは声のトーン低い",
    "yesTypes": ["St"],
    "noTypes": ["Cl"]
  },
  {
    "id": 19,
    "question": "「なにかを変えたい、改善したい」ってよく思う。",
    "example": "今の環境に違和感感じたら、すぐ変えたくなる。急に部屋の模様替えしたり。",
    "yesTypes": ["Vi"],
    "noTypes": ["La"]
  },
  {
    "id": 20,
    "question": "会話で相手の話を遮ってしまうことがある。",
    "example": "相手が話していても、その話題を気づいたら自分の話に変えてしまいがち",
    "yesTypes": ["St"],
    "noTypes": ["Tf"]
  },
  {
    "id": 21,
    "question": "自分が話すより、相手の話を聞く方が多い。",
    "example": "自分の話題に繋げることもなく、「それでどうなったん？」って聞き手に回りがち。",
    "yesTypes": ["Tf"],
    "noTypes": ["St"]
  },
  {
    "id": 22,
    "question": "「冷静やね」って言われることが多い。",
    "example": "周りが焦ってても、自分はどこか落ち着いて動じない。いつでも冷静沈着！！",
    "yesTypes": ["Cl"],
    "noTypes": ["St"]
  },
  {
    "id": 23,
    "question": "周りに流されずに、自分の違和感を言える。",
    "example": "周りがが間違ったことをしようとしていても「え、でもそれってほんまに大丈夫？」って指摘できる。",
    "yesTypes": ["Cl"],
    "noTypes": ["Tf"]
  },
  {
    "id": 24,
    "question": "感情で行動して後悔したことがある。",
    "example": "喧嘩の勢いで「もう知らん」って言ったけど、５分後には後悔してる",
    "yesTypes": ["St"],
    "noTypes": ["Cl"]
  },
  {
    "id": 25,
    "question": "人の表情や声のトーンがすぐ気になる。",
    "example": "「今の返事、ちょっと素っ気なかったな、なんかしたかな」とか気にする。",
    "yesTypes": ["Hu"],
    "noTypes": ["Vi"]
  },
  {
    "id": 26,
    "question": "自分の価値観を大事にしてる方だと思う。",
    "example": "他人に指摘されても、自分の意見は曲げたくない。",
    "yesTypes": ["Cl"],
    "noTypes": ["Tf"]
  },
  {
    "id": 27,
    "question": "決め役を回されることが多い",
    "example": "話まとめたり、進行役になるのをよく頼まれる。気づいたらなってる",
    "yesTypes": ["La"],
    "noTypes": ["Hu"]
  },
  {
    "id": 28,
    "question": "自分の考えを説明するのがうまい方だと思う。",
    "example": "感覚じゃなくて、「理由」とか「伝え方」をちゃんと考えて落ち着いて話し合いができる。",
    "yesTypes": ["Cl"],
    "noTypes": ["St"]
  },
  {
    "id": 29,
    "question": "チーム行動より、単独行動の方が気楽。",
    "example": "一人で動いた方がスムーズやし、気疲れしないし気楽。",
    "yesTypes": ["Vi"],
    "noTypes": ["Tf"]
  },
  {
    "id": 30,
    "question": "やりたいことを、すぐ行動に移すタイプだ。",
    "example": "思いついたら「とりあえずやってみる」が口癖。",
    "yesTypes": ["Vi"],
    "noTypes": ["Cl"]
  },
  {
    "id": 31,
    "question": "自分が悪くなくても、先に謝ってしまう",
    "example": "ほんまは向こうが悪いのに、場を納めるために先に折れる",
    "yesTypes": ["Tf"],
    "noTypes": ["St"]
  },
  {
    "id": 32,
    "question": "他人の感情に引っ張られて、自分の気分も変わりやすい。",
    "example": "周りがピリついてたら、自分もイライラしてくる。",
    "yesTypes": ["Hu"],
    "noTypes": ["Cl"]
  },
  {
    "id": 33,
    "question": "「なんでそうなるん？」って論理で詰められるのが苦手。",
    "example": "考えよりも気持ちを理解してほしい。",
    "yesTypes": ["Hu"],
    "noTypes": ["Cl"]
  },
  {
    "id": 34,
    "question": "相談された時、まず気持ちよりも解決策や原因を考えてしまう",
    "example": "つらかったなあって寄り添うより先に、まず話し合った方がいいんちゃう？って対策考える",
    "yesTypes": ["Cl"],
    "noTypes": ["Hu"]
  },
  {
    "id": 35,
    "question": "自分の中に「正解」や「理屈」がある方だと思う。",
    "example": "「こうするべき」っていう自分だけの基準がある。",
    "yesTypes": ["Cl"],
    "noTypes": ["Vi"]
  },
  {
    "id": 36,
    "question": "周りと違うことをしてもあまり気にしない。",
    "example": "「それ浮いてるよ？」って言われても別に気にならん。",
    "yesTypes": ["Vi"],
    "noTypes": ["La"]
  },
  {
    "id": 37,
    "question": "人前で話す時、緊張しにくい。",
    "example": "自然体で話せる。むしろ目立つのは好き。",
    "yesTypes": ["La"],
    "noTypes": ["Hu"]
  },
  {
    "id": 38,
    "question": "自分の意見をハッキリ言ったことで、揉めた経験がある。",
    "example": "「それは違うやろ」と指摘したことで場が凍ったことある。",
    "yesTypes": ["St"],
    "noTypes": ["Tf"]
  },
  {
    "id": 39,
    "question": "つい先のことを考えすぎて動けなくなることがある。",
    "example": "「もしこうなったら…」って想像しすぎて足が止まる、病む。",
    "yesTypes": ["Cl"],
    "noTypes": ["Vi"]
  },
  {
    "id": 40,
    "question": "「それ面白そうやん」って直感で動いた結果、成功したことがある。",
    "example": "ノリで始めたことが人生変えたり、新しい思考を得た経験ある。",
    "yesTypes": ["Vi"],
    "noTypes": ["Cl"]
  },
  {
    "id": 41,
    "question": "自分と違う意見でも「それもアリかも」と思えることが多い。",
    "example": "「なるほど、そういう考えもあるのか」って受け止められる。",
    "yesTypes": ["Hu"],
    "noTypes": ["St"]
  },
  {
    "id": 42,
    "question": "妄想や想像や、夢で見たことなどから現実の行動に移せる",
    "example": "急に自分でブランド立ち上げたらカッコ良さそう！と思って、実際にロゴを考え出す。",
    "yesTypes": ["Vi"],
    "noTypes": ["Cl"]
  },
  {
    "id": 43,
    "question": "snsはありのままの自分や本音をそのまま発信できる",
    "example": "思ったこと、感情をそのまま投稿する。多少尖った内容でも気にせずみんなに共有。",
    "yesTypes": ["St"],
    "noTypes": ["Tf"]
  },
  {
    "id": 44,
    "question": "論理的に説明するのが得意なほうだ。",
    "example": "理由を聞かれたら、「なぜそうなのか」を即座に言語化できる。",
    "yesTypes": ["Cl"],
    "noTypes": ["Hu"]
  },
  {
    "id": 45,
    "question": "感情的になって失敗した経験がある。",
    "example": "「あの時ちょっと言いすぎたな…」って後悔したことある。",
    "yesTypes": ["St"],
    "noTypes": ["Cl"]
  },
  {
    "id": 46,
    "question": "話の展開やオチを読んで先回りすることが多い。",
    "example": "「次こうなるやろな」って考えながら会話してる。",
    "yesTypes": ["Cl"],
    "noTypes": ["Vi"]
  },
  {
    "id": 47,
    "question": "初対面でもわりと積極的に話せる。",
    "example": "新しい環境で『初めまして〜』って自分からすぐ話しかけることができるタイプ。",
    "yesTypes": ["La"],
    "noTypes": ["Tf"]
  },
  {
    "id": 48,
    "question": "深い話より、ぶっ飛んだ妄想トークの方がテンション上がる",
    "example": "現実的な話より想像！『推しと幼馴染やったらどうする！？』とか",
    "yesTypes": ["Vi"],
    "noTypes": ["Hu"]
  },
  {
    "id": 49,
    "question": "『変わってるね』って言われても、ちょっと嬉しい自分がいる",
    "example": "人と違うことに誇りを感じる。普通よりいいやん！ってマインド。",
    "yesTypes": ["Vi"],
    "noTypes": ["Cl"]
  },
  {
    "id": 50,
    "question": "人からよく「しっかりしてるね」と言われる。",
    "example": "ミス少ないし、指示係とか任されがち。",
    "yesTypes": ["Cl"],
    "noTypes": ["La"]
  }
]
