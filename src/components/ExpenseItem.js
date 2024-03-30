import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const increaseStyle = {
        "background": "#69aa66",
        "color": "white",
        "padding": "2px 10px",
        "border": "none",
        "font-size": "20px",
        "font-weight":  "bold",
        "border-radius": "50%"
    }
    const decreaseStyle = {
        "background": "#a13529",
        "color": "white",
        "padding": "2px 15px",
        "border": "none",
        "font-size": "20px",
        "font-weight":  "bold",
        "border-radius": "50%"
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={increaseStyle}>+</button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} style={decreaseStyle}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;