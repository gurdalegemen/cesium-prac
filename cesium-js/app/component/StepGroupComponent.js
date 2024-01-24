import { StepGroup, Icon, Step, StepContent, StepTitle, StepDescription } from "semantic-ui-react"

export default function StepGroupComponent(){
    return (
        <StepGroup attached='top'>
            <Step>
            <Icon name='world' />
            <StepContent>
                <StepTitle>Cesium JS</StepTitle>
                <StepDescription>Initialize Map</StepDescription>
            </StepContent>
            </Step>
            <Step active>
            <Icon name='map pin'/>
            <StepContent>
                <StepTitle>Put pin on map</StepTitle>
                <StepDescription>Right click on map</StepDescription>
            </StepContent>
            </Step>
            <Step disabled>
            <Icon name='wpexplorer' />
            <StepContent>
                <StepTitle>Try others</StepTitle>
            </StepContent>
            </Step>
        </StepGroup>
    )
}