import React from 'react'
import './Resume.css';
import Card from '../Card/Card';
import {ArrowDownIcon, ArrowUpIcon, DollarIcon} from '../styled-components/Icons';

const Resume = () => {
  return (
    <div className='resume'>
        <Card title="Entradas" total={1000} icon={ArrowDownIcon}/>
        <Card title="Salidas" total={1000} icon={ArrowUpIcon}/>
        <Card title="Total" total={1000} icon={DollarIcon}/>
    </div>
  )
}

export default Resume