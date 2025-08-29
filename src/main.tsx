import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Theme } from './config/Theme.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme} >
      <CssBaseline />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
