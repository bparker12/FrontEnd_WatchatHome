import React, { Component } from 'react';
import Login from './Components/Auth/Login';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Nav/Navbar'
import ApplicationViews from './Components/ApplicationViews'
import APIManager from './Modules/APIManager'
import { Route, Redirect } from 'react-router-dom'
import { Card, Modal, Button, Icon, Header, Image, Grid, GridColumn } from 'semantic-ui-react';
import SearchResults from './Components/SearchResults/SearchResults';

class App extends Component {

    state = {
        authenticated: sessionStorage.getItem('user'),
        currentUser: JSON.parse(sessionStorage.getItem('user')),
        searchInput: '',
        search: [],
        searchChoice: [],
        watchlists: [],
        openModal: false,
        value: ''
    }

    toggle = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    componentDidMount() {
        let watchlistArr = []
        let newstate = {}
        // console.log("component mounted")
        APIManager.getAll("watchlists")
            .then(data => {
                // {data.map(result => {
                let CompMount = data.map(result => {
                    return this.fetchOMDB(result)
                })
                Promise.all(CompMount)
                    .then(wath => console.log(wath))

            })


        // fetchOMDB(result))}
        // APIManager.omdbSingleData(result.imdbID)
        //     .then(watch => {
        //             watchlistArr.push(watch)
        //         }))
        // newstate.watchlists = watchlistArr
        // })
        // .then(() => {
        //     this.setState({ watchlists: newstate.watchlists })
        //     console.log("watchlists state", this.state.watchlists)
        // })
        console.log(this.state.watchlists)
    }

    fetchOMDB = (result) => {
        let watchlistArr = []
        let newstate = {}
        // return APIManager.omdbSingleData(result.imdbID)
        // .then((watch) => {
        //     watchlistArr.push(watch)
        //     newstate.watchlists = watchlistArr
        // })
        // .then(() => {
        //     console.log("newstate", newstate)
        //     this.setState({ watchlists: newstate.watchlists })
        // })
    }



    //removes the card from the database and refreshes the page
    deleteCard = (database, id) => {
        APIManager.delete(database, id)
            .then(watch =>
                this.setState({
                    watchlists: watch
                }))
    }
    //update the card review feature
    updateCard = (editCard) => {
        return APIManager.put("watchlists", editCard)
            .then(() => APIManager.getAll("watchlists"))
            .then(watch => {
                this.setState({
                    watchlists: watch
                })
            })
    }

    //this function verifies if the user is signed in by checking session storage
    setAuthState = () => {
        if (sessionStorage.getItem("user")) {
            this.setState({ authenticated: true })
        } else {
            this.setState({ authenticated: false })
        }
    }
    //allows a search feature in the database and sets tthe state with the info pulled from API
    searchData = () => {
        if (this.state.searchInput === "") {
            //TODO: Update the alert below
            alert("Surely you are looking for something!")
        } else {
            APIManager.omdbMultiData(this.state.searchInput)
                .then((info) => {
                    // console.log(info.Search)
                    this.setState({ search: info.Search })
                })
            this.toggle()
        }
    }
    //post function for adding a card to the database
    addCard = (data) => {
        APIManager.post("watchlists", data)
            .then(() => APIManager.getAll("watchlists"))
            .then(watch =>
                this.setState({
                    watchlists: watch
                }))
    }


    //this is an event listener that updates the current state based on the characters in the search bar
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }


    //this function takes certain keys/value from the API data and puts them in an object to be put into the database. then a function is called to post to the database
    saveCard = (evt) => {
        // evt.preventDefault()
        {
            this.state.search.filter(result => {
                if (evt.target.id === result.imdbID) {
                    console.log(result)
                    const card = {
                        userId: JSON.parse(sessionStorage.getItem('user')).id,
                        Title: result.Title,
                        imdbID: result.imdbID,
                        Year: result.Year,
                        favorite: false,
                        watched: false,
                    }
                    console.log("saveobj", card)
                    this.addCard(card)
                }
                //TODO: if there are multiple results, remove the this.toggle
                this.toggle()
            })

        }
    }

    //this renders the dom based on whether a user is logged in or not and session storage has a value for "user"
    render() {
        console.log("app.js is rendering")
        // console.log('watchlists - app', this.state.watchlists)
        if (this.state.authenticated) {
            return (
                <React.Fragment>
                    <Navbar
                        currentUser={this.state.currentUser}
                        searchData={this.searchData}
                        handleFieldChange={this.handleFieldChange}
                        openModal={this.state.openModal}
                        toggle={this.toggle}
                    />
                    <Modal onclose open={this.state.openModal} size="large">
                        <Button className="closeIcon" icon="window close" position="right" onClick={this.toggle} />
                        <Modal.Content>
                            <Grid columns={5}>
                                {this.state.search.map(result => (
                                    <Grid.Column style={{ 'width': 208}}>
                                    <Card key={result.imdbID} style={{ 'width': 180 }}>
                                        <SearchResults result={result} saveCard={this.saveCard} />
                                    </Card>
                                    </Grid.Column>
                                ))
                                }
                            </Grid>
                        </Modal.Content>
                    </Modal>
                    {/* <searchResults APIinfo={this.state.APIinfo} show={this.state.openModal} onClose={this.toggle} /> */}
                    <ApplicationViews
                        currentUser={this.state.currentUser}
                        isAuthenticated={this.state.authenticated}
                        watchlists={this.state.watchlists}
                        deleteCard={this.deleteCard}
                        updateCard={this.updateCard}
                    />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <Login setAuthState={this.setAuthState} />
                </React.Fragment>
            )
        }
    }
}

export default App