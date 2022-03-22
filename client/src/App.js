import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, createHttpLink, AppoloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route component={Home} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
