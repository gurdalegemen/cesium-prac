import { Input, Button, Icon, Search } from "semantic-ui-react"

export default function SearchBarComponent(){
    return(
        <div style={{display:'flex', alignItems:'center', borderRadius:'10px', padding:'2px'}}>
            <Input id="searchInput" icon="red map marker alternate" iconPosition="left" action={{ icon: 'search' }} placeholder="Mekan ve adres arama" size="large"/>
            <div style={{}}>
                <Button id="searchButton" icon="caret right" type="submit"/>
            </div>
        </div>
    )
}