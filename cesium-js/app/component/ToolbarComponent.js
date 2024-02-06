import { SceneMode, ImageryLayer, OpenStreetMapImageryProvider, BingMapsImageryProvider, BingMapsStyle } from "cesium";
import { useState } from "react";
import { Button, ButtonGroup, Icon, Dropdown } from "semantic-ui-react";


export default function ToolbarComponent(view){
    const [selectedMode, setSelectedMode] = useState('3D');

    const handleModeChange = async (event, { value }) => {
      setSelectedMode(value);
      if(value === "Satelite"){
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
      { key: 'Satelite', text: 'Satelite', value: 'Satelite' },
      { key: 'Roadmap', text: 'Roadmap', value: 'Roadmap' },
      { key: 'Hybrid', text: 'Hybrid', value: 'Hybrid' },
    ];

    return(
        <>
 
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', height:'40px', alignItems:'center', height:'40px', width:'200px'}}>
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
                        //   labeled
                          icon={<Icon name="clone outline" size="large" color="black"/>}
                          options={options}
                          onChange={handleModeChange}
                          value={selectedMode}
                        />
                        {/* <Button id="toolbarButtons">
                            <Icon name="clone outline" size="large" color="black"/>
                        </Button> */}
                    </ButtonGroup>
                </div>
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', marginLeft:'12px', height:'40px', width:'80px', alignItems:'center',justifyContent:'center', border:'none'}}>
                    <ButtonGroup basic id="toolbarButtonGroup">
                        <Button id="toolbarButtons">
                            <Icon name="edit outline" size="large" color="black"/>
                        </Button>
                        <Button id="toolbarButtons">
                            <Icon name="ellipsis horizontal" size="large" color="black"/>     
                        </Button>
                    </ButtonGroup>
                </div>
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', marginLeft:'12px', height:'40px', width:'40px', alignItems:'center'}}>
                        <ButtonGroup basic id="toolbarButtonGroup">
                            <Button id="toolbarButtons">
                                <Icon name="bars" size="large" color="black"/>     
                            </Button>
                        </ButtonGroup>
                </div>
        </>

    )
}