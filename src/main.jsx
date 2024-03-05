import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from './pages/Root.jsx';
import Pokemon from './pages/Pokemon.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import { Generations } from './pages/Generations.jsx';
import './styles/app.css'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "pokemon",
        element: <Pokemon/>
      },
      {
        path: "generation",
        element: <Generations/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools />
  </QueryClientProvider>
  //</React.StrictMode>,
)
