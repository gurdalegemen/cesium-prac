import { Sidebar, Menu, MenuItem, Icon } from "semantic-ui-react";
import ListComponent from "./ListComponent";

export default function SideBarComponent(){
    return(
        <Sidebar 
        as={Menu}
        inverted
        vertical
        visible
        width='thin'
        >
          <MenuItem as='label'>
            <Icon name='world'/>
            MenuItem1
          </MenuItem>
          <MenuItem as='label'>
            <Icon name='world'/>
            MenuItem2
          </MenuItem>
          <MenuItem as='label'>
            <Icon name='world'/>
            MenuItem3
          </MenuItem>
          <ListComponent/>
        </Sidebar>
    )
}