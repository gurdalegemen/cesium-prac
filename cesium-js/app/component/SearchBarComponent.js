import { useState } from "react";
import { Input, Button, ButtonGroup, Icon } from "semantic-ui-react"

export default function SearchBarComponent(){

        const [query, setQuery] = useState('');
        const [locations, setLocations] = useState([]);

        const handleInputChange = (event) =>{
            setQuery(event.target.value);
        };

        const searchLocations = async () =>{

            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);

                if(!response.ok){
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const data = response.json();
                console.log(data);
                setLocations(data);
            
            } catch (error) {
                console.error(error.message, error)
            }
        };


    return(
        <>
        <div style={{display:'flex', alignItems:'center', padding:'2px'}}>
            <div style={{display:'flex', width:'358px'}}>
                <Icon id="searchMarker" name="map marker alternate" color="red" size="large"/>
                <Input id="searchInput" value={query} onChange={handleInputChange} placeholder="Mekan ve adres arama" size="large"/>
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