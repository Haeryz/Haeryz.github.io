import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const styles = {
    galaxy: {
      bg: "rgba(138, 43, 226, 0.3)",
      hoverBg: "rgba(138, 43, 226, 0.5)",
      color: "#FFFFFF",
    },
    "cotton-candy": {
      bg: "rgba(80, 155, 225, 0.3)",
      hoverBg: "rgba(80, 155, 225, 0.5)",
      color: "#FFFFFF",
    },
  };

  const currentStyle = styles[theme];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        zIndex: 1000,
        display: isVisible ? "block" : "none",
      }}
    >
      <IconButton
        aria-label="Scroll to top"
        size="lg"
        colorScheme="purple"
        rounded="full"
        onClick={scrollToTop}
        boxShadow="0px 2px 10px rgba(0,0,0,0.3)"
        bg={currentStyle.bg}
        backdropFilter="blur(8px)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        color={currentStyle.color}
        _hover={{
          bg: currentStyle.hoverBg,
          transform: "translateY(-2px)",
        }}
        _active={{
          transform: "scale(0.95)",
        }}
        transition="all 0.2s"
      >
        <FaArrowUp />
      </IconButton>
    </motion.div>
  );
};

export default ScrollToTopButton;
