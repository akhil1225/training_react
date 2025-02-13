import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import "./global.css"
import Styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <section id={Styles.navBlock}>
        <article>
            <Logo/>
            <Menu/>
        </article>
    </section>
  )
}

export default Navbar