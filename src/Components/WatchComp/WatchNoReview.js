import React, { Component } from 'react'
import { Card, Image, Button, Confirm, Checkbox, Dimmer, Header, Modal, Dropdown } from 'semantic-ui-react';
import Favorites from './Favorites/Favorites';
import Review from './Review/Review'
import WatchDetails from './WatchDetails';



export default class WatchNoReview extends Component {

    state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })


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
            let checkLabel = this.props.checkboxLabel()

        return (
            <Card key={this.props.watchlist.id} raised style={{ 'width': 300, 'padding': 3, 'margin': 2, }} >
                <Card.Content textAlign="left" style={{ 'padding': 5 }}>
                    <Dropdown icon="list ul" disabled={this.props.disabled}>
                        <Dropdown.Menu disabled={this.props.disabled} >
                            <Dropdown.Item onClick={this.props.open}> Remove
                                <Confirm size="mini" open={this.props.open}
                                    onCancel={this.close}
                                    onConfirm={() => this.props.deleteCard("watchlists", this.props.watchlist.id)}
                                />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Review watchlist={this.props.watchlist} />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Favorites watchlist={this.props.watchlist} updateCard={this.props.updateCard} />
                </Card.Content>
                <Dimmer.Dimmable
                    as={Image}
                    style={{ 'width': 295, }}
                    src={this.props.watchlist.Poster}
                    wrapped ui={false}
                    dimmed={active}
                    dimmer={{ active, content }}
                    onMouseEnter={this.handleShow}
                    onMouseLeave={this.handleHide}
                />
                <Card.Content>
                    <Checkbox label={this.props.checkLabel} defaultChecked={this.props.watchlist.watched} onChange={this.props.watchedToggle} />
                    <Card.Header>{this.props.watchlist.Title}</Card.Header>
                    <Card.Meta>Runtime: {this.props.watchlist.Runtime}</Card.Meta>
                    <Card.Meta>Year: {this.props.watchlist.Year}</Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}