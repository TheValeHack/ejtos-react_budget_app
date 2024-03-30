import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        const newBudget = event.target.value;
        const totalExpense = expenses.reduce((total, item) => {
            return total + item.cost;
        }, 0)
        if(newBudget < totalExpense){
            alert("You cannot reduce the budget value lower than the spending")
        } else if (newBudget > 20000){
            alert("The value cannot exceed remaining funds £"+(budget-totalExpense))
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            })
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</span>
</div>
    );
};
export default Budget;