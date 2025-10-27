import { createRoot } from 'react-dom/client'
import './index.css' 
import { RouterProvider } from 'react-router'
import routes from './routes/index.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
   <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={routes} /> 
   </ThemeProvider>
)
