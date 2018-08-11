import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TagCloudListItem from './TagCloudListItem';

const TagCloudList = ({tagCloud}) => (
    <div className="container">
        <br/>

        <h1>Tag Cloud List</h1>

        <br/>

        {Object.values(tagCloud).map(tag => (
            <React.Fragment key={tag.id}>
                <TagCloudListItem
                    id={tag.id}
                    label={tag.label}
                    height={`${tag.sentimentScore}px`}
                />
                <br />
            </React.Fragment>
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    tagCloud: state.tagCloud
});

TagCloudList.propTypes = {
    tagCloud: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps)(TagCloudList);