import React, { Component } from 'react';
import Login from './Components/Auth/Login';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Nav/Navbar'
import ApplicationViews from './Components/ApplicationViews'
import APIManager from './Modules/APIManager'
import { Card, Modal, Button, Icon, Header, Image } from 'semantic-ui-react';
import SearchResults from './Components/SearchResults/SearchResults';

class App extends Component {

    state = {
        authenticated: sessionStorage.getItem('user'),
        currentUser: JSON.parse(sessionStorage.getItem('user')),
        searchInput: '',
        APIinfo: [],
        watchlists: [],
        openModal: false,
    }

    toggle = () => {
        this.setState({ openModal: !this.state.openModal })
    }

    componentDidMount() {
        const newstate = {}
        APIManager.getAll("watchlists")
            .then(watch => newstate.watchlists = watch)
            .then(() => this.setState(newstate))
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
            APIManager.omdbData(this.state.searchInput)
                .then((info) => {
                    this.setState({ APIinfo: info })
                    // console.log(this.state.APIinfo)
                })
            this.toggle()
            // console.log(this.state.openModal)
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
        let evtId = evt.target.id
        console.log("save click works", evt.target.id)

        const card = {
            userId: JSON.parse(sessionStorage.getItem('user')).id,
            Title: this.state.APIinfo.Title,
            Year: this.state.APIinfo.Year,
            Rated: this.state.APIinfo.Rated,
            Runtime: this.state.APIinfo.Runtime,
            Actors: this.state.APIinfo.Actors,
            Awards: this.state.APIinfo.Awards,
            BoxOffice: this.state.APIinfo.BoxOffice,
            Director: this.state.APIinfo.Director,
            Genre: this.state.APIinfo.Genre,
            Plot: this.state.APIinfo.Plot,
            Poster: this.state.APIinfo.Poster,
            Production: this.state.APIinfo.Production,
            Type: this.state.APIinfo.Type,
            Writer: this.state.APIinfo.Writer,
            imdbID: this.state.APIinfo.imdbID,
            imdbRating: this.state.APIinfo.imdbRating,
            favorite: false,
            watched: false,
        }
                this.addCard(card)
                // console.log("state of watchlists", this.state.watchlists)
                //TODO: if there are multiple results, remove the this.toggle
                this.toggle()
            }


    //this renders the dom based on whether a user is logged in or not and session storage has a value for "user"
    render() {
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
                    <Modal onclose open={this.state.openModal} size="small" centered={false} >
                        <SearchResults toggle={this.toggle} APIinfo={this.state.APIinfo} saveCard={this.saveCard} />
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