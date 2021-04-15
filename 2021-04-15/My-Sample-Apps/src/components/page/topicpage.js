import React from 'react';
import {Route, Link} from 'react-router-dom';

import Topic from './topic';
import data from './data.json';

const TopicPage = ({ match }) => (
  <div> 
    This is a topics
    <div>
    {data.map((item, id) => 
      <div key={id}>
        <Link to={{
          pathname: `${match.url}/${item._id}`,
          state: item
        }}> {item.name}</Link> 
      </div>
    )}
      
    </div>
    <hr />

    <Route path={`${match.path}/:id`} component={Topic} />
  </div>
);

export default TopicPage;