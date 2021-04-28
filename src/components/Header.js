import React from 'react'

const Header = (props) => {
    const { title, img, avg_rating } = props.attributes
    const total = props.reviews.length

    return (
        <div>
            <h1>{title}</h1> <img src={img} alt={title} />
            <div>
                <div className="totalReviews">
                    {total} User Reviews
                </div>
                <div className="starRating">
                    
                </div>
                <div className="totalOutOf">
                    {avg_rating} out of 5
                </div>
            </div>
        </div>
    )
}

export default Header