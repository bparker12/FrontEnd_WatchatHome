import React, { Component } from 'react';
import { Card, Image, Button, Confirm } from 'semantic-ui-react';

export default class WatchCard extends Component {

    state = { open: false };

     //--For Confirmation Box--//
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

    render() {
        // console.log("watchlist props", this.props.watchlist)
        return (
            <Card key={this.props.watchlist.id}>
                <Image src={this.props.watchlist.Poster} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{this.props.watchlist.Title}</Card.Header>
                    <Card.Meta>Runtime: {this.props.watchlist.Runtime}</Card.Meta>
                    <Card.Meta>Year: {this.props.watchlist.Year}</Card.Meta>
                </Card.Content>
                <Card.Content>
                <Button onClick={this.open}>
                    Remove from Watchlist
                </Button>
                <Confirm open={this.state.open}
                  onCancel={this.close}
                  onConfirm={() => this.props.deleteCard("watchlists", this.props.watchlist.id)}
                  />
                </Card.Content>
            </Card>
            )
    }
}