import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = event => { 
        this.setState({searchTerm: event.target.value})
    }

    searchFriendlyTerm = (searchTerm) => '&query=' + searchTerm.trim().replace(/ /g, "+")

    fetchMovies = e => {
        e.preventDefault()
        fetch(URL + this.searchFriendlyTerm(this.state.searchTerm))
        .then(r => r.json())
        .then(movieData => {
            this.setState({reviews: movieData.results})
        })
    }
    
    render() {
        return(
            <div>
                <h1>Search Reviews</h1>
                <form onSubmit={this.fetchMovies}>
                    <input onChange={this.handleChange} type="text" name="term" value={this.state.term}/>
                    <input type="submit" value="Search"/>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
