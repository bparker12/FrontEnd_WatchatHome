import React, { Component } from 'react'
import { Form, Button, Message } from 'semantic-ui-react'
import ReviewAdd from './ReviewAdd'
import APIManager from '../../../Modules/APIManager'
import ReviewCard from './ReviewCard'

export default class Review extends Component {

    state = {
        userId: JSON.parse(sessionStorage.getItem('user')).id,
        watchId: "",
        imdbID: "",
        Title: "",
        reviewText: "",
        hidden: false,
        review: []
    }

    componentDidMount() {
        const newstate = {}
        APIManager.getAll("reviews")
            .then(review => newstate.review = review)
            .then(() => this.setState(newstate))
    }

    addReview = (data) => {
        APIManager.post("reviews", data)
            .then(() => APIManager.getAll("reviews"))
            .then(review =>
                this.setState({
                    review: review
                }))
    }

    handleReviewClick = () => {
        this.setState({ hidden: !this.state.hidden })
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    render() {
        // console.log("ids", this.props.watchlist.id)
        return (
            <div>
                <Form>
                    <React.Fragment>
                        <div hidden={this.state.hidden}>
                            <Button compact onClick={this.handleReviewClick}>Add a Review</Button>
                        </div>
                        <div hidden={!this.state.hidden}>
                            <ReviewAdd
                                handleReviewClick={this.handleReviewClick}
                                handleFieldChange={this.handleFieldChange}
                                addReview={this.addReview}
                                watchlist={this.props.watchlist}
                                reviewText={this.state.reviewText}
                            />
                        </div>
                    </React.Fragment>
                </Form>
                <Message >
                    {
                        this.state.review.filter(review => review.watchId === this.props.watchlist.id).map(review =>
                            <ReviewCard watchlist={this.props.watchlist} review={review} reviewComp={this.reviewComp} />
                        )
                    }
                </Message>
            </div>
        )
    }
}

