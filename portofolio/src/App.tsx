import { Box } from "@chakra-ui/react"
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"
import { CategoryProvider } from "./contexts/CategoryContext"
import Nama from "./components/Nama"
import BottomNav from "./components/BottomNav"
import { ProfileWidget } from "./components/ProfileWidget"
import Category from "./components/Category"
import CategoryContent from './components/CategoryContent';

function App() {
  return (
    <ThemeProvider>
      <CategoryProvider>
        <Box position="relative" pb={20}>
          <StarryBackground />
          <Nama />
          <ProfileWidget />
          <Category />
          <CategoryContent />
          <BottomNav />
        </Box>
      </CategoryProvider>
    </ThemeProvider>
  )
}

export default App
