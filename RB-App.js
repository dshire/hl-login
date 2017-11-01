import React, {Component} from 'react';
import './App.css';
import {Grid, Navbar, Jumbotron, Button, NavItem} from 'react-bootstrap';


class App extends Component {
    render() {
        return (
            <div className="body-container">
                <Navbar inverse fixedTop>
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">React App</a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <NavItem pullRight href="#">Link</NavItem>
                    </Grid>
                </Navbar>
                <div className="main">
                    <div id="login-container" className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <Grid>
                            <h1>Welcome to React</h1>
                            <p>
                                <Button bsStyle="success" bsSize="large" href="http://react-bootstrap.github.io/components.html" target="_blank">
                                    View React Bootstrap Docs
                                </Button>
                            </p>
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
