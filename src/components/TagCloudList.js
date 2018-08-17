import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TagCloudListItem from './TagCloudListItem';

const normalizeScore = score => Math.floor(Math.pow(score, 2 / 3)) + 10;

const TagCloudList = ({tagCloud}) => (
    <div className="container">
        <br/>

        <h1>Tag Cloud List</h1>

        <br/>
        <div style={{lineHeight: '1.2'}}>

            {Object.values(tagCloud).map(tag => (
                <TagCloudListItem
                    key={tag.id}
                    id={tag.id}
                    label={tag.label}
                    fontSize={`${normalizeScore(tag.sentimentScore)}px`}
                />
            ))}

        </div>
    </div>
);

const mapStateToProps = (state) => ({
    tagCloud: state.tagCloud
});

TagCloudList.propTypes = {
    tagCloud: PropTypes.shape({}).isRequired
};

export default connect(mapStateToProps)(TagCloudList);