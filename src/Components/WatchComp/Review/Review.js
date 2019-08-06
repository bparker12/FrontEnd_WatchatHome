import React, { Component } from 'react'
import { Form, Button, Message, Header, Container, Reveal, Icon } from 'semantic-ui-react'
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

    updateReviewDB = (editCard) => {
        return APIManager.put("reviews", editCard)
            .then(() => APIManager.getAll("reviews"))
            .then(review => {
                this.setState({
                    review: review
                })
            })
    }

    //this renders the data for the reviews to the Dom
    componentDidMount() {
        const newstate = {}
        APIManager.getAll("reviews")
            .then(review => newstate.review = review)
            .then(() => this.setState(newstate))
    }

    //function to post the reviews to the dom and re-render
    addReview = (data) => {
        APIManager.post("reviews", data)
            .then(() => APIManager.getAll("reviews"))
            .then(review =>
                this.setState({
                    review: review
                }))
    }

    deleteReview = (database, id) => {
        APIManager.delete(database, id)
            .then(review =>
                this.setState({
                    review: review
                }))
    }

    //this toggles the hidden state
    handleReviewClick = () => {
        this.setState({ hidden: !this.state.hidden })
    }
    //allows the review text to be put into state
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    render() {
        let headerCont = JSON.parse(sessionStorage.getItem('user')).username + "'s review:"
        if (this.state.review.find(review => review.watchId === this.props.watchlist.id)) {
            return (
                <div>
                    <Header size="medium" content={headerCont} />
                    <Container>
                        {
                            this.state.review.filter(review => review.watchId === this.props.watchlist.id).map(review =>
                            <div>

                                <Button style={{ padding: "2px", margin: "0px" }} icon size="tiny" onClick={() => this.deleteReview("reviews", review.id)}>
                                    <Icon name="window close" size="small" />
                                </Button>
                                <div>
                                    <ReviewCard watchlist={this.props.watchlist}
                                        review={review}
                                        reviewComp={this.reviewComp}
                                        updateReviewDB={this.updateReviewDB}
                                        deleteReview={this.deleteReview} />
                                </div>
                            </div>
                            )}
                    </Container>
                </div>)
        } else {
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
                </div>
            )
        }
    }
}

//this code was not working for the delete, just going to go with a button for now

