import React, { Component } from 'react'
import { Card, Modal, Button, Image, Icon, Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";


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
                            <Grid columns={2}>
                                <Grid.Row>
                                    <Grid.Column style={{ padding: 8 }}>
                                        <Card.Description>
                                            <Card.Meta>Runtime: {this.props.APIinfo.Runtime}</Card.Meta>
                                            <Card.Meta>Type: {this.props.APIinfo.Type}</Card.Meta>
                                            <Card.Meta>Year: {this.props.APIinfo.Year}</Card.Meta>
                                        </Card.Description>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image floated='right' style={{ margin: 0 }} size='small' src={this.props.Utelly[0].location[0].icon} href={this.props.Utelly[0].location[0].url} target='_blank' />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
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
            </React.Fragment >
        )
    }
}