import React, { Component } from 'react';
import Login from './Components/Auth/Login';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './Components/Nav/Navbar'
import ApplicationViews from './Components/ApplicationViews'
import APIManager from './Modules/APIManager'
import { Card, Modal, Button, Icon, Header, Image } from 'semantic-ui-react';

class App extends Component {

    state = {
        authenticated: sessionStorage.getItem('user'),
        currentUser: JSON.parse(sessionStorage.getItem('user')),
        searchInput: '',
        APIinfo: '',
        watchlist:'',
        openModal: false,
    }

    toggle = () => {
        this.setState({ openModal: !this.state.openModal })
    }


    //this function verifies if the user is signed in by checking session storage
    setAuthState = () => {
        if (sessionStorage.getItem("user")) {
            this.setState({ authenticated: true })
        } else {
            this.setState({ authenticated: false })
        }
    }

    searchData = () => {
        if (this.state.searchInput === "") {
            //TODO: Update the alert below
            alert("Surely you are looking for something!")
        } else {
            APIManager.omdbData(this.state.searchInput)
                .then((info) => {
                    this.setState({ APIinfo: info })
                    console.log(this.state.APIinfo)
                })
            this.toggle()
            console.log(this.state.openModal)
        }
    }

    addCard = (data) => {
        APIManager.post("watchlist", data)
          .then(() => APIManager.getAll("watchlist"))
          .then(watch =>
            this.setState({
              watchlist: watch
            }))
      }


    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    saveCard = (evt) => {
        console.log("save click works")
        evt.preventDefault();
        const card = {
            userId: this.state.currentUser,
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
            Writer:this.state.APIinfo.Writer,
            imdbID: this.state.APIinfo.imdbID,
            imdbRating: this.state.APIinfo.imdbRating,
        }
        this.addCard(card)
        console.log("state of watchlist", this.state.watchlist)
        //TODO: if there are multiple results, remove the this.toggle
        this.toggle()
    }

    //this renders the dom based on whether a user is logged in or not and session storage has a value for "user"
    render() {
        if (this.state.authenticated) {
            return (
                <React.Fragment>
                    <Navbar currentUser={this.state.currentUser} searchData={this.searchData} handleFieldChange={this.handleFieldChange} openModal={this.state.openModal} toggle={this.toggle} />
                    <Modal onclose open={this.state.openModal} >
                        <Button className="closeIcon" icon="window close" position="right" onClick={this.toggle} />
                        <Modal.Content>
                            <Card>
                                <Image  src={this.state.APIinfo.Poster} wrapped ui={false} />
                                <Card.Header>{this.state.APIinfo.Title}</Card.Header>
                                <Card.Meta>Runtime: {this.state.APIinfo.Runtime}</Card.Meta>
                                <Card.Meta>Year: {this.state.APIinfo.Year}</Card.Meta>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Button basic color='green' onClick={this.saveCard}>
                                            Add to Watch List
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>
                        </Modal.Content>
                    </Modal>
                    {/* <searchResults APIinfo={this.state.APIinfo} show={this.state.openModal} onClose={this.toggle} /> */}
                    <ApplicationViews isAuthenticated={this.state.authenticated} />
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