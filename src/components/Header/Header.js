import React from 'react'
import './Header.css';
import {logo} from '../styled-components/Icons';

const Header = ({title}) => {
  return (
    <div className="header">
      <div className="" alt="logo">
        {logo}
      </div>
      {title}
    </div>
  )
}

export default Header