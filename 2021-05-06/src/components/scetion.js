import React, { Component } from 'react';
import Pagecontainer from './page/pagecontainer'
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink  } from "react-router-dom";
import HomePage from './page/homepage';
import TopicPage from './page/topicpage';
import Languagepage from './page/languagepage';
import registerpage from './page/registerpage';
import signuppage from './page/signuppage';
import eventhandlerpage from './page/eventhandlerpage';
import getapipage from './page/getapipage';

class Section extends React.Component {
    pathname = window.location.pathname;
    constructor(props) {
        super(props);
        this.menuChange = this.menuChange.bind(this);
        this.colourChange = this.colourChange.bind(this);
        this.state = {
          menuPage: 1,
          colourChange: 0
        };
    }
    

    menuChange = (content) =>{
        this.setState({ menuPage: content });
    }

    colourChange = (item) =>{
        this.setState({ colourChange: item });
    }

    render() {
        const menuContent = this.state.menuContent;
        const colorch = this.state.colourChange;
 
        return (
            <section>
                {/* <nav>
                    <ul>
                        <li><a href="#" className={this.state.menuPage === 1 ? 'active' : ' '} onClick={() => {this.menuChange(1)}} >London</a></li>
                        <li><a href="#" className={this.state.menuPage === 2 ? 'active' : ' '} onClick={() => {this.menuChange(2)}} >Paris</a></li>
                        <li><a href="#" className={this.state.menuPage === 3 ? 'active' : ' '} onClick={() => {this.menuChange(3)}} >Tokyo</a></li> 
                    </ul>
                </nav> 
                
                <article className= {colorch === 1 ? 'bg-color-red' : 
                                    (colorch === 2 ? 'bg-color-blue' : 
                                    (colorch === 3 ? 'bg-color-green' : '' ))}>
                    <Pagecontainer menuPage={this.state.menuPage} colourChange={(i) =>{this.colourChange(i)}}/>
                </article>  */}

                <div >
                    <Router>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink  to='/home' activeClassName="active">Home</NavLink >
                                </li>
                                <li>
                                    <NavLink  to='/topics'  activeClassName="active">Topics</NavLink >
                                </li>
                                <li>
                                    <NavLink  to='/languages'  activeClassName="active">Languages</NavLink >
                                </li>
                                <li>
                                    <NavLink  to='/register'  activeClassName="active">Registeration</NavLink >
                                </li>
                                <li>
                                    <NavLink  to='/form'  activeClassName="active">Forms</NavLink >
                                </li>
                                <li>
                                    <NavLink  to='/event-handler'  activeClassName="active">Event Handlers</NavLink >
                                </li>
                                <li>
                                    <NavLink  to='/getapi'  activeClassName="active">Get Api</NavLink >
                                </li>
                            </ul>
                        </nav>
                        <article className= {colorch === 1 ? 'bg-color-red' : 
                                        (colorch === 2 ? 'bg-color-blue' : 
                                        (colorch === 3 ? 'bg-color-green' : '' ))}>
                            <Route exact path='/home'  component={HomePage} />
                            <Route path='/topics'  component={TopicPage} />
                            <Route path='/languages'  component={Languagepage} />
                            <Route path='/register'  component={registerpage} />
                            <Route path='/form'  component={signuppage} />
                            <Route path='/event-handler'  component={eventhandlerpage} />
                            <Route path='/getapi'  component={getapipage} />
                        </article>
                    </Router>
                </div> 

            </section>
        );
    }
}

export default Section;
 