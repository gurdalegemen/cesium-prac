import { useState } from "react";
import {Search, Button, ButtonGroup, Icon, SearchResults} from "semantic-ui-react";
import { Cartesian3 } from "cesium";

export default function SearchBarComponent(view){

        const [locations, setLocations] = useState([{
            place_id: "",
            name: "", 
            display_name: "",
            lat: "",
            lon: "",
        }]);

        const handleInputChange = (event) =>{
            searchLocations(event.target.value);
        };

        const flyToSelectedItem = (result) => {
            const targetPosition = Cartesian3.fromDegrees(parseFloat(result.longitude), parseFloat( result.latitude), 1000);
            view.viewer.camera.setView({
              destination:targetPosition,
            })
        }

        const searchLocations = async (query) =>{
            try {
                if(query !== ""){
                    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`)
                    .then(response => response.json())
                    .then(json => setLocations(json))
                }
            
            } catch (error) {
                console.error(error.message, error)
            }
        };

       
        const columns = locations.map(({
                place_id: id,
                name: title, 
                display_name: description,
                lat: latitude,
                lon: longitude,

            }) => ({
                    key: id,
                    title,
                    description,
                    latitude,
                    longitude
        }));

    return(
        <>
        <div className="searchbarContainer" >
            <div className="searchInput" >
                <Icon id="searchMarker" name="map marker alternate" color="red" size="large"/>
                <Search id="searchInput" icon={null}
                    results={columns}
                    onSearchChange={handleInputChange} 
                    loading 
                    onResultSelect={(e, data) => flyToSelectedItem(data.result)} 
                    placeholder="Mekan ve adres arama" 
                    size="large"/>
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
        <div className="searchbarBtnNone">
            <Button id="searchButton" icon="caret right" type="submit"/>
        </div>
        </>
    )
}