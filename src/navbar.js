import React, {Component} from 'react';
import logo from './img/homelike.png'
import enFlag from './img/en.png'
import deFlag from './img/de.png'
import './navbar.css';
import { Button, Nav, Navbar, MenuItem, NavItem, FormGroup, FormControl, NavDropdown, InputGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { searchCity } from './actions';


class BlueNav extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.searchCity = this.searchCity.bind(this);
    }
    handleChange(e){
        //incremental search
        this[e.target.name] = e.target.value;
        console.log(this.search);
        this.props.dispatch(searchCity(this.search));
    }
    searchCity() {
        if (this.search) {
            // go to search page
            browserHistory.push('/search/' + this.search);
        }
    }
    render() {
        return (
            <Navbar id="navbar-blue" inverse fixedTop>
                <Navbar.Header>
                    <Navbar.Brand pullLeft>
                        <a href="https://www.thehomelike.com/en"><img id="logo" src={logo} alt="Brand"/></a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <InputGroup>
                                <FormControl id="city-search" type="text" placeholder="Where do you want to go?" name="search" onChange={e => this.handleChange(e)}/>
                                <InputGroup.Button>
                                    <Button className="city-search-btn" onClick={() => this.searchCity()}><span className="glyphicon glyphicon-search" aria-hidden="true"></span></Button>
                                </InputGroup.Button>
                            </InputGroup>
                        </FormGroup>
                    </Navbar.Form>
                    <Nav pullRight>
                        <LinkContainer to="/landlords">
                            <NavItem eventKey={1}>For Landlords</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <NavItem eventKey={2}>Login</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="Language" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}><img className="flag" src={enFlag} alt="EN"/> English</MenuItem>
                            <MenuItem eventKey={3.2}><img className="flag" src={deFlag} alt="DE"/> Deutsch</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = function(state){
    return {
        isLoggedIn: state.isLoggedIn,
        results: state.results
    };
};

export default connect(mapStateToProps)(BlueNav);
