import { Component } from 'react'
import styled from 'styled-components'

class BookmarkRecipe extends Component {
    state = {
        bookmark: '☆'
    }

    handleBookmark = () => {
        let currentStatus = this.state.bookmark === '☆' ? '★' : '☆'
        this.setState({bookmark: currentStatus})

    }

    render () {
        return (
            <FavBtn onClick={this.handleBookmark}>{this.state.bookmark}</FavBtn>
        )
    }
}

export default BookmarkRecipe

const FavBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:2px 2px;  
  border: 1px solid #71b406;
  width:17%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`