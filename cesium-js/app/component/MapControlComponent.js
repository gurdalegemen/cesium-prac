import { ButtonGroup,Button, Icon } from "semantic-ui-react";

export default function MapControlComponent(mapViewer){

    const zoomPlus = () => {
        mapViewer.mapViewer.camera.zoomIn(500000);
    }
    const zoomMinus = () => {
        
        mapViewer.mapViewer.camera.zoomOut(500000);
    }

    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'flex-end', margin:'0'}}>
            <div style={{borderRadius:'12px',height:'80px', width:'40px', display:'flex', alignItems:'center'}}>
                <ButtonGroup id="customButtonGroup" basic vertical>
                    <Button id="customButton" onClick={zoomPlus} icon="plus"/>
                    <Button id="customButton" onClick={zoomMinus} icon="minus"/>
                </ButtonGroup>
            </div>
            <div style={{padding:'4px', marginTop:'8px'}}>
                <div style={{backgroundColor:'white', borderRadius:'12px', height:'40px', width:'40px', display:'flex', alignItems:'center',justifyContent:'center'}}>
                    <Button id="locationCustomButton">
                        <Icon name="location arrow" size="large" color="grey"/>
                    </Button>
                </div>
            </div>
            <div style={{marginTop:'8px'}}>
                <div style={{backgroundColor:'white', borderRadius:'12px', color:'grey',display:'flex', alignItems:'center',justifyContent:'center', height:'40px', width:'40px'}}>
                    <Button id="compassCustomButton">
                        <Icon name="compass" size="big" color="grey"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}