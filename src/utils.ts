import { RootCategory } from './models/Category'

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
})

export function diffInMonths(d1: any, d2: any) {
  var d1Y = d1.getFullYear()
  var d2Y = d2.getFullYear()
  var d1M = d1.getMonth()
  var d2M = d2.getMonth()

  return Math.abs(d2M + 12 * d2Y - (d1M + 12 * d1Y))
}

export const getMonthlyAmount = ({
  goal_target_month,
  goal_under_funded,
  goal_overall_left,
  goal_type,
  goal_target
}: RootCategory['categories'][0]) => {
  // 1. Determine if it is a non-monthly goal
  if (!goal_target_month && goal_type !== 'TB') return goal_target

  const alreadyPaidForMonth = goal_under_funded === 0

  const monthsLeft =
    diffInMonths(new Date(goal_target_month), new Date()) +
    1 +
    Number(!alreadyPaidForMonth)

  // 2. Determine if it is alread paid for the month
  const monthlyAmount = goal_overall_left / monthsLeft
  return monthlyAmount
}
