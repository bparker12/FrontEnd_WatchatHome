import React, { Component } from 'react'
import APIManager from '../../../Modules/APIManager';

export default class ReviewCard extends Component {

    reviewComp = () => {
        APIManager.getAll("reviews")
        .then(review => review.find())
    }


    render() {
        return (
            <div>
            
            </div>
        )
    }
}