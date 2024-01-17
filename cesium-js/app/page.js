// 'use server'
'use client'

import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer, Scene, Color } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect } from 'react';
import Link from 'next/link';
  

export default function Home(){
  useEffect(()=>{
    // The URL on your server where CesiumJS's static files are hosted.
    window.CESIUM_BASE_URL = '/Cesium/';
    

    // Replace `your_access_token` with your Cesium ion access token.
    Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMGJjN2U5Yi01NzllLTQwMTYtYTgwNC1mZjY3Y2Q1NGFjZTciLCJpZCI6MTg5OTg0LCJpYXQiOjE3MDUzOTI2NTR9.l9nLnpdewGt1VCY8-cQqUK1ehh_ZLOwlMQNnAcDAm9E";

    
    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Viewer('cesiumContainer');

    viewer.entities.add({
      position: Cartesian3.fromDegrees(33.70, 39.250),
      point: {
        pixelSize: 20,
        color: Color.RED,
      },
    }) // define a pin on map

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTilesetMethod = async () =>{
      const  buildingTileset = await createOsmBuildingsAsync();
      viewer.scene.primitives.add(buildingTileset);
    }

    buildingTilesetMethod();
    
  })//end of useEffect




  return(
    <Link href="/">
      <main id="cesiumContainer"></main>
    </Link>
  )
}