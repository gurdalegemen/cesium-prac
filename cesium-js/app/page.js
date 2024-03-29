// 'use server'
'use client'
import 'semantic-ui-css/semantic.min.css';
import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer, Scene, Color, UrlTemplateImageryProvider } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SearchBar from './component/SearchBarComponent';
import Toolbar from './component/ToolbarComponent';
import MapControl from './component/MapControlComponent';
// import StepGroupComponent from './component/StepGroupComponent';
  

export default function Home(){
  
  var isValid = true;
  const isCity = true;
  var [viewer, setViewer] = useState();


  function findLocation(lon, lat, viewer, isCity){
    if(isCity){
      const targetPosition = Cartesian3.fromDegrees(lon, lat , 1000);
      viewer.camera.setView({
        destination:targetPosition,
      })
    }
    else{
      const targetPosition = Cartesian3.fromDegrees(lon, lat , 15000);
      viewer.camera.setView({
        destination:targetPosition,
      })
    }
   
  }

  function userLocationFlyTo(viewer){

    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = position.coords;

          findLocation(userPos.longitude, userPos.latitude, viewer, isCity)
         
        },
        (error) => {
          if(error.code === 1){
            try {
              fetch("https://ipapi.co/json/")
              .then(response => response.json())
              .then(json => findLocation(json.longitude, json.latitude, viewer, !isCity))
              
            } catch (error) {
              throw new Error(error.message)
            }
          }
        }
      )
    }
  }


  
  async function InitializeMap(){
        
    isValid = false;

    // The URL on your server where CesiumJS's static files are hosted (Assets and Wigdets).
    window.CESIUM_BASE_URL = '/Cesium/';
    
    //Cesium ion access token.
    Ion.defaultAccessToken = process.env.NEXT_PUBLIC_ION_MAP_API_KEY;
    
    
    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    viewer = new Viewer("cesiumGlobe",{

        homeButton: false,
        fullscreenButton: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        infoBox: false,
        navigationHelpButton: false,
        timeline: false,
        geocoder: false,
        animation: false,
    });

    viewer.camera.defaultZoomAmount = 5000;

    userLocationFlyTo(viewer);

    

    setViewer(viewer);

    
  } // InitilazeMap Async Function

  useEffect(()=>{
    if(isValid){
        InitializeMap();
    }
  },[])//end of useEffect




  return(
    <>
      <div className="screenMainPage">
        <div>
          <SearchBar viewer={viewer}/>
        </div>
        <div className="screenToolbar">
          <Toolbar viewer={viewer}/>
        </div>
      </div>
      <div className="screenMapControl">
        <div className="screenControlDivider"/>
          <MapControl mapViewer={viewer}/>
        <div className="screenControlDivider"/>
      </div>
      <Link href="/">
        <div id="cesiumGlobe" className="mapGlobe"></div>
      </Link>
    </>
  )
}