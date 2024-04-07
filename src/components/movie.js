import React from 'react';
import ReviewList from './review-list'
import ReviewForm from './review-form'

export default class Movie extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{this.props.genre} {this.props.rating}</h6>
                    <p className="card-text">{this.props.synopsis}</p>
                    {/* Pass the list of reviews down to the ReviewList component  */}
                    <ReviewList reviews={this.props.reviews}/>
                    {/* The add review function needs to be passed down to the ReviewForm component so that someone
                    can add a review from there. */}
                    <ReviewForm addReview={this.props.addReview} movieName={this.props.name} />
                </div>
            </div>
        );
    }


}