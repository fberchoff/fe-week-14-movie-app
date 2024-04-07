import React from 'react';
//Installed React icons (https://react-icons-v2.vercel.app/) and only importing FaStar, because that is all we need.
import { FaStar } from "react-icons/fa";

export default class StarRating extends React.Component {

    render() {
        return (
            <div>
                {/* We have an array of five stars.  Each star has a value equal to their index + 1. Each star is passed
                to a function that creates a label with a radio button input that, when clicked, calls the setRating function that will
                set the rating of the current state to the rating of the radio button. */}
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label key={i}>
                            {/* In app.css, we have a style for <input> radio buttons that hide the radio button */}
                            <input 
                                type="radio" 
                                name="rating" 
                                value={ratingValue}
                                // When someone clicks on the hidden radio button, it sets the rating to the value derived
                                // from the associated value assigned to the <input>
                                onClick={() => this.props.setRating(ratingValue)}
                            />
                            {/* In our app.css, we created a style for class "star".  Note that the radio button is hidden so all
                            the user will see is the star -so they will think they are clicking on the star. */}
                            <FaStar 
                                className="star"
                                // If the rating value of a given star is less than or equal to either the rating value
                                // of the star being hovered over or the current state's rating, the color of the star will be yellow, 
                                // otherwise it will be gray. Note that ReviewForm is actually keeping the state of these star
                                // buttons.
                                color={ratingValue <= (this.props.hover || this.props.rating) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => this.props.setHover(ratingValue)}
                                onMouseLeave={() => this.props.setHover(null)}
                            />
                        </label>
                    );
                })}
            </div>
        );
    }
}
