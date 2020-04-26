import React from 'react'

const produceReview = (reviewDeets) => {
    return (<div className='review' key={reviewDeets.display_title}>
        <h3>{reviewDeets.headline}</h3>
        <p>Movie: {reviewDeets.display_title}</p>
        <p>{reviewDeets.summary_short} 
            <a href="{reviewDeets.link.url}"> {reviewDeets.link.suggested_link_text}</a>
        </p>
    </div>)
}

const MovieReviews = (props) => {
    return(
        <div className='review-list'>
            {props.reviews.map(reviewDeets => produceReview(reviewDeets))}
        </div>
    )
}

export default MovieReviews


