
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const NavBar = () => {
    return (
        <Wrapper>
            <NavLink to= '/recipes' style={{paddingRight: '20px'}}>Recipes</NavLink>
            <NavLink to= '/' style={{paddingRight: '20px'}}>Home</NavLink>
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
