import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import TagCloudDetailsInfo from './TagCloudDetailsInfo'

const TagCloudDetails = ({match, tagCloud}) => {
    const tag = tagCloud[match.params.tagId];
    return (
        <div className="container">
            <br/>

            <h1>Tag Cloud Details</h1>


            <br/>

            {tag ? <TagCloudDetailsInfo data={tag}/> : <span>no Data to show</span>}

        </div>
    );
}

const mapStateToProps = (state) => ({
    tagCloud: state.tagCloud
});

TagCloudDetails.propTypes = {
    tagCloud: PropTypes.shape({}).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            tagId: PropTypes.string
        })
    }).isRequired,
};

export default connect(mapStateToProps)(TagCloudDetails);