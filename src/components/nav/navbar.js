import React, {useState, useEffect} from 'react';

import { Nav, NavLink, Bars, NavMenu, NavBtn, IconInsta, IconFB, LogoImg } from './navElements';
import logoImg from "../../assets/GalaxyGirlLogo.png"



const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 600) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect( () => {
            if(window.location.pathname === '/'){
                window.addEventListener('scroll', changeNav)
            } else {
                setScrollNav(true)
            }
        }, [])
    
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavLink to='/'>
                    <LogoImg src={logoImg} /> 
                </NavLink>
                <Bars onClick={toggle}/>

                <NavMenu>
                    <NavLink to="/" activeStyle exact strict>Home</NavLink>
                    <NavLink to="/resume" activeStyle strict> CV </NavLink>
                    <NavLink to="/portfolio" activeStyle>Portfolio</NavLink>
                    <NavLink to="/contact" activeStyle>Contact</NavLink>
                </NavMenu>

                <NavBtn>
                <a href="https://www.facebook.com/thegalaxygirl" target="_blank" rel="noreferrer"> <IconFB/> </a>
                <a href="https://www.instagram.com/emmathegalaxygirl/" target="_blank" rel="noreferrer">   <IconInsta/> </a>
                </NavBtn>
                
            </Nav>
            
        </>
    );
};

export default Navbar;
