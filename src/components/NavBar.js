import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const NavBar = () => {
    return (
        <Wrapper>
            <NavLink to= '/recipes/new' style={{paddingRight: '10px'}}>Create New Recipe</NavLink>
            <NavLink to= '/recipes' style={{paddingRight: '10px'}}>Recipes</NavLink>
            <NavLink to= '/' style={{paddingRight: '10px'}}>Home</NavLink>
        </Wrapper>
    )
}

export default NavBar

const Wrapper = styled.div`
  background-color: white;
  text-align:center
`