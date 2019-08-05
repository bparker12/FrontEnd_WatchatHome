import React, { Component } from 'react'
import{ Form, Button, Message } from 'semantic-ui-react'
import ReviewAdd from './ReviewAdd'
import APIManager from '../../../Modules/APIManager'

export default class Review extends Component {

    state = {
        userId: JSON.parse(sessionStorage.getItem('user')).id,
        imdbID: "",
        Title: "",
        reviewText: "",
        hidden: false,
    }

    handleReviewClick = () => {
        this.setState({ hidden: !this.state.hidden })
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
                                <ReviewAdd handleReviewClick={this.handleReviewClick} watchlist={this.props.watchlist} />
                            </div>
                        </React.Fragment>


                </Form>
            </div>
        )
    }
}

/* <div>
    <Message content={this.props.watchlist.review} header="Review" handleReviewClick={this.handleReviewClick} updateCard={this.props.updateCard} />
</div> */