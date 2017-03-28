import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render () {
        return (
            <div>React with Babel and webpack!</div>
        )
    }
}

render(<App></App>, document.getElementById('app'));