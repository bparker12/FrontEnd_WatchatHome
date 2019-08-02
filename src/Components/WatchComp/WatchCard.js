import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

export default class WatchCard extends Component {

    render() {
        console.log("watchlist props", this.props.watchlist)
        return (
            <Card>
                <Image src={this.props.watchlist.Poster} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.watchlist.Title}</Card.Header>
                    <Card.Meta>Runtime: {this.props.watchlist.Runtime}</Card.Meta>
                    <Card.Meta>Year: {this.props.watchlist.Year}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}