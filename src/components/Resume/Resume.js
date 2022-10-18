import React, { useState, useEffect } from 'react'
import './Resume.css';
import Card from '../Card/Card';
import {ArrowDownIcon, ArrowUpIcon, DollarIcon} from '../styled-components/Icons';

const Resume = ({transactions}) => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

   useEffect(() => {
    const amountExpense = transactions
    .filter((item) => item.expense)
    .map((transaction) => Number(transaction.amount));
    
    const amountIncome = transactions
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expenseCalc = amountExpense.reduce((a,b) => a+b,0).toFixed(2);
    const incomeCalc = amountIncome.reduce((a,b) => a+b,0).toFixed(2);
    const totalCalc = (incomeCalc - expenseCalc).toFixed(2);

    setIncome(incomeCalc);
    setExpense(expenseCalc);
    setTotal(totalCalc);
  })

  return (
    <div className='resume'>
        <Card title="Entradas" total={income} icon={ArrowDownIcon}/>
        <Card title="Salidas" total={expense} icon={ArrowUpIcon}/>
        <Card title="Total" total={total} icon={DollarIcon}/>
    </div>
  )
}

export default Resume