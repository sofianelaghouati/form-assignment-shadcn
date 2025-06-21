import Page from './crud-app/home/page'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {
  return (
    
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <div className="flex min-h-svh flex-col items-center mt-20">
          <Page />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App