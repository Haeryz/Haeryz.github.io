import { Box } from "@chakra-ui/react"
import { StarryBackground } from "./components/StarryBackground"
import { ThemeProvider } from "./contexts/ThemeContext"
import { CategoryProvider } from "./contexts/CategoryContext"
import Nama from "./components/Nama"
import BottomNav from "./components/BottomNav"
import { ProfileWidget } from "./components/ProfileWidget"
import Category from "./components/Category"
import Projects from "./components/Projects"
import WorkExperience from "./components/WorkExperience"
import Certificate from "./components/Certificate"
import { useCategory } from "./contexts/CategoryContext"

const ContentRenderer = () => {
  const { activeCategory } = useCategory();
  
  switch (activeCategory) {
    case 'project':
      return <Projects />;
    case 'experience':
      return <WorkExperience />;
    case 'certificate':
      return <Certificate />;
    default:
      return null;
  }
}

function App() {
  return (
    <ThemeProvider>
      <CategoryProvider>
        <Box position="relative" pb={20}>
          <StarryBackground />
          <Nama />
          <ProfileWidget />
          <Category />
          <Box mt={4}>
            <ContentRenderer />
          </Box>
          <BottomNav />
        </Box>
      </CategoryProvider>
    </ThemeProvider>
  )
}

export default App
