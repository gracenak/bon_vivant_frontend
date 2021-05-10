import React from 'react'
import styled from "styled-components";

const Home = () => {
    return(
        <Welcome>
            <Header>
                <h1>Bon Vivant</h1>
                <Subheader>/ˌbän vēˈvänt/</Subheader><br></br>
                <Subheader2>from bon (“good”) + vivant (“person who is living”), + vivre (“to live”).</Subheader2><br></br>
                <img src="https://i.pinimg.com/originals/3e/7a/08/3e7a08b130a6eb6ef1c923fbe13dbdf5.jpg" width = "300" height = "300" alt='Home'/>
            </Header>
        </Welcome>
    )
}

export default Home

const Welcome = styled.div`
 body {
  background-color: #f6f1f0;
 }
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #f6f1f0;
`

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
      font-size: 42px;
  }
`

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Subheader2 = styled.div`
  font-weight: 300;
  font-size: 20px;
  font-style: italic
`