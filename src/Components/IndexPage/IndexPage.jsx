import React, {useState} from 'react'
import {Card, CardContent, Icon} from 'semantic-ui-react'
import {Button} from 'antd'
import _ from 'lodash'
import "../../theme.scss"
import "./style.scss"
import PostDisplayDrawer from '../PostDisplayDrawer/PostDisplayDrawer'

export default function IndexPage() {
    const [open, setOpen] = useState(false)
    const [selectedJob, setSelectedJob] = useState({})

    const handleOpen = (state) => {
        setSelectedJob(state)
        setOpen(true)
    }
    
    const dummyData = [{
        header: 'Front End Developer',
        desc: "We're on a mission to revolutionize how businesses solve challenges through software innovation. As a Senior React Developer, you'll be at the forefront of this transformation. We value a culture of experimentation, learning, and improvement. Collaborate with talented peers in an inclusive and dynamic environment, where your diverse thoughts and creative solutions shape the experiences of users across the globe.",
        applicants: 102,
        id: 'fed1' 
    }, {
        header: 'Back End Developer',
        desc: "We're on a mission to revolutionize how businesses solve challenges through software innovation. As a Senior React Developer, you'll be at the forefront of this transformation. We value a culture of experimentation, learning, and improvement. Collaborate with talented peers in an inclusive and dynamic environment, where your diverse thoughts and creative solutions shape the experiences of users across the globe.",
        applicants: 86,
        id: 'bed1' 
    }, {
        header: 'Full Stack Developer',
        desc: "We're on a mission to revolutionize how businesses solve challenges through software innovation. As a Senior React Developer, you'll be at the forefront of this transformation. We value a culture of experimentation, learning, and improvement. Collaborate with talented peers in an inclusive and dynamic environment, where your diverse thoughts and creative solutions shape the experiences of users across the globe.",
        applicants: 9999,
        id: 'fst1' 
    }, {
        header: 'Devops engineer',
        desc: "We're on a mission to revolutionize how businesses solve challenges through software innovation. As a Senior React Developer, you'll be at the forefront of this transformation. We value a culture of experimentation, learning, and improvement. Collaborate with talented peers in an inclusive and dynamic environment, where your diverse thoughts and creative solutions shape the experiences of users across the globe.",
        applicants: 5,
        id: 'do1' 
    },  {
        header: 'Devops engineer',
        desc: "We're on a mission to revolutionize how businesses solve challenges through software innovation. As a Senior React Developer, you'll be at the forefront of this transformation. We value a culture of experimentation, learning, and improvement. Collaborate with talented peers in an inclusive and dynamic environment, where your diverse thoughts and creative solutions shape the experiences of users across the globe.",
        applicants: 5,
        id: 'do2' 
    }]
    return <>
            {_.map(dummyData, (v) => (

                    <Card fluid className='job-listing' key={v.id}>
                        <CardContent header={v.header}/>
                        <CardContent description={v.desc} />
                        <CardContent extra>
                            <span className='applicant-count-text'><Icon name='tasks'/> Applicants {v.applicants} </span><Button className='apply-button' onClick={() => handleOpen(v)}>Apply</Button>
                        </CardContent>
                    </Card>

            ))}
            <PostDisplayDrawer key={selectedJob.id} closeDrawer={() => setOpen(false)} isOpen={open} applicants={selectedJob.applicants} title={selectedJob.header} body={selectedJob.desc} />
            
    </>
}