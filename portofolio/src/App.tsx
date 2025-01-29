import { Box } from "@chakra-ui/react"
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"
import Nama from "./components/Nama"
import BottomNav from "./components/BottomNav"
import { ProfileWidget } from "./components/ProfileWidget"
import Category from "./components/Category"

function App() {
  return (
    <ThemeProvider>
      <Box position="relative" pb={20}>
        <StarryBackground />
        <Nama />
        <ProfileWidget />
        <Category />
        <BottomNav />
      </Box>
    </ThemeProvider>
  )
}

export default App
