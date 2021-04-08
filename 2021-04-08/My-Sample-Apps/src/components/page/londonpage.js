import React, { Component } from 'react';

class londonpage extends Component {
    constructor(props) {
        super(props);
        this.colourChange = this.colourChange.bind(this);
    }
    colourChange = (val) => {
        this.props.colourChange(val);
    }
    render() {
        return (
            <div>
                London Page
                <button type="button" class="btn btn-primary" onClick={() => this.colourChange(1)}>Red</button>
                <button type="button" class="btn btn-primary" onClick={() => this.colourChange(2)}>Blue</button>
                <button type="button" class="btn btn-primary" onClick={() => this.colourChange(3)}>Green</button>
            </div>
        );
    }
}

export default londonpage;