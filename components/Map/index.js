import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import styles from "./index.module.scss";

const locations = [
  { lat: 47.37218571132273, lng: 8.539590813947916 },
  { lat: 47.37444289155336, lng: 8.537465268791609 },
  { lat: 47.37025773231094, lng: 8.532036477929845 },
  { lat: 47.37596864824298, lng: 8.530877763674765 },
  { lat: 47.37355621873865, lng: 8.549716598801629 },
  { lat: 47.369560238625, lng: 8.522386044695725 },
  { lat: 47.37801518749779, lng: 8.560636961828255 },
  { lat: 47.378541750024475, lng: 8.521869460638031 },
  { lat: 47.37406208121489, lng: 8.523706094797387 },
  { lat: 47.36641804703569, lng: 8.551558152262093 },
  { lat: 47.36656338121047, lng: 8.536409036260489 },
  { lat: 47.38102689629717, lng: 8.544091007328095 },
  { lat: 47.3829123595262, lng: 8.529100025535353 },
  { lat: 47.37441432798394, lng: 8.516931772625675 },
];

export const MapLocations = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 47.37218571132273,
    longitude: 8.539590813947916,
    zoom: 12,
  });
  return (
    <div className={styles.MapContainer}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoiZmFiaW9oYXVzc2VuZXIiLCJhIjoiY2twM3NtOTZnMGVtbTJvbGVqZXI4YzR0eiJ9.ZMvaLb2Poq4u3jv8PBozSA"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        width="100%"
        height="100%"
      >
        {locations.map((location, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={location.lng}
            latitude={location.lat}
          >
            <svg
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <circle cx="25.738" cy="25.738" r="10" fill="#FFB572" />
                <circle
                  cx="25.738"
                  cy="25.738"
                  r="8.33982"
                  stroke="white"
                  strokeWidth="3.32036"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d"
                  x="0.796429"
                  y="0.796429"
                  width="49.8832"
                  height="49.8832"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.4708" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 0 0.375 0 0 0 1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};
