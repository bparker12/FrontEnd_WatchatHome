import React, { Component } from 'react'
import { Card, Modal, Button, Image,  Grid } from 'semantic-ui-react';
import { Link } from "react-router-dom";


export default class SearchResults extends Component {

 apiResultsIcon = () => {
     if(this.props.Utelly.results.length === 0) {
         return "https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg"
     } else {
         return this.props.Utelly.results[0].locations[0].icon
     }
 }
//have the elements only render if there is a "length" on the result from is great than 0
 apiResults = () => {
    if(this.props.Utelly.results.length === 0) {
        return ""
    }
 }

    render() {
    console.log("utelly results", this.props.Utelly.results)

        return (
            <React.Fragment>
                <Button className="closeIcon" icon="window close" position="right" onClick={this.props.toggle} />
                <Modal.Content>
                    <Card.Group centered>
                        <Card style={{ 'width': 210 }}>
                            <Image src={this.props.APIinfo.Poster} style={{ 'width': 210 }} wrapped ui={false} />
                            <Card.Content style={{padding: 7}}>
                            <Card.Header as="h3" style={{ 'margin': 2 }} textAlign="center"><strong>{this.props.APIinfo.Title}</strong></Card.Header>
                            <Grid columns={2}>
                                <Grid.Row>
                                    <Grid.Column style={{ padding: 8 }}>
                                            <Card.Meta>Runtime: {this.props.APIinfo.Runtime}</Card.Meta>
                                            <Card.Meta>Type: {this.props.APIinfo.Type}</Card.Meta>
                                            <Card.Meta>Year: {this.props.APIinfo.Year}</Card.Meta>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign="middle">
                                        <Image floated='right' style={{ margin: 0 }} size='small' src={this.props.Utelly.results[0].locations[0].icon} href={this.props.Utelly.results[0].locations[0].url} target='_blank' />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            </Card.Content>
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