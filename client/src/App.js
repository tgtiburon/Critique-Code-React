<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, createHttpLink, AppoloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';
=======
import React from "react";
import logo from "./logo.svg";
import "./App.css";
>>>>>>> 85536e60a2763c8b2e10bbf9142e4cb7bfdb8d0c

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
