import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react';
import APIManager from '../../../Modules/APIManager'


export default class ReviewEdit extends Component {

    state = {
        userId: JSON.parse(sessionStorage.getItem('user')).id,
        watchId: "",
        imdbID: "",
        Title: "",
        reviewText: "",
    }

    componentDidMount() {
        APIManager.get("reviews", this.props.review.id).then(review => {
            this.setState({
                watchId: review.watchId,
                imdbID: review.imdbID,
                Title: review.Title,
                reviewText: review.reviewText,
            })
        })
    }

    handleEditFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateReview = evt => {
        evt.preventDefault()
        if (this.state.reviewText === "") {
            this.props.deleteReview("reviews", this.props.review.id)
        } else {
            const editReview = {
                userId: JSON.parse(sessionStorage.getItem('user')).id,
                watchId: this.state.watchId,
                "imdbID": this.state.imdbID,
                Title: this.state.Title,
                reviewText: this.state.reviewText,
                id: this.props.review.id
            };
            this.props.updateReviewDB(editReview)
            this.props.handleHidden()
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Input fluid value={this.state.reviewText} type="text" id="reviewText" onChange={this.handleEditFieldChange} />
                </div>
                <Button content="Submit" primary onClick={this.updateReview} />
                <Button content="Cancel" secondary onClick={this.props.handleHidden} />
            </React.Fragment>
        )
    }
}
