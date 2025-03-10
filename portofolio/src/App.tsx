import { Box } from "@chakra-ui/react"
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"
import Nama from "./components/Nama"
import BottomNav from "./components/BottomNav"
import { ProfileWidget } from "./components/ProfileWidget"
import ScrollToTopButton from "./components/ScrollToTopButton"

// Import Projects directly to avoid lazy loading delay
import Projects from "./components/Projects";

function App() {
  return (
    <ThemeProvider>
      <Box position="relative" pb={20} overflow="hidden">
        <StarryBackground />
        <Nama />
        <ProfileWidget />
        <Box mt={6}>
          <Projects />
        </Box>
        <BottomNav />
        <ScrollToTopButton />
      </Box>
    </ThemeProvider>
  )
}

export default App
