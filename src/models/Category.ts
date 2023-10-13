export interface RootCategory {
  id: string
  name: string
  hidden: boolean
  deleted: boolean
  categories: (
    | Category
    | Categories2
    | Categories3
    | Categories4
    | Categories5
    | Categories6
  )[]
}

interface Categories6 {
  id: string
  category_group_id: string
  name: string
  hidden: boolean
  original_category_group_id?: any
  note?: any
  budgeted: number
  activity: number
  balance: number
  goal_type: string
  goal_creation_month: string
  goal_target: number
  goal_target_month?: string
  goal_percentage_complete: number
  goal_months_to_budget: number
  goal_under_funded: number
  goal_overall_funded: number
  goal_overall_left: number
  deleted: boolean
}

interface Categories5 {
  id: string
  category_group_id: string
  name: string
  hidden: boolean
  original_category_group_id?: any
  note?: any
  budgeted: number
  activity: number
  balance: number
  goal_type?: string
  goal_creation_month?: string
  goal_target: number
  goal_target_month?: string
  goal_percentage_complete?: number
  goal_months_to_budget?: number
  goal_under_funded?: number
  goal_overall_funded?: number
  goal_overall_left?: number
  deleted: boolean
}

interface Categories4 {
  id: string
  category_group_id: string
  name: string
  hidden: boolean
  original_category_group_id?: any
  note?: string
  budgeted: number
  activity: number
  balance: number
  goal_type: string
  goal_creation_month: string
  goal_target: number
  goal_target_month?: any
  goal_percentage_complete?: number
  goal_months_to_budget?: number
  goal_under_funded?: number
  goal_overall_funded?: number
  goal_overall_left?: number
  deleted: boolean
}

interface Categories3 {
  id: string
  category_group_id: string
  name: string
  hidden: boolean
  original_category_group_id?: any
  note?: any
  budgeted: number
  activity: number
  balance: number
  goal_type?: any
  goal_creation_month?: any
  goal_target: number
  goal_target_month?: any
  goal_percentage_complete?: any
  goal_months_to_budget?: any
  goal_under_funded?: any
  goal_overall_funded?: any
  goal_overall_left?: any
  deleted: boolean
}

interface Categories2 {
  id: string
  category_group_id: string
  name: string
  hidden: boolean
  original_category_group_id?: any
  note?: any
  budgeted: number
  activity: number
  balance: number
  goal_type: string
  goal_creation_month: string
  goal_target: number
  goal_target_month?: string
  goal_percentage_complete?: number
  goal_months_to_budget?: number
  goal_under_funded?: number
  goal_overall_funded?: number
  goal_overall_left?: number
  deleted: boolean
}

interface Category {
  id: string
  category_group_id: string
  name: string
  hidden: boolean
  original_category_group_id?: any
  note?: any
  budgeted: number
  activity: number
  balance: number
  goal_type: string
  goal_creation_month: string
  goal_target: number
  goal_target_month?: any
  goal_percentage_complete: number
  goal_months_to_budget: number
  goal_under_funded: number
  goal_overall_funded: number
  goal_overall_left: number
  deleted: boolean
}
