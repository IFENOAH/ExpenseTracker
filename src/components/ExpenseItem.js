import React from 'react'
import ExpenseDate from './Expenses/ExpenseDate';
import './ExpenseItem.css'
import Card from './UI/Card'

function ExpenseItem( props ) {

    // const expenseDate = new Date(2022, 2, 3);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = '294.67'
    

    return  (

        <Card className = "expense-item" >

            <ExpenseDate date = {props.date} />

            <div className = "expense-item__description">
                <h2>{ props.title }</h2>
                <div className = "expense-item__price">${ props.amount }</div>
            </div>

        </Card>
    )
}

export default ExpenseItem;
