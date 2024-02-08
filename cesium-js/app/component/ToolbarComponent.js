import { BingMapsImageryProvider, BingMapsStyle } from "cesium";
import { useState } from "react";
import { Button, ButtonGroup, Icon, Dropdown, DropdownMenu, DropdownItem } from "semantic-ui-react";


export default function ToolbarComponent(view){
    
    const [selectedMode, setSelectedMode] = useState('');

    const handleModeChange = async (event, { value }) => {
      setSelectedMode(value);
      if(value === "Satellite"){
        const bingLabelMap = await BingMapsImageryProvider.fromUrl("http://dev.virtualearth.net",{
            key: process.env.NEXT_PUBLIC_BING_MAPS_API_KEY, // Replace with your Bing Maps API key
            mapStyle: BingMapsStyle.AERIAL,
        })
        view.viewer.scene.imageryLayers.addImageryProvider(bingLabelMap);
      }

      if(value === "Roadmap"){
        const bingLabelMap = await BingMapsImageryProvider.fromUrl("http://dev.virtualearth.net",{
            key: process.env.NEXT_PUBLIC_BING_MAPS_API_KEY, // Replace with your Bing Maps API key
            mapStyle: BingMapsStyle.ROAD,
        })
        view.viewer.scene.imageryLayers.addImageryProvider(bingLabelMap);
      }

      if(value === "Hybrid"){

        const bingLabelMap = await BingMapsImageryProvider.fromUrl("http://dev.virtualearth.net",{
            key: process.env.NEXT_PUBLIC_BING_MAPS_API_KEY, // Replace with your Bing Maps API key
            mapStyle: BingMapsStyle.AERIAL_WITH_LABELS,
        })
        view.viewer.scene.imageryLayers.addImageryProvider(bingLabelMap);   
          
      }
      // You can add additional logic here based on the selected mode

    
    };
  
    const options = [
      { key: 'Satellite', text: 'Satellite', value: 'Satellite' },
      { key: 'Roadmap', text: 'Roadmap', value: 'Roadmap' },
      { key: 'Hybrid', text: 'Hybrid', value: 'Hybrid' },
    ];

    return(
        <>
 
                <div className="toolbarSectionOneButtons">
                    <ButtonGroup basic id="toolbarButtonGroup">
                        <Button id="toolbarButtons">
                            <Icon name="road" size="large" color="black"/>
                        </Button>
                        <Button id="toolbarButtons">
                            <Icon name="search plus" size="large" color="black"/>
                        </Button>
                        <Button id="toolbarButtons">
                            <Icon  name="camera" size="large" color="black"/>
                        </Button>
                        <Button id="toolbarButtons">
                            <Icon name="bus" size="large" color="black"/>
                        </Button>
                        <Dropdown
                          id="toolbarButtons"
                          button
                          className='icon'
                          floating
                          icon={<Icon name="clone outline" size="large" color="black"/>}
                          lazyLoad
                          options={options}
                          onChange={handleModeChange}
                          value={selectedMode}
                        />
                    </ButtonGroup>
                </div>
                <div className="toolbarSectionTwoButtons">
                    <ButtonGroup basic id="toolbarButtonGroup">
                        <Button id="toolbarButtons">
                            <Icon name="edit outline" size="large" color="black"/>
                        </Button>
                        <Button id="toolbarButtons">
                            <Icon name="ellipsis horizontal" size="large" color="black"/>     
                        </Button>
                    </ButtonGroup>
                </div>
                <div className="toolbarSectionThreeButtons">
                        <ButtonGroup basic id="toolbarButtonGroup">
                            <Button id="toolbarButtons">
                                <Icon name="bars" size="large" color="black"/>     
                            </Button>
                        </ButtonGroup>
                </div>
        </>

    )
}