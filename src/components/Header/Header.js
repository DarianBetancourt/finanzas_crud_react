import React from 'react'
import './Header.css';

const Header = ({title}) => {
  return (
    <div className="header">{title}</div>
  )
}

export default Header