import { Component } from 'react'
import styled from 'styled-components'

class LikeRecipe extends Component {

    state = {
        click: 0
    }

    incrementLike = () => {
        this.setState({click: this.state.click + 1})
    }

    render() {
        return (
            <div>
                <LikeBtn onClick={this.incrementLike}>{this.state.click} ♥︎</LikeBtn>
            </div>
        )
    }
}

export default LikeRecipe

const LikeBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:2px 2px;  
  border: 1px solid #71b406;
  width:20%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`