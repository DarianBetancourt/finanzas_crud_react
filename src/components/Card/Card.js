import React from 'react'
import './Card.css';
import {DollarIcon} from '../styled-components/Icons';

const Card = ({title,total,icon}) => {
    return (
        <div className='card-container'>
            <div className='card-header'>
                <div>
                    {title} 
                </div>
                <div>
                    {icon}
                </div>
            </div>
            <div className='card-body'>
                <div className='total'>
                    {DollarIcon}
                    {total}
                </div>
                
            </div>

    
        </div>
    )
}

export default Card