import React, { Component } from 'react'
import ReviewEdit from './ReviewEdit';

export default class ReviewCard extends Component {

state = {
    hidden: false,
}

handleHidden = () => {
    this.setState({ hidden: !this.state.hidden })
}

    render() {
        return (
            <React.Fragment>
            <div hidden={this.state.hidden} onClick={this.handleHidden}>
                {this.props.review.reviewText}
            </div>
            <div hidden={!this.state.hidden}>
                <ReviewEdit hidden={this.state.hidden}
                handleHidden={this.handleHidden}
                review={this.props.review}
                handleEditFieldChange={this.handleEditFieldChange}
                updateReviewDB={this.props.updateReviewDB}
                deleteReview={this.props.deleteReview}
                  />
            </div>
            </React.Fragment>
        )
    }
}