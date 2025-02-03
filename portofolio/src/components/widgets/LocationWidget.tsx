import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'mapbox-gl/dist/mapbox-gl.css';
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

interface LocationWidgetProps {
    style: {
        childBg: string;
        border: string;
        hoverBg: string;
        text: string;
    };
}

const LocationWidget: React.FC<LocationWidgetProps> = ({ style }) => {
    const position: [number, number] = [-7.965811, 112.634270]; // Malang City coordinates

    // Create custom icon
    const customIcon = new L.DivIcon({
        className: 'custom-marker',
        html: '<div class="pulse-dot"></div>',
        iconSize: [12, 12],
        iconAnchor: [6, 6]
    });

    return (
        <Box
            bg={style.childBg}
            backdropFilter="blur(10px)"
            p={4}
            rounded="md"
            border={style.border}
            transition="all 0.3s ease"
            _hover={{ bg: style.hoverBg }}
            color={style.text}
        >
            <Text 
                mb={2} 
                fontWeight="bold" 
                color={style.text}
                textAlign="center"  
            >
                Location
            </Text>
            <Box h="200px" position="relative" overflow="hidden">
                <Box as="style">{`
                    .custom-marker {
                        background: transparent;
                        border: none;
                    }
                    .pulse-dot {
                        width: 12px;
                        height: 12px;
                        background: #4CAF50;
                        border-radius: 50%;
                        box-shadow: 0 0 0 #4CAF50;
                        animation: pulse 2s infinite;
                    }
                    @keyframes pulse {
                        0% {
                            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
                        }
                        70% {
                            box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
                        }
                        100% {
                            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
                        }
                    }
                    .leaflet-control-attribution {
                        display: none;
                    }
                `}</Box>
                <MapContainer 
                    center={position} 
                    zoom={13}
                    zoomControl={false}
                    dragging={false}
                    doubleClickZoom={false}
                    scrollWheelZoom={false}
                    touchZoom={false}
                    attributionControl={false}
                    style={{ height: '100%', width: '100%', borderRadius: '0.375rem' }}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        className="map-tiles"
                    />
                    <Marker 
                        position={position} 
                        icon={customIcon}
                    />
                </MapContainer>
            </Box>
        </Box>
    );
};

export default LocationWidget;
