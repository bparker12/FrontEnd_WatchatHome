import React, { Component } from 'react';
import { Card, Image, Button, Confirm, Checkbox } from 'semantic-ui-react';
import Favorites from './Favorites/Favorites';
import Review from './Review/Review'

export default class WatchCard extends Component {

    state = { open: false };

    //--For Confirmation Box--//
    open = () => this.setState({ open: true });
    close = () => this.setState({ open: false });

    checkboxLabel = () => {
        return (
            (this.props.watchlist.watched === true) ?
                "Watched" :
                "Not Watched"
        )
    }

    watchedToggle = () => {
        const watched = {
            id: this.props.watchlist.id,
            userId: JSON.parse(sessionStorage.getItem('user')).id,
            Title: this.props.watchlist.Title,
            Year: this.props.watchlist.Year,
            Rated: this.props.watchlist.Rated,
            Runtime: this.props.watchlist.Runtime,
            Actors: this.props.watchlist.Actors,
            Awards: this.props.watchlist.Awards,
            BoxOffice: this.props.watchlist.BoxOffice,
            Director: this.props.watchlist.Director,
            Genre: this.props.watchlist.Genre,
            Plot: this.props.watchlist.Plot,
            Poster: this.props.watchlist.Poster,
            Production: this.props.watchlist.Production,
            Type: this.props.watchlist.Type,
            Writer: this.props.watchlist.Writer,
            imdbID: this.props.watchlist.imdbID,
            imdbRating: this.props.watchlist.imdbRating,
            favorite: this.props.watchlist.favorite,
            watched: !this.props.watchlist.watched
        }
        this.props.updateCard(watched)
    }

    render() {
        // console.log("watchlist props", this.props.watchlist)
        let checkLabel = this.checkboxLabel()
        return (
            <Card key={this.props.watchlist.id} raised>
                <Card.Content>
                    <Favorites watchlist={this.props.watchlist} updateCard={this.props.updateCard} />
                </Card.Content>
                <Image src={this.props.watchlist.Poster} wrapped ui={false} />
                <Card.Content>
                    <Checkbox label={checkLabel} defaultChecked={this.props.watchlist.watched} onChange={this.watchedToggle} />
                    <Card.Header>{this.props.watchlist.Title}</Card.Header>
                    <Card.Meta>Runtime: {this.props.watchlist.Runtime}</Card.Meta>
                    <Card.Meta>Year: {this.props.watchlist.Year}</Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Review watchlist={this.props.watchlist} />
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