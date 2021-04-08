import React from 'react';
import PageContainer from './pages/pagecontainer';

class Section extends React.PureComponent {
    constructor(props) {
        super(props);
        this.menuChange = this.menuChange.bind(this);
        this.state = {
          menuPage: 1
        };
    }

    menuChange = (currentPage) =>{
        this.setState({ menuPage: currentPage });
    }

    render() {
     return(
        <section>
            <nav>
                <ul>
                    <li><a href='#' className={this.state.menuPage == 1 ? 'active' : ' '} onClick={() => {this.menuChange(1)}}>London</a></li>
                    <li><a href="#" className={this.state.menuPage == 2 ? 'active' : ' '} onClick={() => {this.menuChange(2)}}>Paris</a></li>
                    <li><a href="#" className={this.state.menuPage == 3 ? 'active' : ' '} onClick={() => {this.menuChange(3)}}>Tokyo</a></li>
                </ul>
            </nav>
   
            <article>
                {/* <h1>London</h1>
                <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
                <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p> */}
                <PageContainer menuPage={this.state.menuPage}/>
            </article>
      </section>
     );   
    }
}

export default Section;
