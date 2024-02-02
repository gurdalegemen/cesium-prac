import { useState } from "react";
import {Search, Button, ButtonGroup, Icon} from "semantic-ui-react"

export default function SearchBarComponent(){

        const [locations, setLocations] = useState([{}]);

        const handleInputChange = (event) =>{
            searchLocations(event.target.value);
        };

        const searchLocations = async (query) =>{

            try {

                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
                .then(response => response.json())
                .then(json => setLocations(json))
            
            } catch (error) {
                console.error(error.message, error)
            }
        };

       
        const columns = locations.map(({ name: title, display_name: description }) => ({
            title,
            description,
          }));
    return(
        <>
        <div style={{display:'flex', alignItems:'center', padding:'2px'}}>
            <div style={{display:'flex', width:'358px'}}>
                <Icon id="searchMarker" name="map marker alternate" color="red" size="large"/>
                <Search id="searchInput" icon={null} onSearchChange={handleInputChange} results={columns} showNoResults={false} placeholder="Mekan ve adres arama" size="large"/>
                <ButtonGroup id="searchCustomBtnGroup" basic>
                    <Button id="searchInputButton" onClick={searchLocations} >
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