import React, { Component } from 'react'
import{ Form, Button, Message } from 'semantic-ui-react'
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
        review:[]
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
                                <ReviewCard watchlist={this.props.watchlist}/>
                        </React.Fragment>
                </Form>
            </div>
        )
    }
}

/* <div>
    <Message content={this.props.watchlist.review} header="Review" handleReviewClick={this.handleReviewClick} updateCard={this.props.updateCard} />
</div> */