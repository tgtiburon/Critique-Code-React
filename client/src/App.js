import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import { AppProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql'
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <AppProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Profile" component={ProfilePage} />
            <Route component={Home} />
          </Switch>
        </AppProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
