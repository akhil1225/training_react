/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./navbar.module.css"

const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
        <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/classrooms">Classrooms</Link></li>
            <li><Link to="/assessments">Assessments</Link></li>
            <li><Link to="/store">Store</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
        </ul>
    </div>
  )
}

export default Menu