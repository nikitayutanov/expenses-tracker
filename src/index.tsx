import { ModalsProvider } from '@mantine/modals';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import 'assets/styles/index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ModalsProvider>
        <App />
      </ModalsProvider>
    ),
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
