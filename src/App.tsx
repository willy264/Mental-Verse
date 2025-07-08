import './App.css'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from "@/components/ui/Sidebar"
import { ThemeProvider } from './components/theme-provider'
import { AppSidebar } from './components/AppSidebar'
import { AppRoutes } from './AppRoutes'
import SearchBar from './components/SearchBar'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    // Add search logic 
  };

  return (
    <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
      <BrowserRouter>
        <div className='min-h-screen dark:bg-black overflow-hidden'>

          <div className="fixed top-0 left-0 right-0 z-40 h-16">
            <main className="flex-1 flex flex-col gap-32">
              {/* <SearchBar onSearchChange={handleSearchChange} className='max-md:ml-20 max-md:mr-2 max-sm:ml-[72px] max-sm:mr-[8px] fixed top-3' /> */}
              <SearchBar onSearchChange={handleSearchChange} className='flex items-center justify-between h-16 px-6 bg-background shadow-md max-md:mx-1 max-sm:mx-0 ' />
              {/* <div className='max-md:ml-24 max-sm:ml-16 fixed top-28 right-10 flex items-center justify-between z-10 rounded-lg overflow-hidden backdrop-blur-xl'>
                <ThemeToggle />
                <h1 className='mx-2'>Apply dark theme</h1>
              </div>                   */}
            </main>
          </div>        

          <div className="overflow-h">
            <SidebarProvider defaultOpen={false}>
              <div className="grid grid-cols-[auto,1fr] w-full">
                <AppSidebar className={'z-20 fixed lg:mt-12 lg:mb-20 max-lg:mt-8'} />
                <AppRoutes />
              </div>
            </SidebarProvider>                      
          </div>

        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
