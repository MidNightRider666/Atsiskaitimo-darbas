import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../UI/Button/Button';
import Container from '../UI/Container'
import css from './Header.module.scss';

function Header() {
  return (
    <header>
    <Container className={css.header}>
        <h2 className={css.logo}><img src="https://thumbs.dreamstime.com/b/skill-logo-concept-design-eps-supported-83707473.jpg" alt="" /></h2>
        <nav>   
            <NavLink className={css.navLink} to={'/'}>
                Register
            </NavLink>
            <NavLink className={css.navLink} to={'Login'}>
                Login
            </NavLink>
            <NavLink className={css.navLink} to={'/Home'}>
                Home
            </NavLink> 
            <Button AddFocus>Logout</Button>
        </nav>  
    </Container>
    <hr className='horizontal line'/>
    </header>
  )
}

export default Header