import React from "react";
import {
    Box,
    HStack,
    Text,
    SimpleGrid,
} from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
interface DefaultIconPrototype extends L.Icon.Default {
    _getIconUrl?: string;
}
delete (L.Icon.Default.prototype as DefaultIconPrototype)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: '/markers/marker-icon.png',
    iconRetinaUrl: '/markers/marker-icon-2x.png',
    shadowUrl: '/markers/marker-shadow.png'
});

const ProfileWidget = () => {
    const position: [number, number] = [-7.965811, 112.634270]; // Malang City coordinates

    return (
        <Box bg="gray.900" color="white" p={6} rounded="lg" maxW="1200px" mx="auto">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
                {/* Location Widget */}
                <Box
                    bg="gray.800"
                    p={4}
                    rounded="md"
                >
                    <Text mb={2} fontWeight="bold">Location</Text>
                    <Box h="200px" position="relative" overflow="hidden">
                        <MapContainer 
                            center={position} 
                            zoom={12}
                            zoomControl={true}
                            scrollWheelZoom={false}
                            style={{ height: '100%', width: '100%', borderRadius: '0.375rem' }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                className="map-tiles"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Malang, East Java, Indonesia
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Box>
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
