// 'use server'
'use client'
import 'semantic-ui-css/semantic.min.css';
import { Cartesian3, createOsmBuildingsAsync, Ion, Math as CesiumMath, Terrain, Viewer, Scene, Color } from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect } from 'react';
import Link from 'next/link';
import SearchBar from './component/SearchBarComponent';
import Toolbar from './component/ToolbarComponent';
import MapControl from './component/MapControlComponent';
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
        sceneModePicker: false,
        baseLayerPicker: false,
        infoBox: false,
        navigationHelpButton: false,
        
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
      <div id="cesiumGlobe" style={{height:'100vh', width:'100%', position:'relative'}}>
        <div style={{position:'absolute', zIndex:99, paddingTop:'8px', paddingLeft:'16px', width:'100%'}}>
          <div>
            <SearchBar/>
          </div>
          <div style={{position:'absolute',zIndex:99, display:'flex', top:0, bottom:0, right:0, alignItems:'flex-start', justifyContent:'flex-end', paddingRight:'12px !important', paddingTop:'12px !important', paddingLeft:'48px !important'}}>
            <Toolbar/>
          </div>
        </div>
        <div style={{position:'absolute', zIndex:99, display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', right:'8px', top:'64px', bottom:'64px',}}>
              <div style={{flexGrow:1, flexBasis:0}}/>
              <MapControl/>
              <div style={{flexGrow:1, flexBasis:0}}/>
        </div>
        {/* <SideBarComponent/> */}
        {/* <StepGroupComponent/> */}
      </div>
    </Link>
  )
}