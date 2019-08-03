import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import APIManager from '../../Modules/APIManager';
import WatchCard from './WatchCard';
export default class WatchComp extends Component {

    render() {
        const currentUser = JSON.parse(sessionStorage.getItem('user'))
        // console.log("watchlists userId", this.props.watchlists)
        // console.log("user id", currentUser.id)
        return (
            <React.Fragment>
                <div>
                    <h1>Saved Movies</h1>
                        <Card.Group wrapped itemsPerRow={2} >
                        {this.props.watchlists.filter(watchlist => watchlist.userId === currentUser.id).map(watchlist => (
                            <div key={watchlist.id}>
                            <WatchCard
                                watchlist={watchlist}
                                deleteCard={this.props.deleteCard}
                                updateCard={this.props.updateCard}
                            />
                            </div>
                            ))
                    }
                        </Card.Group>
                </div>
            </React.Fragment>
        )
    }
}