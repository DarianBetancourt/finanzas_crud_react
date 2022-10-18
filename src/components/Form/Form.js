import React, { useState } from 'react';
import './Form.css';

const Form = ({handleAdd}) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () => {
        
        if (!description || !amount){
            alert("Informe el valor y una descripción!");
            return;
        } else if (amount < 1) {
            alert("El valor tiene que ser positivo");
            return;
        }

        const transaction = {
            description: description,
            amount: amount,
            expense: isExpense,
        };

        handleAdd(transaction);
      
        setDescription("");
        setAmount("");
    };

  return (
    <div className='form-container'>
        <div className='form-group'>
            <label> Descripción </label>
            <input 
                className="form-input" 
                value={description} type="text" 
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <label> Valor </label>
            <input 
                className="form-input" 
                value={amount} 
                type="number" 
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <div className='form-group'>
            <input 
                type="radio" 
                id="radioIncome" 
                name="groupRadio" 
                defaultChecked 
                onChange={() => setExpense(!isExpense)}
            />
            <label htmlFor="radioIncome"> Entrada </label>
        
            <input 
                type="radio" 
                id="radioExpenses" 
                name="groupRadio" 
                onChange={() => setExpense(!isExpense)}
            />
            <label htmlFor="radioExpenses"> Salida </label>
        </div>
       <button className="btn" onClick={handleSave}>ADICIONAR</button>

    </div>
  )
}

export default Form