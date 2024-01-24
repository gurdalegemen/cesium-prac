import { List, ListItem, ListIcon, ListContent } from "semantic-ui-react"

export default function ListComponent(){
    return (
        <List>
            <ListItem>
              <ListIcon name='world' />
              <ListContent>Cesium JS</ListContent>
            </ListItem>
            <ListItem>
              <ListIcon name='marker' />
              <ListContent>New York, NY</ListContent>
            </ListItem>
            <ListItem>
              <ListIcon name='linkify' />
              <ListContent>
                <label>cesium.com</label>
              </ListContent>
            </ListItem>
        </List>
    )
}