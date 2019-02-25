import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import playgroundStore from './redux/playgroundStore';

console.log(playgroundStore);

ReactDOM.render(
    <Provider store={playgroundStore}>
        <App />
    </Provider>
    , document.getElementById('root')
);