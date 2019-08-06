import React, { Component } from 'react'
import APIManager from '../../../Modules/APIManager';
import { Message } from 'semantic-ui-react';

export default class ReviewCard extends Component {


    render() {
        console.log("this is review", this.props.review)
        return (
            <div>
                <Message>
                {this.props.review.reviewText}
                </Message>
            </div>
        )
    }
}