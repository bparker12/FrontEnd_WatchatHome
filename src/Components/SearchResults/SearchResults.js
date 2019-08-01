import React, { Component } from 'react'
import { Card, Modal, Button } from 'semantic-ui-react';


export default class SearchResults extends Component {

    render() {
        if(this.props.show) {
            return null
        }
        return (
                    <Modal>
                        <div className="closeButton">
                            <Modal.Header>
                                <Button icon="window close" onClick={this.props.onClose}></Button>
                            </Modal.Header>
                        </div>
                        <Modal.Content>
                            <Card>
                                <h2>{this.props.APIinfo.Title}</h2>
                            </Card>
                        </Modal.Content>
                    </Modal>

        )
    }
}