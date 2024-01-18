// 'use server'
'use client'

import {Cartographic, Cartesian2, Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer, Scene, Color, ScreenSpaceEventType } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect, useState } from 'react';
import Link from 'next/link';
  
export default function ClickPage(){

  // Add a handler for pin add on map with right-click event.
  function putPin(viewer, e){
    console.log(e);
    
    var mousePosition = new Cartesian2(e.clientX, e.clientY);
    var ray = viewer.camera.getPickRay(mousePosition);
    var cartesian = viewer.scene.globe.pick(ray, viewer.scene);

    if (cartesian) {
      var cartographic = Cartographic.fromCartesian(cartesian);
      var longitude = CesiumMath.toDegrees(cartographic.longitude);
      var latitude = CesiumMath.toDegrees(cartographic.latitude);

        viewer.entities.add({
          position: Cartesian3.fromDegrees(longitude,latitude),
          point:{            
            pixelSize:20,
            color: Color.fromRandom({alpha:1.0}),
          },
        })
    }
  }

  async function InitializeMap(){
    // The URL on your server where CesiumJS's static files are hosted (Assets and Wigdets).
    window.CESIUM_BASE_URL = '/Cesium/';
    
    //Cesium ion access token.
    Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMGJjN2U5Yi01NzllLTQwMTYtYTgwNC1mZjY3Y2Q1NGFjZTciLCJpZCI6MTg5OTg0LCJpYXQiOjE3MDUzOTI2NTR9.l9nLnpdewGt1VCY8-cQqUK1ehh_ZLOwlMQNnAcDAm9E";
    
    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Viewer('cesiumContainer');
    
    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTilesetMethod = async () =>{
      const  buildingTileset = await createOsmBuildingsAsync();
      viewer?.scene.primitives.add(buildingTileset);
    }
    buildingTilesetMethod();

    // addEventListener(type, function) -> type = 'contextmenu' means right click.
    viewer.canvas.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      putPin(viewer, e);
    });

    
  } // InitilazeMap Async Function


  useEffect(()=>{

    InitializeMap();
    
  },[])//end of useEffect

  
  return(
    <Link href="/click">
      <main id="cesiumContainer">
      </main>
    </Link>
  )
}