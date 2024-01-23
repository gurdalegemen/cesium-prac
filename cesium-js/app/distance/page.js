// 'use server'
'use client'

import {Cartographic, Cartesian2, Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Viewer, Color, defined as cesiumDefined } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import "cesium/Build/Cesium/Widgets/InfoBox/InfoBoxDescription.css"; // Import additional CSS if needed
import "cesium/Build/Cesium/Widgets/InfoBox/InfoBox.css";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ClickPage(){

    var isValid = true;
    var pointCounter = 0;
    // const [selectedPoint, setSelectedPoint] = useState([]);
    var selectedPoint = [];

    // Cartesian coordinate to Cartographic coordinate function.
    function cartesianToCartographic(cartesian){
        var cartographic = Cartographic.fromCartesian(cartesian);
        var longitude = CesiumMath.toDegrees(cartographic.longitude);
        var latitude = CesiumMath.toDegrees(cartographic.latitude);
        var height = CesiumMath.toDegrees(cartographic.height)

        return {longitude,latitude,height}
    }

    function euclideanDistance(selectedPoint) {
        const [point1,point2] = selectedPoint
        const dx = point2.x- point1.x;
        const dy = point2.y - point1.y;
        const dz = point2.z - point1.z;

        //Calculate straight-line distance
        const distance = Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2) + Math.pow(dz,2) );//Cartesian3.distanceSquared(point1,point2);
    
        return distance;
    }

    // Add a handler for pin add on map with right-click event.
    function putPin(viewer, e){
        
        var mousePosition = new Cartesian2(e.clientX, e.clientY);
        var ray = viewer.camera.getPickRay(mousePosition);
        var cartesian = viewer.scene.globe.pick(ray, viewer.scene);

        if (cartesian) {
        var pos = cartesianToCartographic(cartesian)
            viewer.entities.add({
            position: Cartesian3.fromDegrees(pos.longitude, pos.latitude),
            point:{            
                pixelSize:20,
                color: Color.fromRandom({alpha:1.0}),
            },
            })
        }
    }

    async function InitializeMap(){
        
        isValid = false;
        // The URL on your server where CesiumJS's static files are hosted (Assets and Wigdets).
        window.CESIUM_BASE_URL = '/Cesium/';
        
        //Cesium ion access token.
        Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMGJjN2U5Yi01NzllLTQwMTYtYTgwNC1mZjY3Y2Q1NGFjZTciLCJpZCI6MTg5OTg0LCJpYXQiOjE3MDUzOTI2NTR9.l9nLnpdewGt1VCY8-cQqUK1ehh_ZLOwlMQNnAcDAm9E";
        
        
        // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
        const viewer = new Viewer("cesiumGlobe",{
            // requestRenderMode: true,

            homeButton: false,
            fullscreenButton: false,
            
            timeline: false,
            geocoder: false,
            animation: false,
        });

        
        
        // // Add Cesium OSM Buildings, a global 3D buildings layer.
        // const buildingTilesetMethod = async () =>{
        // const  buildingTileset = await createOsmBuildingsAsync();
        // viewer?.scene.primitives.add(buildingTileset);
        // }
        // buildingTilesetMethod();

        // addEventListener(type, function) -> type = 'contextmenu' means right click.
        viewer.canvas.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        putPin(viewer, e);
        });

        //set state selectedItem on map
        const handlePointSelection = (selectedEntity) => {
            if (cesiumDefined(selectedEntity)) {
                var pos = selectedEntity.position._value;//cartesianToCartographic(selectedEntity.position._value);
                selectedPoint = [...selectedPoint, pos];
                pointCounter++;
                if(pointCounter === 2){
                    var distance = euclideanDistance(selectedPoint);
                    if(distance != -1){
                        alert("Distance: "+ distance)
                    }
                }
            } else {
                console.log('Deselected.');
                selectedPoint = [];
                pointCounter = 0;
            }
        };
        viewer.selectedEntityChanged.addEventListener(handlePointSelection);
        

    } // InitilazeMap Async Function

  
    useEffect(()=>{
        if(isValid){
            InitializeMap();
        }
    },[])//end of useEffect


  
  return(
    <Link href="/distance">
      <main id="cesiumGlobe"></main>
    </Link>
  )
}