import React, { Component } from 'react';
import Londonpage from './londonpage';
import Parispage from './parispage';
import Tokyopage from './tokyopage';


class pagecontainer extends Component {
    constructor(props) {
        super(props);
        this.colourChange = this.colourChange.bind(this);
    }
    colourChange = (item) =>{
        this.props.colourChange(item);
    }
    loadPage(menuPage){
        switch (menuPage) {
            case 1:
                return <Londonpage colourChange={(i) =>{this.colourChange(i)}}/>;
            case 2:
                return <Parispage/>;
            case 3:
                return <Tokyopage/>;
            default:
                return <Londonpage/>;
        }
    }
    render() {
        const menuPage = this.props.menuPage; 
        return (
            <React.Fragment>
                {/* <h1>London</h1>
                <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
                 */}
                    {this.loadPage(this.props.menuPage)}
            </React.Fragment>
        );
    }
}

export default pagecontainer;