import React, { Component } from 'react';
import { Card, Image, Button, Confirm, Checkbox, Dimmer, Header, Modal, Dropdown, Grid } from 'semantic-ui-react';
import Favorites from './Favorites/Favorites';
import Review from './Review/Review'
import './WatchCard.css'
import WatchDetails from './WatchDetails';

// import WatchNoReview from './WatchNoReview';

export default class WatchCard extends Component {

    state = {
        open: false,
        disabled: false
    };

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })

    //--For Confirmation Box--//
    open = () => this.setState({ open: true, disabled: true });
    close = () => this.setState({ open: false, disabled: false });

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
            Utelly: this.props.watchlist.Utelly,
            favorite: this.props.watchlist.favorite,
            watched: !this.props.watchlist.watched
        }
        this.props.updateCard(watched)
    }

    render() {
        const { active } = this.state
        const content = (
            <div>
                <Header as='h2' inverted>
                    Addtional Details
              </Header>
                <Modal trigger={<Button>View</Button>}>
                    <Modal.Header>{this.props.watchlist.Title}</Modal.Header>
                    <Modal.Content image scrolling>
                        <Image size='medium' src={this.props.watchlist.Poster} wrapped />
                        <WatchDetails watchlist={this.props.watchlist} />
                    </Modal.Content>
                </Modal>
            </div>
        )
        // console.log("watchlist props", this.props.watchlist)
        let checkLabel = this.checkboxLabel()
        // return (
        //     <WatchNoReview
        //         watchlist={this.props.watchlist}
        //         disabled={this.state.disabled}
        //         open={this.open}
        //         close={this.close}
        //         updateCard={this.props.updateCard}
        //         handleHide={this.handleHide}
        //         handleShow={this.handleShow}
        //         checkboxLabel={this.checkboxLabel}
        //         watchedToggle={this.watchedToggle}
        //         />

        // )

        if (this.props.watchlist.Utelly.length === 0) {
            return (
                <Card key={this.props.watchlist.id} raised style={{ 'width': 250, 'padding': 3, 'margin': 2, }} >
                    <Card.Content textAlign="left" style={{ 'padding': 5 }}>
                        <Dropdown icon="list ul" disabled={this.state.disabled}>
                            <Dropdown.Menu disabled={this.state.disabled} >
                                <Dropdown.Item onClick={this.open}> Remove
                                <Confirm size="mini" open={this.state.open}
                                        onCancel={this.close}
                                        onConfirm={() => this.props.deleteCard("watchlists", this.props.watchlist.id)}
                                    />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Favorites watchlist={this.props.watchlist} updateCard={this.props.updateCard} />
                    </Card.Content>
                    <Dimmer.Dimmable
                        as={Image}
                        style={{ 'width': 245, height: 360 }}
                        src={this.props.watchlist.Poster}
                        wrapped ui={false}
                        dimmed={active}
                        dimmer={{ active, content }}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                    />
                    <Card.Content style={{ padding: 8 }}>
                        <Card.Header textAlign="center">{this.props.watchlist.Title}</Card.Header>
                        <Checkbox label={checkLabel} defaultChecked={this.props.watchlist.watched} onChange={this.watchedToggle} />
                        <Grid columns={2}>
                            <Grid.Row>
                                <Grid.Column style={{ padding: 8 }}>
                                    <Card.Description>
                                        <Card.Meta>Runtime: {this.props.watchlist.Runtime}</Card.Meta>
                                        <Card.Meta>Year: {this.props.watchlist.Year}</Card.Meta>
                                    </Card.Description>
                                </Grid.Column>
                                <Grid.Column>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                    <Card.Content style={{ padding: 5 }}>
                        <Review watchlist={this.props.watchlist} />
                    </Card.Content>
                </Card>
            )
        } else {
            return (
                <Card key={this.props.watchlist.id} raised style={{ 'width': 250, 'padding': 3, 'margin': 2, }} >
                    <Card.Content textAlign="left" style={{ 'padding': 5 }}>
                        <Dropdown icon="list ul" disabled={this.state.disabled}>
                            <Dropdown.Menu disabled={this.state.disabled} >
                                <Dropdown.Item onClick={this.open}> Remove
                                <Confirm size="mini" open={this.state.open}
                                        onCancel={this.close}
                                        onConfirm={() => this.props.deleteCard("watchlists", this.props.watchlist.id)}
                                    />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Favorites watchlist={this.props.watchlist} updateCard={this.props.updateCard} />
                    </Card.Content>
                    <Dimmer.Dimmable
                        as={Image}
                        style={{ 'width': 245, height: 360 }}
                        src={this.props.watchlist.Poster}
                        wrapped ui={false}
                        dimmed={active}
                        dimmer={{ active, content }}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                    />
                    <Card.Content style={{ padding: 8 }}>

                        <Card.Header textAlign="center">{this.props.watchlist.Title}</Card.Header>
                        <Checkbox label={checkLabel} defaultChecked={this.props.watchlist.watched} onChange={this.watchedToggle} />
                        <Grid columns={2} >
                            <Grid.Row>
                                <Grid.Column style={{ padding: 8,}}>
                                    <Card.Description>
                                        <Card.Meta>Runtime: {this.props.watchlist.Runtime}</Card.Meta>
                                        <Card.Meta>Year: {this.props.watchlist.Year}</Card.Meta>
                                    </Card.Description>
                                </Grid.Column>
                                <Grid.Column>
                                    <Image style={{ margin: 0 }} floated='right' size='small' src={this.props.watchlist.Utelly[0].locations[0].icon} href={this.props.watchlist.Utelly[0].locations[0].url} target="_blank" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Content>
                    <Card.Content style={{ padding: 5,}}>
                        <Review watchlist={this.props.watchlist} />
                    </Card.Content>
                </Card>
            )
        }
    }
}