import React, { Component } from 'react'
import { Header, Image, Menu, Segment, Container } from 'semantic-ui-react';
import './SplashPage.css'

export default class SplashPage extends Component {


    render() {

        return (
            <div className="main">
                <Header as="h1" textAlign="center">Welcome to Watch at Home (WAH)</Header>
                <Segment raised textAlign="center"  color='grey' size='large'>
                   <Segment.Inline style={{'font-size': 25}}>
                   To start your watchlist, please use the search bar on the navbar to look for shows or movies you are interested in seeing!!!
                   </Segment.Inline >
                </Segment>
                <div className="sliding">

                </div>
                {/* <footer className="footer" >
                    <Menu pagination inverted fluid className="footer" >
                        <Menu.Item>
                            <Image.Group centered>
                                <Image size="mini" space="left" src="data:image/png;base64,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" />
                            </Image.Group>
                        </Menu.Item>

                    </Menu> */}
                {/* </footer> */}
            </div>

        )
    }
}