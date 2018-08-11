import React from 'react';
import {Route} from 'react-router-dom';
import TopBar from './components/TopBar';
import TagCloud from './components/TagCloud';

const App = () => (
    <React.Fragment>
        <Route path="/" component={TopBar} />
        <Route path="/" component={TagCloud} />
    </React.Fragment>
);

export default App;
