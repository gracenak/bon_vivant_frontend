import { Component } from 'react'
import { connect } from 'react-redux'
import { addReview } from '../actions/addReview'

class ReviewInput extends Component {

    state = {
        comment: '',
        rating: '5'
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addReview(this.state, this.props.recipe.id)
        this.setState({
            comment: '',
            rating: '',
            user_id: ''
        })
    }

    render() {
        return(
            <div>
            <h3>Review Form</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="comment" placeholder="comment" value={this.state.comment} onChange={this.handleOnChange}/>
                    <label> Rating</label>
                    <select name="rating" value={this.state.rating} onChange={this.handleOnChange}>
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                    <input type="text" name="user_id" placeholder="User" value={this.state.user_id} onChange={this.handleOnChange}/>

                    <input type="submit" value="Submit" />
                </form>
            </div>

        )
    }
}

export default connect(null, { addReview })(ReviewInput) 