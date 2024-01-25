import { ButtonGroup,Button, Icon } from "semantic-ui-react";

export default function MapControlComponent(){
    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'flex-end', margin:'0'}}>
            <div style={{backgroundColor:'white', borderRadius:'12px', width:'40px'}}>
                <ButtonGroup basic vertical>
                    <Button id="customButton" icon="plus"/>
                    <Button id="customButton" icon="minus"/>
                </ButtonGroup>
            </div>
            <div style={{backgroundColor:'white', borderRadius:'12px', height:'40px', width:'40px', display:'flex', alignItems:'center',justifyContent:'center', padding:'4px', marginTop:'8px'}}>
                <Button id="locationCustomButton" icon="location arrow"/>
            </div>
            <div style={{backgroundColor:'white', borderRadius:'12px', color:'grey',display:'flex', alignItems:'center',justifyContent:'center', height:'40px', width:'40px', marginTop:'8px'}}>
                <Icon id="compassIcon" name="compass outline" size="big"/>
            </div>
        </div>
    )
}