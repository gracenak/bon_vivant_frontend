
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const NavBar = () => {
    return (
    <Wrapper>
        <NavWrapper>
            <LinkWrapper>
                <NavLink to= '/'>Home</NavLink>
                <NavLink to= '/recipes'>Recipes</NavLink> 
            </LinkWrapper>
        </NavWrapper>
    </Wrapper>
    )
}

export default NavBar

const Wrapper = styled.div`
  background-color: white;
  text-align:center;
  color: black;
  font-family: 'Poppins-Bold';
`

const LinkWrapper = styled.div `
    
 a {
    float:left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
 a:hover:not(.active) {
    background-color: #111;
  }
  
  .active {
    background-color: #4CAF50;
  }
  `

  const NavWrapper = styled.div` 
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  `