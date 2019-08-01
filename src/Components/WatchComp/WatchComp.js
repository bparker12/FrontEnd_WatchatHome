import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import APIManager from '../../Modules/APIManager';
import WatchCard from './WatchCard';
export default class WatchComp extends Component {

    state = {
        watchList: [],
    }

    componentDidMount() {
        const newstate = {}

        APIManager.getAll("watchList")
            .then(watchList => newstate.watchList = watchList)
            .then(() => this.setState(newstate))
        }

        render() {
        return (
            <div>
            <Card.Group>
                <WatchCard watchList={this.state.watchList}/>
            </Card.Group>
            </div>
        )
    }
}