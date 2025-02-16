import { Box } from "@chakra-ui/react"
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"
import Nama from "./components/Nama"
import BottomNav from "./components/BottomNav"
import { ProfileWidget } from "./components/ProfileWidget"
import Projects from "./components/Projects"

function App() {
  return (
    <ThemeProvider>
      <Box 
        position="relative" 
        pb={20}
        width="100%"
        maxWidth="100%"
        overflow="hidden"
      >
        <StarryBackground />
        <Nama />
        <ProfileWidget />
        <Box maxW="55%" mx="auto" mt={6}>
          <Projects />
        </Box>
        <BottomNav />
      </Box>
    </ThemeProvider>
  )
}

export default App
