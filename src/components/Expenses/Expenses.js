import React, {useState} from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
    const [year, setYear] = useState('2020')
    const getFilterData = selectedYear => {
       setYear(selectedYear);
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year; 
    })
    return (
        <Card className = "expenses" >
            <ExpensesFilter selected = { year } onGetFilter = { getFilterData } />
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpensesList items = {filteredExpenses} />
        </Card>
    )
}

export default Expenses
