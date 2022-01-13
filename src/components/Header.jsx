import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
import styled from 'styled-components'



const NavBar=styled.nav`
height:60px;
background:transparent;
padding:0rem calc((100vw-1300px)/2);
display:flex;
justify-content:space-between;
align-items:center;
`;
const Logo=styled(NavLink)`
color:#ffffff;
padding-left:1rem;
text-decoration:none;
font-size:1.5rem;
font-weight:bold;
font-style:italic;
`;
const NavItems=styled.div``;
 const NavbarLink=styled(NavLink)`
 color:#ffffff;
 padding:1rem;
 text-decoration:none;
`;

const Header = () => {
    
    return (
        <NavBar>
            <Logo to='/'>Animals</Logo>
            <NavItems>
                <NavbarLink to='/'>Home</NavbarLink>
                <NavbarLink to='/about'>About</NavbarLink>
                <NavbarLink to='/services'>Services</NavbarLink>
            </NavItems>
            <Outlet/>
        </NavBar>
    )
}

export default Header
