import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://crwn-clothing.com/',
//     fetchOptions: {
//       mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   }),
//   cache: new InMemoryCache(),
// });

const httpLink = new HttpLink({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  // uri: 'https://crwn-clothing.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);
