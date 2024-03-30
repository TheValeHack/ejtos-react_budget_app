import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = (props) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { dispatch, currency } = useContext(AppContext);

    function handleShow(){
        setShowDropdown(!showDropdown)
    }
    function normalizeCurrency(curr){
        const currPrefix = {
            "$": "Dollar",
            "£": "Pound",
            "€": "Euro",
            "₹": "Ruppee"
        }
        if(Object.keys(currPrefix).includes(curr)){
            return `${curr} ${currPrefix[curr]}`
        } else {
            return curr
        }
    }
    function handleCurrency(curr){
        dispatch({
            type: "CHG_CURRENCY",
            payload: curr
        });
        handleShow();
    }
    const buttonStyle = {
        "background": "#a5e0a1",
        "color": "white"
    }
    const dropdownStyle = {
        "background": "#a5e0a1"
    }

    return (
        <div className="dropdown">
            <button className="btn dropdown-toggle" style={buttonStyle} type="button" onClick={handleShow}>
                Currency ({normalizeCurrency(currency)})
            </button>
            <div className={"dropdown-menu " + (showDropdown ? "show" : "")}  style={dropdownStyle} id="dropdownMenuButton">
                <a className="dropdown-item" href="#" onClick={() => handleCurrency("$")}>$ Dollar</a>
                <a className="dropdown-item" href="#" onClick={() => handleCurrency("£")}>£ Pound</a>
                <a className="dropdown-item" href="#" onClick={() => handleCurrency("€")}>€ Euro</a>
                <a className="dropdown-item" href="#" onClick={() => handleCurrency("₹")}>₹ Ruppee</a>
            </div>
        </div>
    )
}

export default CurrencyDropdown;