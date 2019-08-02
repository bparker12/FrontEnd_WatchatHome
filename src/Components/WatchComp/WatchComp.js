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
            .then(watchlist => newstate.watchlist = watchlist)
            .then(() => this.setState(newstate))
        }

        render() {
        return (
            <div>
            <Card.Group>
                <WatchCard watchlist={this.props.watchlist}/>
            </Card.Group>
            </div>
        )
    }
}