import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            movies: [
            {
                "name": "Jaws",
                "rating": "PG",
                "synopsis": "A killer shark terrorizes a sleepy town beach",
                "genre": "Horror",
                "reviews": [
                    {"review": "I thought this movie was really scary and exciting",
                     "stars": "4"},
                    {"review": "This movie was boring",
                     "stars": "1"},
                    {"review": "This movie was the best movie I ever saw",
                    "stars": "5"}
                ]
            },
            {
                "name": "The Hangover",
                "rating": "R",
                "synopsis": "Raunchy comedy about a crazy bachelor party",
                "genre": "Comedy",
                "reviews": [
                    {"review": "This was the funniest movie I ever saw",
                    "stars": "5"},
                    {"review": "Very low-brow -way beneath me",
                    "stars": "2"},
                    {"review": "The guy with the beard was really hot",
                    "stars": "4"}
                ]
            },
            {
                "name": "Super Size Me",
                "rating": "PG-13",
                "synopsis": "A guy eats fast food 24x7 in an attempt to kill himself",
                "genre": "Documentary",
                "reviews": [
                    {"review": "This guy was trying to commit suicide with fast food.  I have to commend him.",
                    "stars": "3"},
                    {"review": "This movie was disgusting",
                    "stars": "1"},
                    {"review": "There are no words. The guy almost died",
                    "stars": "5"}
                ]
            }]
        }
        this.addReview = this.addReview.bind(this);
    }

    // The addReview function accepts a movie name, text of a new review, and the stars for a new review.
    // it loops through the previous state's list of movies and when there is a match, it returns back the properties
    // of the previous state as well as a new array of reviews that includes the previous list of reviews plus the new one
    // If the movie isn't the same, it simply returns back the movie itself.
    addReview = (movieName, reviewText, stars) => {
        this.setState(prevState => {
            const updatedMovies = prevState.movies.map(movie => {
                if (movie.name === movieName) {
                    return {
                        ...movie,
                        reviews: [...movie.reviews, { review: reviewText, stars: stars }]
                    };
                }
                return movie;
            });
            return { movies: updatedMovies };
        });
    };    

    render() {

        return (
            <div className="container">
            {/* For every movie in the current state, invoke the Movie component to render the details of each
            movie. Pass the addReview function so that someone can add a new review from the movie component */}
            {this.state.movies.map((movie, index) => (
                <Movie key={index} {...movie} addReview={this.addReview} />
            ))}
            </div>
        );

    }
}