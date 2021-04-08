import React from 'react';

import LondonPage from './london';
import ParisPage from './paris';
import TokyoPage from './tokiyo';

class PageContainer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    loadPage(menuPage){
        switch (menuPage) {
            case 1:
                return <LondonPage/>;
            case 2:
                return <ParisPage/>;
            case 3:
                return <TokyoPage/>;
            default:
                return <LondonPage/>;
        }
    }
    render() {
        return(
            <React.Fragment>
                {/* <h1>London</h1>
                <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p> */}
                {this.loadPage(this.props.menuPage)}
                {/* <LondonPage/> */}
            </React.Fragment>
        );
    }
}

export default PageContainer;
