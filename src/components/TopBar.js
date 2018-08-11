import React from 'react';
import {Link} from 'react-router-dom';

const TopBar = () => (
    <aside className="navbar navbar-dark bg-dark box-shadow">
        <Link className="navbar-brand" to="/">Tag Cloud</Link>
    </aside>
);

export default TopBar;