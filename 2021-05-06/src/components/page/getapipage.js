import React, { Component } from "react";
import { render } from "react-dom";
 
import CallumAPI from  "../../service/getapiservice";

class getapipage extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      posts: [],
      loading: true
    };
  }

  componentWillMount() {
    CallumAPI.all().then(posts => {
      this.setState({ posts, loading: false });
    });
  }

  render() {
    const { posts, loading } = this.state;
    return (
        <ul>
            {loading ? 'Loading....' : 
                posts.map(p => (
                    <li key={p.id}>{p.name}</li>
                ))
            }
        </ul>
    );
  }
}

export default getapipage;


