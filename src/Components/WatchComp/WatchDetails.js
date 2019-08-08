import React, { Component } from 'react'
import { Modal, Container, Header } from 'semantic-ui-react'

export default class WatchDetails extends Component {

    render() {
        return (
            <Modal.Description>
                <Container>
                    <Header as="h2">{this.props.watchlist.Type} overview</Header>
                    <ul>
                        <li><strong>Year Released</strong>: {this.props.watchlist.Year}</li>
                        <li><strong>Top Actors</strong>: {this.props.watchlist.Actors}</li>
                        <li><strong>Director</strong>: {this.props.watchlist.Director}</li>
                        <Container >
                            <li><strong>Plot</strong>: {this.props.watchlist.Plot}</li>
                        </Container>
                        <li><strong>Genres</strong>: {this.props.watchlist.Genre}</li>
                        <li><strong>Rated</strong>: {this.props.watchlist.Rated}</li>
                        <li><strong>Runtime</strong>: {this.props.watchlist.Runtime}</li>
                        <li><strong>Awards</strong>: {this.props.watchlist.Awards}</li>
                        <li><strong>Box Office Gross</strong>: {this.props.watchlist.BoxOffice}</li>
                        <li><strong>Studio</strong>: {this.props.watchlist.Production}</li>
                        <li><strong>Writer</strong>: {this.props.watchlist.Writer}</li>
                        <li><strong>IMDB Rating</strong>: {this.props.watchlist.imdbRating}</li>
                    </ul>
                </Container>
            </Modal.Description>
        )
    }
}