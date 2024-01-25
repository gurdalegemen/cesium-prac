import { Icon } from "semantic-ui-react";


export default function ToolbarComponent(){
    return(
        <>
 
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', height:'40px', alignItems:'center'}}>
                    <div style={{padding:'8px'}}>
                        <Icon fitted name="road" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px'}}>
                        <Icon fitted name="search plus" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px'}}>
                        <Icon fitted name="camera" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px'}}>
                        <Icon fitted name="bus" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px'}}>
                        <Icon fitted name="clone outline" size="large" color="grey"/>
                    </div>
                </div>
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', marginLeft:'12px'}}>
                    <div style={{padding:'8px'}}>
                        <Icon fitted name="edit outline" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px'}}>
                        <Icon fitted name="ellipsis horizontal" size="large" color="grey"/>
                    </div>
                </div>
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', marginLeft:'12px'}}>
                    <div style={{padding:'8px'}}>
                        <Icon fitted name="bars" size="large" color="grey"/>
                    </div>
                </div>
        </>

    )
}