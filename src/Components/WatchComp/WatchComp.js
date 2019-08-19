import React, { Component } from 'react';
import { Card, Menu } from 'semantic-ui-react';
import WatchCard from './WatchCard';
import './WatchComp.css'
export default class WatchComp extends Component {

    state = {
        All: true,
        List: false,
        Watched: false,
        Favorites: false,
        activeItem: "All"
    }

    render() {
        const { activeItem } = this.state
        const currentUser = JSON.parse(sessionStorage.getItem('user'))

        if (this.state.All === true) {
            return (
                <React.Fragment>
                    <div>
                        <Menu color="black" size="huge" className="watchMenu" tabular>
                            <Menu.Item as="a" name="All" active={activeItem === "All"}
                                onClick={() => this.setState({ All: true, List: false, Watched: false, Favorites: false, activeItem: "All" })} />
                            <Menu.Item as="a" name="Watchlist" active={activeItem === "Watchlist"}
                                onClick={() => this.setState({ All: false, List: true, Watched: false, Favorites: false, activeItem: "Watchlist" })} />
                            <Menu.Item as="a" name="Favorites" active={activeItem === "Favorites"}
                                onClick={() => this.setState({ All: false, List: false, Watched: false, Favorites: true, activeItem: "Favorites" })} />
                            <Menu.Item as="a" name="Watched" active={activeItem === "Watched"}
                                onClick={() => this.setState({ All: false, List: false, Watched: true, Favorites: false, activeItem: "Watched" })} />
                        </Menu>
                        <Card.Group  centered itemsPerRow={5} style={{ 'margin': 1 }} >
                            {this.props.watchlists.filter(watchlist => watchlist.userId === currentUser.id).map(watchlist => (
                                <div key={watchlist.id}>
                                    <WatchCard
                                        watchlist={watchlist}
                                        deleteCard={this.props.deleteCard}
                                        updateCard={this.props.updateCard}
                                    />
                                </div>
                            ))
                            }
                        </Card.Group>
                    </div>
                </React.Fragment>
            )
        } else if (this.state.List === true) {
            return (
                <React.Fragment>
                    <div>
                        <Menu color="black" size="huge" className="watchMenu" tabular>
                            <Menu.Item as="a" name="All" active={activeItem === "All"}
                                onClick={() => this.setState({ All: true, List: false, Watched: false, Favorites: false, activeItem: "All" })} />
                            <Menu.Item as="a" name="Watchlist" active={activeItem === "Watchlist"}
                                onClick={() => this.setState({ All: false, List: true, Watched: false, Favorites: false, activeItem: "Watchlist" })} />
                            <Menu.Item as="a" name="Favorites" active={activeItem === "Favorites"}
                                onClick={() => this.setState({ All: false, List: false, Watched: false, Favorites: true, activeItem: "Favorites" })} />
                            <Menu.Item as="a" name="Watched" active={activeItem === "Watched"}
                                onClick={() => this.setState({ All: false, List: false, Watched: true, Favorites: false, activeItem: "Watched" })} />
                        </Menu>
                        <Card.Group centered itemsPerRow={5} itemsPerRow={2} style={{ 'margin': 1 }} >
                            {this.props.watchlists.filter(watchlist => watchlist.userId === currentUser.id && watchlist.favorite === false && watchlist.watched === false).map(watchlist => (
                                <div key={watchlist.id}>
                                    <WatchCard
                                        watchlist={watchlist}
                                        deleteCard={this.props.deleteCard}
                                        updateCard={this.props.updateCard}
                                    />
                                </div>
                            ))
                            }
                        </Card.Group>
                    </div>
                </React.Fragment>
            )
        } else if (this.state.Watched === true) {
            return (
                <React.Fragment>
                    <div>
                    <Menu color="black" size="huge" className="watchMenu" tabular>
                            <Menu.Item as="a" name="All" active={activeItem === "All"}
                                onClick={() => this.setState({ All: true, List: false, Watched: false, Favorites: false, activeItem: "All" })} />
                            <Menu.Item as="a" name="Watchlist" active={activeItem === "Watchlist"}
                                onClick={() =>this.setState({ All: false, List: true, Watched: false, Favorites: false, activeItem: "Watchlist" })} />
                            <Menu.Item as="a" name="Favorites" active={activeItem === "Favorites"}
                                onClick={() =>this.setState({ All: false, List: false, Watched: false, Favorites: true, activeItem: "Favorites"  })} />
                            <Menu.Item as="a" name="Watched" active={activeItem === "Watched"}
                                onClick={() =>this.setState({ All: false, List: false, Watched: true , Favorites: false, activeItem: "Watched"  })} />
                        </Menu>
                        <Card.Group centered itemsPerRow={5} itemsPerRow={2} style={{ 'margin': 1 }} >
                            {this.props.watchlists.filter(watchlist => watchlist.userId === currentUser.id && watchlist.watched === true).map(watchlist => (
                                <div key={watchlist.id}>
                                    <WatchCard
                                        watchlist={watchlist}
                                        deleteCard={this.props.deleteCard}
                                        updateCard={this.props.updateCard}
                                    />
                                </div>
                            ))
                            }
                        </Card.Group>
                    </div>
                </React.Fragment>
            )
        } else if (this.state.Favorites === true) {
            return (
                <React.Fragment>
                    <div>
                    <Menu color="black" size="huge" className="watchMenu" tabular>
                            <Menu.Item as="a" name="All" active={activeItem === "All"}
                                onClick={() => this.setState({ All: true, List: false, Watched: false, Favorites: false, activeItem: "All" })} />
                            <Menu.Item as="a" name="Watchlist" active={activeItem === "Watchlist"}
                                onClick={() =>this.setState({ All: false, List: true, Watched: false, Favorites: false, activeItem: "Watchlist" })} />
                            <Menu.Item as="a" name="Favorites" active={activeItem === "Favorites"}
                                onClick={() =>this.setState({ All: false, List: false, Watched: false, Favorites: true, activeItem: "Favorites"  })} />
                            <Menu.Item as="a" name="Watched" active={activeItem === "Watched"}
                                onClick={() =>this.setState({ All: false, List: false, Watched: true , Favorites: false, activeItem: "Watched"  })} />
                        </Menu>
                        <Card.Group centered itemsPerRow={5} itemsPerRow={2} style={{ 'margin': 1 }} >
                            {this.props.watchlists.filter(watchlist => watchlist.userId === currentUser.id && watchlist.favorite === true).map(watchlist => (
                                <div key={watchlist.id}>
                                    <WatchCard
                                        watchlist={watchlist}
                                        deleteCard={this.props.deleteCard}
                                        updateCard={this.props.updateCard}
                                    />
                                </div>
                            ))
                            }
                        </Card.Group>
                    </div>
                </React.Fragment>
            )
        }
    }
}
