import Box from '@mui/material/Box'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { formatter, getMonthlyAmount } from '../utils'
import { RootCategory } from '../models/Category'

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Category', width: 180 },
  {
    field: 'budgeted',
    headerName: 'Assigned This Month',
    width: 150,
    valueFormatter: (params) => formatter.format(params.value / 1000)
  },
  {
    field: 'monthlyBudget',
    headerName: 'Monthly Budget',
    width: 150,
    type: 'number',
    valueFormatter: (params) => formatter.format(params.value / 1000)
  },
  { field: 'id', headerName: 'id', width: 300 }
]

export default function BudgetGrid() {
  const [categories, setCategories] = useState<RootCategory[]>([])

  useEffect(() => {
    ;(async () => {
      const { data: config } = await axios.get('http://localhost:8080/ynab')
      const { data } = await axios.get(
        `${decodeURI(config.baseURL)}budgets/${config.budgetId}/categories`,
        {
          headers: {
            Authorization: config.accessToken
          }
        }
      )
      const categories = data.data.category_groups
      console.log(
        '🚀 ~ file: DataGrid.tsx ~ line 207 ~ ; ~ categories',
        categories
      )
      setCategories(categories)
    })()
  }, [])

  const rows = categories.flatMap((category) => {
    return category.categories

      .map((cat) => {
        return {
          ...cat,
          id: cat.id,
          name: cat.name,
          budgeted: cat.budgeted,
          balance: cat.balance,
          monthlyBudget: getMonthlyAmount(cat)
        }
      })
      ?.filter(
        (r) =>
          ![
            'BofA Credit Card',
            'Chase CC',
            'Inflow: Ready to Assign',
            'Uncategorized'
          ].includes(r.name)
      )
  })
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        initialState={{
          sorting: {
            sortModel: [{ field: 'monthlyBudget', sort: 'desc' }]
          }
        }}
      />
    </Box>
  )
}
