import React from 'react'
import {Button} from 'react-bootstrap'
import {Card, CardContent, Icon} from 'semantic-ui-react'
import "../../theme.scss"

export default function IndexPage() {
    return (
        <Card>
            <CardContent header='Front End Developer'/>
            <CardContent description="We're on a mission to revolutionize how businesses solve challenges through software innovation. As a Senior React Developer, you'll be at the forefront of this transformation. We value a culture of experimentation, learning, and improvement. Collaborate with talented peers in an inclusive and dynamic environment, where your diverse thoughts and creative solutions shape the experiences of users across the globe." />
            <CardContent extra>
                <Icon name='tasks'/> Applicants 999+
            </CardContent>
        </Card>
    )
}