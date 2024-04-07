import React from 'react';
//Installed React icons (https://react-icons-v2.vercel.app/) and only importing FaStar, because that is all we need.
import {FaStar} from "react-icons/fa";

export default class Stars extends React.Component {

    // This displays the stars next to each review.  I created this separately from the StarRating component because
    // it would have been too hard to figure out how to incorporate them in together.
    // Stars has a numeric value.  The below loop displays a start up to the numeric value
    render() {
        let stars = [];
        for (let i = 0; i < this.props.stars; i++) {
            stars.push(<span key={i}><FaStar className="star" color="#ffc107" /></span>);
        }
        return stars;
    }
}