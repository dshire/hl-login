import React, {Component} from 'react';
import './login.css';
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock, Col, ButtonToolbar} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { loggedIn, loggedOut } from './actions';


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        if (!this.props.isLoggedIn) {
            this.props.dispatch(loggedOut());
        } else {
            browserHistory.push('/main');
        }
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    emailValidation() {
        if (this.state.mail) {
            if( /(.+)@(.+){2,}\.(.+){2,}/.test(this.state.mail) ){
                return 'success';
            } else {
                return 'error';
            }
        }
    }
    submit(){
        axios.post('/api/login', { email: this.state.mail, pass: this.state.pass })
            .then(resp => {
                const data = resp.data;
                if (!data.success) {
                    console.log(data);
                    this.setState({
                        error: data.error
                    });
                } else {
                    console.log('Login success');
                    this.props.dispatch(loggedIn(data));
                    browserHistory.push('/main');
                }
            });
    }
    render() {
        return(
            <div className="container">
                <Col id="login-container" xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
                    <span className="login-header">
                        <h1 className="login-title">Log in</h1>
                        <div className="not-registered">
                            <h4 className="inline-block">Not registered yet?</h4>
                            
                            <LinkContainer to={{ pathname: "/register" }}><p className="register-link">Register</p></LinkContainer>
                        </div>
                    </span>
                    <ButtonToolbar>
                        <Button className="social-login-button google" block href="GOOGLE_LOGIN" target="_blank"><i className="fa fa-google" aria-hidden="true"></i>Log in with Google </Button>
                        <Button className="social-login-button linkedin" block href="LINKEDIN_LOGIN" target="_blank"><i className="fa fa-xing" aria-hidden="true"></i>Log in with LinkedIn </Button>
                        <Button className="social-login-button xing" block href="XING_LOGIN" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i>Log in with Xing </Button>
                    </ButtonToolbar>
                    <div className="separator">
                        <div>or</div>
                    </div>
                    <FormGroup className="enter-mail" controlId="formEmail" validationState={this.emailValidation()}>
                        <ControlLabel>Email address</ControlLabel>
                        <FormControl type="text"  placeholder="john.d@domain.com" name="mail" onChange={e => this.handleChange(e)}/>
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup className="enter-pass" controlId="formPass">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password"  placeholder="******" name="pass" onChange={e => this.handleChange(e)}/>
                        <FormControl.Feedback />
                        <HelpBlock ><LinkContainer to={{ pathname: "/forgot-password" }}><p className="forgot-pass">Forgot your password?</p></LinkContainer></HelpBlock>
                    </FormGroup>
                    <Button className="login-button" bsSize="small" bsStyle="primary" onClick={() => this.submit()}>Log in</Button>
                </Col>
            </div>
        );
    }
}


const mapStateToProps = function(state){
    return {
        isLoggedIn: state.isLoggedIn
    };
};

export default connect(mapStateToProps)(Login);
