import React from 'react'
import {ArrowDownIcon, ArrowUpIcon ,TrashIcon} from '../styled-components/Icons';
import './GridItem.css';

const GridItem = ({ item, onDelete }) => {
  return (
    <tr className={item.expense ? "expense" : "income"}>
      <td>{item.description}</td>
      <td>{item.amount}</td>
      <td>
        {item.expense ? (
            <label className="label-icon-Income">
                {ArrowDownIcon}
            </label>
        ) : (
            <label className="label-icon-Expense">
                {ArrowUpIcon}
            </label>
        )}
      </td>
      <td>
        <button className="trash-button" onClick={() => onDelete(item.id)}>
            {TrashIcon}
        </button>
      </td>
    </tr>
  )
}

export default GridItem