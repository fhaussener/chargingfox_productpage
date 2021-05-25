import * as React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

import styles from "./index.module.scss";

export const MapLocations = ({ mapboxToken }) => {
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
        mapboxApiAccessToken={mapboxToken}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </div>
  );
};
