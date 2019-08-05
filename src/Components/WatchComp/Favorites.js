import React, { Component } from 'react'
import { Rating, } from 'semantic-ui-react';
import APIManager from '../../Modules/APIManager';



export default class Favorites extends Component {

    state = {
        rating: this.props.watchlist.favorite
    }

    ratingSetting = () => {
        let yes = 1
        let no = 0
        return (
        (this.props.watchlist.favorite === true) ?
        yes :
        no
        )
    }

    favoriteToggle = () => {
        const favorite = {
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
            favorite: !this.props.watchlist.favorite
        }
        this.props.updateCard(favorite)
    }

    render() {
       let rating = this.ratingSetting()
        return (
            <Rating icon="star" size="large" defaultRating={rating} onRate={this.favoriteToggle} />
        )
    }
}