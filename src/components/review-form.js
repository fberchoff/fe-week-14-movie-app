import React from 'react';
import StarRating from './star-rating';

export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            hover: null,
            reviewText: ''
        };
        this.setRating = this.setRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.setHover = this.setHover.bind(this);
    }

    // When someone hovers over a ratings star, the star's value gets assigned to state's hover property
    setHover = (hoverValue) => {
        this.setState({ hover: hoverValue });
    }

    // ratingValue comes from the child StarRating component.  It gets set when someone clicks on a star
    setRating = (ratingValue) => {
        this.setState({ rating: ratingValue });
    }

    // When someone types into the text area, the reviewText state needs to be changed
    handleTextChange = (event) => {
        this.setState({ reviewText: event.target.value });
    }
    
    // When the submit button is hit, it triggers the addReview function.  The review text and rating then
    // get cleared out.  Note that the function won't be invoked if nothing was entered in the review.
    handleSubmit = (event) => {
        event.preventDefault();
        // Check if reviewText is not empty
        if (this.state.reviewText.trim() !== '') {
            this.props.addReview(this.props.movieName, this.state.reviewText, this.state.rating);
            // Clear the form fields
            this.setState({ reviewText: '', rating: 0 });
        }
    };
    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3 mt-4">
                    <label className="form-label" htmlFor="inputReview">Leave a Review</label>
                    <textarea 
                        className="form-control" 
                        id="inputReview" 
                        rows="5" 
                        value={this.state.reviewText}
                        onChange={this.handleTextChange}>                            
                    </textarea>
                </div>
                {/* This component is keeping the state related to the star rating buttons (hidden radio buttons)
                    It's passing the setRating and setHover functions down to StarRating                      */}
                <StarRating rating={this.state.rating} hover={this.state.hover} setRating={this.setRating} setHover={this.setHover}/>
                <button className="btn btn-primary mt-4 mb-3" type="submit">Submit</button>
            </form>
        )
    }
}