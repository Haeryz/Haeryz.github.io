import React from "react";
import {
    Box,
    HStack,
    Text,
    IconButton,
    SimpleGrid,
    Flex,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BiGitBranch } from "react-icons/bi";

const ProfileWidget = () => {
    return (
        <Box bg="gray.900" color="white" p={6} rounded="lg" maxW="1200px" mx="auto">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {/* Location Widget */}
                <Box
                    bg="gray.800"
                    p={4}
                    rounded="md"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Flex direction="column" align="center">
                        <IconButton
                            aria-label="Location"
                            bg="gray.700"
                            mb={2}
                        >
                            <FiMapPin />
                        </IconButton>
                        <Text>Location</Text>
                    </Flex>
                </Box>

                {/* Featured Work */}
                <Box bg="gray.800" p={4} rounded="md">
                    <Text fontWeight="bold" mb={2}>
                        Featured work
                    </Text>
                    <Box
                        bg="gray.700"
                        p={4}
                        rounded="md"
                        textAlign="center"
                        transition="0.3s"
                        _hover={{ bg: "gray.600" }}
                    >
                        <Text fontWeight="semibold">Bookmarked</Text>
                        <Text fontSize="sm">Effortlessly save and organize content</Text>
                    </Box>
                </Box>

                {/* Typing Speed */}
                <Box
                    bg="gray.800"
                    p={4}
                    rounded="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Text>Typing speed</Text>
                    <Text fontSize="4xl" fontWeight="bold">
                        140 wpm
                    </Text>
                    <Text fontSize="sm">15s | 100% accuracy</Text>
                </Box>

                {/* GitHub Activity */}
                <Box bg="gray.800" p={4} rounded="md">
                    <HStack align="center" mb={2}>
                        <BiGitBranch size="20px" />
                        <Text fontWeight="bold">GitHub activity</Text>
                    </HStack>
                    <Box bg="gray.700" p={4} rounded="md">
                        <Text>1,378 contributions this year</Text>
                        <Box h="100px" bg="gray.600" mt={2} />
                    </Box>
                </Box>

                {/* Tech Stack */}
                <Box bg="gray.800" p={4} rounded="md">
                    <Text fontWeight="bold" mb={2}>
                        Tech stacks I'm familiar with
                    </Text>
                    <HStack gap={4}>
                        <Box bg="gray.700" p={2} rounded="md">
                            React
                        </Box>
                        <Box bg="gray.700" p={2} rounded="md">
                            Tailwind
                        </Box>
                        <Box bg="gray.700" p={2} rounded="md">
                            Puppeteer
                        </Box>
                    </HStack>
                </Box>

                {/* Last Played */}
                <Box
                    bg="gray.800"
                    p={4}
                    rounded="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <HStack>
                        <FaSpotify />
                        <Text>Last played</Text>
                    </HStack>
                    <Text fontWeight="bold">Toxic till the end</Text>
                    <Text fontSize="sm">ROSE</Text>
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default ProfileWidget;
