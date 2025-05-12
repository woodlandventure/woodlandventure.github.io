import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashHistory, createRouter } from '@tanstack/react-router';
import './index.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

const hashHistory = createHashHistory();

const router = createRouter({
  routeTree,
  history: hashHistory,
  basepath: import.meta.env.DEV ? '/woodlandventure.github.io' : '',
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
