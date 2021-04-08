import React, { Component } from 'react';
import Pagecontainer from './page/pagecontainer'

class Section extends React.Component {

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
                <nav>
                    <ul>
                        <li><a href="#" className={this.state.menuPage === 1 ? 'active' : ' '} onClick={() => {this.menuChange(1)}} >London</a></li>
                        <li><a href="#" className={this.state.menuPage === 2 ? 'active' : ' '} onClick={() => {this.menuChange(2)}} >Paris</a></li>
                        <li><a href="#" className={this.state.menuPage === 3 ? 'active' : ' '} onClick={() => {this.menuChange(3)}} >Tokyo</a></li>                        
                    </ul>
                </nav>

                <article className= {colorch === 1 ? 'bg-color-red' : 
                                    (colorch === 2 ? 'bg-color-blue' : 
                                    (colorch === 3 ? 'bg-color-green' : '' ))}>
                    {/* <h1>London</h1>
                    <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                    <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p> */}
                    <Pagecontainer menuPage={this.state.menuPage} colourChange={(i) =>{this.colourChange(i)}}/>
                </article>

            </section>
        );
    }
}

export default Section;