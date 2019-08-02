import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import APIManager from '../../Modules/APIManager';
import WatchCard from './WatchCard';
export default class WatchComp extends Component {
    state = {
        watchlist: [],
    }
    componentDidMount() {
        const newstate = {}
        APIManager.getAll("watchlist")
            .then(watch => newstate.watchlist = watch)
            .then(() => this.setState(newstate))
    }

    //removes the card from the database and refreshes the page
    deleteCard = (database, id) => {
        APIManager.delete(database, id)
            .then(watch =>
                this.setState({
                    watchlist: watch
                }))
    }
    //update the card review feature
    updateCard = (editCard) => {
        return APIManager.put("watchlist", editCard)
            .then(() => APIManager.getAll("watchlist"))
            .then(watch => {
                this.setState({
                    watchlist: watch
                })
            })
    }

    render() {
        // console.log("current user", this.props.currentUser.id)
        // console.log("watchlist", this.state.watchlist)
        return (
            <React.Fragment>
                <div>
                    <h1>Saved Movies</h1>
                        <Card.Group wrapped itemsPerRow={2} >
                    {this.state.watchlist.filter(watchlist => watchlist.userId.id === this.props.currentUser.id).map(watchlist => (
                            <WatchCard key={watchlist.id}
                                watchlist={watchlist}
                                deleteCard={this.state.deleteCard}
                                updateCard={this.state.updateCard}
                            />
                            ))
                    }
                        </Card.Group>
                </div>
            </React.Fragment>
        )
    }
}