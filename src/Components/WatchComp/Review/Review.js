import React, { Component } from 'react'

export default class Review extends Component {



    render() {
        return (
            <div>
                <Form>
                    {this.props.watchlist.reviewId === null ?
                        <React.Fragment>
                            <div hidden={this.state.hidden}>
                                <Button compact onClick={this.handleReviewClick}>Add a Review</Button>
                            </div>
                            <div hidden={!this.state.hidden}>
                                <NewReview handleReviewClick={this.handleReviewClick} updateCard={this.props.updateCard} watchlist={this.props.watchlist} />
                            </div>
                        </React.Fragment>
                        :
                        <div>
                            <Message content={this.props.watchlist.review} header="Review" handleReviewClick={this.handleReviewClick} updateCard={this.props.updateCard} />
                        </div>
                    }
                </Form>
            </div>
        )
    }
}