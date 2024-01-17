// 'use server'
'use client'

import { Cartesian2, Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer, Scene, Color, ScreenSpaceEventHandler, ScreenSpaceEventType } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect, useState } from 'react';
import Link from 'next/link';
  

export default function ClickPage(){


  useEffect(()=>{
    
    // The URL on your server where CesiumJS's static files are hosted.
    window.CESIUM_BASE_URL = '/Cesium/';
    
    // Replace `your_access_token` with your Cesium ion access token.
    Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMGJjN2U5Yi01NzllLTQwMTYtYTgwNC1mZjY3Y2Q1NGFjZTciLCJpZCI6MTg5OTg0LCJpYXQiOjE3MDUzOTI2NTR9.l9nLnpdewGt1VCY8-cQqUK1ehh_ZLOwlMQNnAcDAm9E";
    
    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Viewer('cesiumContainer');

    const handler = viewer.screenSpaceEventHandler;
    
    handler.setInputAction(function(coordinate){
      
      viewer.entities.add({
        position: Cartesian3.fromDegrees(CesiumMath.toDegrees(coordinate.position.x), CesiumMath.toDegrees(coordinate.position.y)),
        point:{            
          pixelSize:20,
          color: Color.fromRandom({alpha:1.0}),
        },
      })
      
    }, ScreenSpaceEventType.RIGHT_CLICK)


    // viewer.entities.add({
    //   position: Cartesian3.fromDegrees(33.70, 39.250),
    //   point: {
    //     pixelSize: 20,
    //     color: Color.RED,
    //   },
    // }) // put a pin on map

    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTilesetMethod = async () =>{
      const  buildingTileset = await createOsmBuildingsAsync();
      viewer?.scene.primitives.add(buildingTileset);
    }

    buildingTilesetMethod();

    // if(viewer.scene){
    //   return ()=>{
    //     viewer.destroy();
    //   }
    // }
    
  })//end of useEffect

  
  return(
    <Link href="/click">
      <main id="cesiumContainer">
      </main>
    </Link>
  )
}