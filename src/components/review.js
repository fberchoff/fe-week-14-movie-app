import React from 'react';
import Stars from './stars';

export default class Review extends React.Component {

    render() {
        return (
            <tr>
            <td>{this.props.review} <Stars stars={this.props.stars}/></td>
            </tr>
        )
    }

}