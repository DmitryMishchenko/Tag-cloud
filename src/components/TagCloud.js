import React from 'react';
import {Route} from 'react-router-dom';

import TagCloudList from './TagCloudList';
import TagCloudDetails from './TagCloudDetails';

class TagCloud extends React.Component {
    componentDidMount() {
        console.log('TagCloud is mount');
    }

    render() {
        return (
            <React.Fragment>
                <Route path="/" exact component={TagCloudList} />
                <Route path="/details/:tagId" component={TagCloudDetails} />
            </React.Fragment>
        )
    }
}

export default TagCloud;