// 'use server'
'use client'
import 'semantic-ui-css/semantic.min.css';
import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer, Scene, Color } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect } from 'react';
import Link from 'next/link';
import SideBarComponent from './component/SideBarComponent';
// import StepGroupComponent from './component/StepGroupComponent';
  

export default function Home(){
  
  var isValid = true;
  
  async function InitializeMap(){
        
    isValid = false;
    // The URL on your server where CesiumJS's static files are hosted (Assets and Wigdets).
    window.CESIUM_BASE_URL = '/Cesium/';
    
    //Cesium ion access token.
    Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyMGJjN2U5Yi01NzllLTQwMTYtYTgwNC1mZjY3Y2Q1NGFjZTciLCJpZCI6MTg5OTg0LCJpYXQiOjE3MDUzOTI2NTR9.l9nLnpdewGt1VCY8-cQqUK1ehh_ZLOwlMQNnAcDAm9E";
    
    
    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Viewer("cesiumGlobe",{

        homeButton: false,
        fullscreenButton: false,
        
        timeline: false,
        geocoder: false,
        animation: false,
    });
    
  } // InitilazeMap Async Function

  useEffect(()=>{
    if(isValid){
        InitializeMap();
    }
  },[])//end of useEffect




  return(
    <Link href="/">
      <div id="cesiumGlobe" style={{height:'100vh', width:'100%', position:'absolute'}}>
        <SideBarComponent/>
        {/* <StepGroupComponent/> */}
      </div>
    </Link>
  )
}