import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import manageRecipe from './reducers/manageRecipe'
import { composeWithDevTools } from 'redux-devtools-extension'


const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
 
// let store = createStore(manageRecipe, applyMiddleware(thunk))
const middleware = [
  thunk,
];

const store = createStore(
  manageRecipe,
  composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
