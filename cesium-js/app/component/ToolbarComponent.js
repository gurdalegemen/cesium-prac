import { Icon } from "semantic-ui-react";


export default function ToolbarComponent(){
    return(
        <>
 
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', height:'40px', alignItems:'center', height:'40px', width:'200px'}}>
                    <div style={{padding:'8px', height:'40px', width:'40px'}}>
                        <Icon className="toolbarIcons" fitted name="road" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px', height:'40px', width:'40px'}}>
                        <Icon className="toolbarIcons" fitted name="search plus" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px', height:'40px', width:'40px'}}>
                        <Icon className="toolbarIcons" fitted name="camera" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px', height:'40px', width:'40px'}}>
                        <Icon className="toolbarIcons" fitted name="bus" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px', height:'40px', width:'40px'}}>
                        <Icon className="toolbarIcons" fitted name="clone outline" size="large" color="grey"/>
                    </div>
                </div>
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', marginLeft:'12px', height:'40px', width:'80px', alignItems:'center'}}>
                    <div style={{padding:'8px', height:'40px', width:'40px'}}>
                        <Icon className="toolbarIcons" fitted name="edit outline" size="large" color="grey"/>
                    </div>
                    <div style={{padding:'8px', height:'40px', width:'40px'}}>
                        <Icon className="toolbarIcons" fitted name="ellipsis horizontal" size="large" color="grey"/>
                    </div>
                </div>
                <div style={{display:'flex',borderRadius:'12px', backgroundColor:'white', marginLeft:'12px', height:'40px', width:'40px', alignItems:'center'}}>
                    <div style={{padding:'8px', height:'40px', width:'40px'}}>
                        <Icon className="toolbarIcons" fitted name="bars" size="large" color="grey"/>
                    </div>
                </div>
        </>

    )
}