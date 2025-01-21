import { Box } from "@chakra-ui/react"
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <Box>
        <StarryBackground />
      </Box>
    </ThemeProvider>
  )
}

export default App
