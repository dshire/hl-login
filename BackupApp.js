import React, {Component} from 'react';
import logo from './img/homelike.png'
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="body-container">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"><img id="logo" src={logo} alt="Brand"/></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="../navbar/">Default</a></li>
                                <li><a href="../navbar-static-top/">Static top</a></li>
                                <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="main">
                    <div id="login-container" className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <h1>Welcome to React</h1>
                        <p>
                            <button className="btn btn-large btn-success" href="http://react-bootstrap.github.io/components.html" target="_blank">
                                View React Bootstrap Docs
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
