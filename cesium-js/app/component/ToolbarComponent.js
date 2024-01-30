import { Button, ButtonGroup, Icon } from "semantic-ui-react";


export default function ToolbarComponent(){
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
                        <Button id="toolbarButtons">
                            <Icon name="clone outline" size="large" color="black"/>
                        </Button>
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