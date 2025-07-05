import { questions as hyoQuestions } from "../app/questions/questions_hyo"
import { questions as uraQuestions } from "../app/questions/questions_ura"

export default function calculateFinalType(userAnswers: number[]): string {
  const typeScores: Record<string, number> = {}

  hyoQuestions.forEach((q, i) => {
    const answer = userAnswers[i]
    const targetTypes = answer > 0 ? q.yesTypes : q.noTypes
    const point = Math.abs(answer)
    targetTypes.forEach(type => {
      typeScores[type] = (typeScores[type] || 0) + point
    })
  })

  uraQuestions.forEach((q, i) => {
    const answer = userAnswers[i + 50]
    const targetTypes = answer > 0 ? q.yesTypes : q.noTypes
    const point = Math.abs(answer)
    targetTypes.forEach(type => {
      typeScores[type] = (typeScores[type] || 0) + point
    })
  })

  const hyoTypes = ["La", "Cl", "St", "Tf", "Hu", "Vi"]
  const maxHyo = hyoTypes.reduce((max, curr) =>
    (typeScores[curr] || 0) > (typeScores[max] || 0) ? curr : max
  , hyoTypes[0])

  const uraTypes = ["In", "Ro", "Ce", "Sh"]
  const maxUra = uraTypes.reduce((max, curr) =>
    (typeScores[curr] || 0) > (typeScores[max] || 0) ? curr : max
  , uraTypes[0])

  return `${maxHyo}${maxUra}`
}
