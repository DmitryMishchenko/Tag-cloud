import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TagCloudListItem = ({label, height, id}) => (
    <Link
        // We need to encode id to treat special characters (e. g. "/") as plain text, not as nested routes.
        to={`/details/${encodeURIComponent(id)}`}
        className="card bg-light text-dark"
        style={{height, paddingLeft: '10px'}}
    >
        {label}
    </Link>
);

TagCloudListItem.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};

export default TagCloudListItem;

