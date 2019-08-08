import React, { Component } from 'react'
import { Card, Modal, Button, Image } from 'semantic-ui-react';


export default class SearchResults extends Component {

    render() {
        return (
            <React.Fragment>
                <Button className="closeIcon" icon="window close" position="right" onClick={this.props.toggle} />
                <Modal.Content>
                    <Card.Group centered>
                        <Card style={{ 'width': 210 }}>
                            <Image src={this.props.APIinfo.Poster} style={{ 'width': 210 }} wrapped ui={false} />
                            <Card.Header as="h3" style={{ 'margin': 10 }} textAlign="center"><strong>{this.props.APIinfo.Title}</strong></Card.Header>
                            <Card.Meta>Runtime: {this.props.APIinfo.Runtime}</Card.Meta>
                            <Card.Meta>Type: {this.props.APIinfo.Type}</Card.Meta>
                            <Card.Meta>Year: {this.props.APIinfo.Year}</Card.Meta>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green' id={this.props.APIinfo.imdbID} fluid onClick={this.props.saveCard}>
                                        Add to Watch List
                            </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Modal.Content>
            </React.Fragment>
        )
    }
}