import { Input, Icon, Search } from "semantic-ui-react"

export default function SearchBarComponent(){
    return(
        <div style={{display:'flex', alignItems:'center', borderRadius:'10px', padding:'2px'}}>
            <Input icon="location arrow icon" iconPosition="left" action={{ icon: 'search' }} typeplaceholder="Mekan ve adres arama" size="big"/>
        </div>
    )
}