import { Box } from "@chakra-ui/react";
import { useCategory } from "../contexts/CategoryContext";
import Projects from "./Projects";

const CategoryContent = () => {
  const { activeCategory } = useCategory();

  const renderContent = () => {
    switch (activeCategory) {
      case 'project':
        return <Projects />;
      case 'experience':
        return <div>Experience Content</div>; // Replace with actual Experience component
      case 'certificate':
        return <div>Certificate Content</div>; // Replace with actual Certificate component
      default:
        return null;
    }
  };

  return (
    <Box
      maxW="55%"
      mx="auto"
      mt={6}
      minH="400px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {renderContent()}
    </Box>
  );
};

export default CategoryContent;
