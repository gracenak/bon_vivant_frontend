import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import manageRecipe from './reducers/manageRecipe'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom' 

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store = createStore(
  manageRecipe,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);