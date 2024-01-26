import { Input, Button, ButtonGroup, Icon } from "semantic-ui-react"

export default function SearchBarComponent(){
    return(
        <>
        <div style={{display:'flex', alignItems:'center', padding:'2px'}}>
            <div style={{display:'flex', width:'358px'}}>
                <Icon id="searchMarker" name="map marker alternate" color="red" size="large"/>
                <Input id="searchInput" placeholder="Mekan ve adres arama" size="large"/>
                <ButtonGroup id="searchCustomBtnGroup" basic>
                    <Button id="searchInputButton">
                        <Icon id="iconMarginPattern" name="search" size="large"/>
                    </Button>
                    <Button id="searchRouteButton">
                        <Icon id="iconMarginPattern" name="map signs" size="large"/>
                    </Button>
                </ButtonGroup>
            </div>
        </div>
        <div style={{position:'absolute', top:0, marginTop:'16px', marginLeft:'372px'}}>
            <Button id="searchButton" icon="caret right" type="submit"/>
        </div>
        </>
    )
}