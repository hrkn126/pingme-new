export type ResultInfo = {
  type: string
  nickname: string
  emoji: string
}

const resultList: ResultInfo[] = [
  { type: "LaCe", nickname: "愛星士", emoji: "🎀🌟" },
  { type: "LaIn", nickname: "宝匠", emoji: "✨🧷" },
  { type: "LaRo", nickname: "論演士", emoji: "🎤📐" },
  { type: "LaSh", nickname: "幻匠", emoji: "🎭🌫️" },

  { type: "ClCe", nickname: "氷読士", emoji: "❄️🔍" },
  { type: "ClIn", nickname: "冷理士", emoji: "🧊📡" },
  { type: "ClRo", nickname: "論戦士", emoji: "🧠🛡️" },
  { type: "ClSh", nickname: "影導士", emoji: "🌫️🕶" },

  { type: "StCe", nickname: "真意士", emoji: "💢💧" },
  { type: "StIn", nickname: "素直者", emoji: "📉🤖" },
  { type: "StRo", nickname: "剛構士", emoji: "🏗️📦" },
  { type: "StSh", nickname: "静工士", emoji: "🔧🕳️" },

  { type: "TfCe", nickname: "癒導士", emoji: "🍀🫧" },
  { type: "TfIn", nickname: "感整士", emoji: "🪞💫" },
  { type: "TfRo", nickname: "共論士", emoji: "🧮💌" },
  { type: "TfSh", nickname: "内省者", emoji: "🙇‍♀️🔁" },

  { type: "HuCe", nickname: "賢導士", emoji: "🌍🧚" },
  { type: "HuIn", nickname: "心読士", emoji: "💞📖" },
  { type: "HuRo", nickname: "哲修士", emoji: "🧘‍♂️🧭" },
  { type: "HuSh", nickname: "闇癒士", emoji: "🌧️🫂" },

  { type: "ViCe", nickname: "直感士", emoji: "🔮🌙" },
  { type: "ViIn", nickname: "夢描士", emoji: "🪐📡" },
  { type: "ViRo", nickname: "造形士", emoji: "📊📍" },
  { type: "ViSh", nickname: "予知士", emoji: "🌒🦉" }
]

export function getResultInfo(type: string): ResultInfo | undefined {
  return resultList.find((result) => result.type === type)
}
