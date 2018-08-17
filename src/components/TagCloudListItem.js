import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const TagCloudListItem = ({label, fontSize, id}) => (
    <Link
        // We need to encode id to treat special characters (e. g. "/") as plain text, not as nested routes.
        to={`/details/${encodeURIComponent(id)}`}
        className="card bg-light d-inline-block align-bottom text-dark"
        style={{fontSize, padding: '2px 10px', margin: '10px'}}
    >
        {label}
    </Link>
);

TagCloudListItem.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
};

export default TagCloudListItem;

