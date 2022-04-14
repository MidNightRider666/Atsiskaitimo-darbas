import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../UI/Container'
import css from './Header.module.css';

function Header() {
  return (
    <header>
    <Container className={css.header}>
        <nav>   
            <NavLink className={css.navLink} to={'/'}>
                Home
            </NavLink>
            <NavLink className={css.navLink} to={'Register'}>
                Register
            </NavLink>
            <NavLink className={css.navLink} to={'Login'}>
                Login
            </NavLink>
            <NavLink className={css.navLink} to={'Add'}>
                Add class
            </NavLink>    
        </nav>  
    </Container>
    <hr className='horizontal line'/>
    </header>
  )
}

export default Header