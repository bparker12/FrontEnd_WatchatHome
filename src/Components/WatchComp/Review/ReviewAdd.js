import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react';
import APIManager from '../../../Modules/APIManager'
import { objectMethod } from '@babel/types';

export default class ReviewAdd extends Component {

    postReview = (evt) => {
        evt.preventDefault();
        if (this.props.reviewText === "") {
            console.log("please")
            this.props.handleReviewClick()
        } else{
            console.log("stuff")
            let reviewObj = {
                userId: JSON.parse(sessionStorage.getItem('user')).id,
                watchId: this.props.watchlist.watchId,
                imdbID: this.props.watchlist.imdbID,
                Title: this.props.watchlist.Title,
                reviewText: this.props.reviewText,
            }
            console.log(reviewObj)
            this.props.addReview(reviewObj)
        }
    }

    render() {
        return (
            <div>
                <Input  type="text" id="reviewText" onChange={this.props.handleFieldChange} />
                <Button content="Submit" primary onClick={this.postReview} />
                <Button content="Cancel" secondary onClick={this.props.handleReviewClick} />

            </div>
        )
    }
}
