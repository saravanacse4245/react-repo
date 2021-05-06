import React, { Component } from 'react';

class languagepage extends Component {
    render() {
        return (
            <React.Fragment>
                <div style ={{ width: '50%', height: 'inherit',float: 'left', backgroundColor: 'green' }}>
                    Text 1
                </div>
                <div style ={{ width: '50%', height: 'inherit',float: 'right', backgroundColor: 'red' }}>
                    Text 2
                </div>
            </React.Fragment>
        );
    }
}

export default languagepage;