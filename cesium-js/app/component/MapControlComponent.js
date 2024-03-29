import { ButtonGroup,Button, Icon } from "semantic-ui-react";
import { Cartesian3, Ellipsoid } from "cesium";

export default function MapControlComponent(mapViewer){


    const getCurrentHeight = () => {
        return Math.abs(Math.round(Ellipsoid.WGS84.cartesianToCartographic(mapViewer.mapViewer.camera.position).height));
    }

    const zoomPlus = () => {

      if(getCurrentHeight() > (mapViewer.mapViewer.camera.defaultZoomAmount)){
        mapViewer.mapViewer.camera.zoomIn();
      }
      else{
        alert("use scroll to zoom in");
      }
  
    }
    const zoomMinus = () => {

        mapViewer.mapViewer.camera.zoomOut();
    }
    

    function findLocation(lon, lat, viewer, isCity){
        if(isCity){
          const targetPosition = Cartesian3.fromDegrees(lon, lat , 1000);
          viewer.camera.flyTo({
            destination:targetPosition,
          })
        }
        else{
          const targetPosition = Cartesian3.fromDegrees(lon, lat , 10000);
          viewer.camera.flyTo({
            destination:targetPosition,
          })
        }
       
      }
    
      function userLocationFlyTo(viewer){
    
        if('geolocation' in navigator){
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userPos = position.coords;
    
              findLocation(userPos.longitude, userPos.latitude, viewer, true)
             
            },
            (error) => {
              if(error.code === 1){
                try {
                  fetch("https://ipapi.co/json/")
                  .then(response => response.json())
                  .then(json => findLocation(json.longitude, json.latitude, viewer, false))
                  
                } catch (error) {
                  throw new Error(error.message)
                }
              }
            }
          )
        }
      }

      const handleLocationClick = () => {
        userLocationFlyTo(mapViewer.mapViewer)
    }

    
    return(
        <div className="mapControlSectionMain" >
            <div className="mapControlSectionOne">
                <ButtonGroup id="customButtonGroup" basic vertical>
                    <Button id="customButton" onClick={zoomPlus} icon="plus"/>
                    <Button id="customButton" onClick={zoomMinus} icon="minus"/>
                </ButtonGroup>
            </div>
            <div className="mapControlSectionTwoContainer">
                <div className="mapControlSectionTwo">
                    <Button id="locationCustomButton" onClick={handleLocationClick}>
                        <Icon name="location arrow" size="large" color="black"/>
                    </Button>
                </div>
            </div>
            <div className="mapControlSectionTwoContainer">
                <div className="mapControlSectionThree">
                    <Button id="compassCustomButton">
                        <Icon name="compass" size="big" color="grey"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}