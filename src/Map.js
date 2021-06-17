import React, { useEffect, useRef, useState } from 'react'
import { Map as LeafletMap, TileLayer, Marker, useMap } from "react-leaflet";

import { showDataMap } from './util'
import {osm} from './osm-provider'
import "./Map.css" 
// import {ChangeView} from './ChangeView'

const Map = ({countries,casesType="cases" ,center,zoom}) => {
    const mapRef = useRef(null);

    useEffect(()=>{
     const {current ={}} = mapRef;
     const {leafletElement : map} = current;

     setTimeout(()=>{
          map.flyTo(center);
     },1)

    },[center,zoom])

 return (
  <div className="map">
   <LeafletMap  center={center} zoom={zoom}  
        scrollWheelZoom={false} ref={mapRef} >
     
     <TileLayer
          url={osm.maptiler.url}
          attribution={osm.maptiler.attribution}
     />

      {
      showDataMap(countries,casesType)
      }
   </LeafletMap>
  </div>
 );
}

export default Map;

