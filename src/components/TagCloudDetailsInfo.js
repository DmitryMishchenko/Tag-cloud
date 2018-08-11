import React from 'react';
import PropTypes from "prop-types";

const TagCloudDetailsInfo = ({data: {label, sentiment: {positive = 0, neutral = 0, negative = 0}, pageType}}) => (
    <div>
        <p><strong>Label: </strong> {label} </p>

        <p>
            <strong>Total Mentions: </strong>
            {positive + neutral + negative}
        </p>

        <p>
            <strong>Positive Mentions: </strong>
            {positive}
        </p>

        <p>
            <strong>Neutral Mentions: </strong>
            {neutral}
        </p>

        <p>
            <strong>Negative Mentions: </strong>
            {negative}
        </p>

        <p><strong>List of page types: </strong></p>

        <ul>
            {Object.keys(pageType).map(pageTypeKey => (
                <li key={pageTypeKey}>
                    <i>{pageTypeKey}: {pageType[pageTypeKey]}</i>
                </li>
            ))}
        </ul>
    </div>
);

TagCloudDetailsInfo.propTypes = {
    data: PropTypes.shape({
        label: PropTypes.string,
        sentiment: PropTypes.shape({}),
        pageType: PropTypes.shape({})
    }).isRequired
};

export default TagCloudDetailsInfo;