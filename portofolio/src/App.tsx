import { Box } from "@chakra-ui/react"
import { lazy, Suspense, useEffect, useState } from 'react'
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"
import Nama from "./components/Nama"
import BottomNav from "./components/BottomNav"
import { ProfileWidget } from "./components/ProfileWidget"
import PreLoader from "./components/PreLoader"

const Projects = lazy(() => import("./components/Projects"))

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <PreLoader />
      ) : (
        <Box position="relative" pb={20} overflow="hidden">
          <StarryBackground />
          <Nama />
          <ProfileWidget />
          <Box mt={6}>
            <Suspense fallback={<Box>Loading projects...</Box>}>
              <Projects />
            </Suspense>
          </Box>
          <BottomNav />
        </Box>
      )}
    </ThemeProvider>
  )
}

export default App
