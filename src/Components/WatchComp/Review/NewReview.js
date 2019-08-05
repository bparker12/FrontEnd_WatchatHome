import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react';
import APIManager from '../../../Modules/APIManager'
import { objectMethod } from '@babel/types';

export default class NewReview extends Component {

    state = {
        review: {},
        reviewText: ""

    }


    // componentDidMount() {
    //     const newstate = {}
    //     APIManager.getAll("watchlists")
    //         .then(watch => newstate.watchlists = watch)
    //         .then(() => this.setState(newstate))
    // }

    updateReviewCard = (editCard) => {
        console.log("state under update", this.state.review)
        const reviewObj = {
            reviewId: this.state.review.id,
            review: this.state.review.review
        }
        console.log("reviewObj", reviewObj)
        return APIManager.patchReview("watchlists", editCard, reviewObj)
            .then(() => APIManager.getAll("watchlists"))
    }


    addReview = (data) => {
        APIManager.post("reviews", data)
            .then(() => APIManager.getAll("reviews"))
            .then((review) => review.find(review => review.watchId === this.props.watchlist.id))
            .then(review => {
                console.log("after .find", review)
                this.setState({
                    review: review
                })
                console.log("setstate review", this.state.review)
            }
            ).then(this.updateReviewCard(this.props.watchlist.id))


    }

    saveReview = (evt) => {
        evt.preventDefault();
        if (this.state.review === "") {
            this.props.handleReviewClick()
        } else {
            console.log(this.props.watchlist)
            const reviewDB = {
                userId: JSON.parse(sessionStorage.getItem('user')).id,
                watchId: this.props.watchlist.id,
                Title: this.props.watchlist.Title,
                imdbID: this.props.watchlist.imdbID,
                review: this.state.reviewText,
            }
            this.addReview(reviewDB)

            // let reviewObj = {
            //    console.log(this.state.review.id)
            // review: this.state.review.review
        }
        this.props.handleReviewClick()
    }



    // const updateReviewCard = {
    //     reviewId: this.state.watchlist.review.id
    // }
    // (console.log("watchlist", this.state.review.id))



    // reviewPutDB = evt => {
    //     evt.preventDefault()
    //     if (this.state.review === "") {
    //         this.props.handleReviewClick()
    //     } else {
    //         const newReview = {
    //             review: this.state.review
    //         }
    //         this.props.updateCard(newReview)
    //         this.props.handleReviewClick()
    //     }
    // }

    render() {

        return (
            <div>
                <Input type="text" id="reviewText" onChange={this.handleFieldChange} />
                <Button content="Submit" primary onClick={this.saveReview} />
                <Button content="Cancel" onClick={this.props.handleReviewClick} secondary />
            </div>
        )
    }
}
