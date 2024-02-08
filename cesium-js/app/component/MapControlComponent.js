import { ButtonGroup,Button, Icon } from "semantic-ui-react";

export default function MapControlComponent(mapViewer){

    const zoomPlus = () => {
        mapViewer.mapViewer.camera.zoomIn(500000);
    }
    const zoomMinus = () => {
        
        mapViewer.mapViewer.camera.zoomOut(500000);
    }

    return(
        <div className="mapControlSectionMain" >
            <div className="mapControlSectionOne">
                <ButtonGroup id="customButtonGroup" basic vertical>
                    <Button id="customButton" onClick={zoomPlus} icon="plus"/>
                    <Button id="customButton" onClick={zoomMinus} icon="minus"/>
                </ButtonGroup>
            </div>
            <div style={{padding:'4px', marginTop:'8px'}}>
                <div className="mapControlSectionTwo">
                    <Button id="locationCustomButton">
                        <Icon name="location arrow" size="large" color="grey"/>
                    </Button>
                </div>
            </div>
            <div style={{marginTop:'8px'}}>
                <div className="mapControlSectionThree">
                    <Button id="compassCustomButton">
                        <Icon name="compass" size="big" color="grey"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}