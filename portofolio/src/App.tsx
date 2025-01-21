import { Box } from "@chakra-ui/react"
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"
import Nama from "./components/Nama"
import Navbar from "./components/Navbar"

function App() {
  return (
    <ThemeProvider>
      <Box position="relative">
        <StarryBackground />
        <Navbar />
        <Nama />
      </Box>
    </ThemeProvider>
  )
}

export default App
