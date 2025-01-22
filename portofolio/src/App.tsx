import { Box } from "@chakra-ui/react"
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"
import Nama from "./components/Nama"
import Navbar from "./components/Navbar"
import BottomNav from "./components/BottomNav"
import ProfileWidget from "./components/ProfileWidget"

function App() {
  return (
    <ThemeProvider>
      <Box position="relative">
        <StarryBackground />
        {/* <Navbar /> */}
        <Nama />
        <ProfileWidget />
        <BottomNav />
      </Box>
    </ThemeProvider>
  )
}

export default App
