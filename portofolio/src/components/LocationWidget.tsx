import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { MapContainer, TileLayer } from 'react-leaflet';
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
                <MapContainer 
                    center={position} 
                    zoom={12}
                    zoomControl={false}
                    dragging={false}
                    doubleClickZoom={false}
                    style={{ height: '100%', width: '100%', borderRadius: '0.375rem' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        className="map-tiles"
                    />
                    <div className="location-dot" />
                </MapContainer>
            </Box>
        </Box>
    );
};

export default LocationWidget;
