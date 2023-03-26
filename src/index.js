import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PostId from './Componentes/PostsList/Id/PostId'
import IdUser from './Componentes/PostsList/Id/IdUser';
import Global from './styles/global'
import Dark from './styles/themes/dark'
import { ThemeProvider } from 'styled-components';

const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>
  },
  {
  path: `/posts/:id`,
  element : <PostId />
  },
  {
    path : `/users/:id`,
    element : <IdUser/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Dark}>
    <Global/>
    <RouterProvider router={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
