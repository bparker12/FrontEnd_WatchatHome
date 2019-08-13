import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import APIManager from '../../Modules/APIManager';
import WatchCard from './WatchCard';
import SplashPage from './Review/SplashPage/SplashPage'
export default class WatchComp extends Component {

    render() {
        const currentUser = JSON.parse(sessionStorage.getItem('user'))
        // let splashPage = this.props.watchlists.filter(watchlist => watchlist.userId === currentUser.id)
        // if (splashPage.length === 0) {
        //     return (
        //         <SplashPage />
        //     )
        // } else {
        return (
            <React.Fragment>
                <div>
                    <h1>Saved Movies & Shows</h1>
                    <Card.Group wrapped itemsPerRow={2} style={{ 'margin': 1 }} >
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
