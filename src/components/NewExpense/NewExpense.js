import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

function NewExpense(props) {
  const [show, setShow] = useState(false)
  const handleShow=()=>{
    setShow(true)
  }
  const removeForm= ()=>{
    setShow(false)
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense( expenseData );
    setShow(false);
  };
  return (
      <div className = "new-expense">
        { show && ( 
          <ExpenseForm 
            onSaveExpenseData = { saveExpenseDataHandler } 
            onRemoveForm = {removeForm} 
          /> 
        )}
          { !show && (
          <button onClick= {handleShow}>Add New Expense</button> 
          )}
      </div>
  )
}

export default NewExpense;
