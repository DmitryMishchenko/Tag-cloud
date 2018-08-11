import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import TagCloudList from './TagCloudList';
import TagCloudDetails from './TagCloudDetails';
import {loadTagCloudData} from '../actions/tagCloud';

class TagCloud extends React.Component {
    componentDidMount() {
        this.props.loadTagCloudData();
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


export default connect(null, {loadTagCloudData})(TagCloud);