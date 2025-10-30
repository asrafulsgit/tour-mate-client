import { createRoot } from 'react-dom/client'
import './index.css' 
import { RouterProvider } from 'react-router'
import routes from './routes/index.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './redux/store.ts' 
import { Toaster } from "@/components/ui/sonner"

createRoot(document.getElementById('root')!).render(
    <>
    <ReduxProvider store={store}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={routes} />
        <Toaster richColors/>
      </ThemeProvider>
    </ReduxProvider>
  </>
)
