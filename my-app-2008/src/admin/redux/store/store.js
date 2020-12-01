const { createStore, compose, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { reducer } = require("../reducers/reducer");

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
