import React from 'react';

import Review from './review';

export default class ReviewList extends React.Component {
    render() {
        let reviews;
        // Assigning a key to each review
        if (this.props.reviews) {
            reviews = this.props.reviews.map((review, index) => <Review key={index} {...review} />);
        }
        return (
            <div>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Reviews</th>
                        </tr>
                    </thead>
                    {/* Each review has a review property and a stars property*/}
                    <tbody>{reviews}</tbody>
                </table>
            </div>
        );
    }

}