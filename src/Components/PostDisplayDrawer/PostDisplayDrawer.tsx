import React from 'react'
import {Drawer, Space, Divider, Typography} from 'antd'
import {  
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image
} from 'semantic-ui-react'

import steve from '../../Assets/Images/steve.jpg'

interface PostDisplayProps {
    title: string,
    body?: string,
    applicants?: number,
    closeDrawer: any,
    isOpen: boolean
}

const {Title} = Typography

export default function PostDisplayDrawer(props: PostDisplayProps) {
    return <Drawer size={'large'} placement='right' open={props.isOpen} onClose={props.closeDrawer}>
        <Space direction='vertical' size='large' style={{display: 'flex'}}>
            <Title level={2} style={{textAlign: 'center'}}>{props.title}</Title>
            <Divider>Job Poster</Divider>
            <Card
                link
                header='Eoghan Murray'
                meta='Member since 2014'
                description='Senior HR Recruiter @ ProjectRec'
                fluid
            >
            <CardContent>
                <Image
                    floated='right'
                    size='mini'
                    circular
                    src={steve}
                />
                <CardHeader>Eoghan Murray</CardHeader>
                <CardMeta>Member since 2014</CardMeta>
                <CardDescription>
                    Senior HR Recruiter @ ProjectRec
                </CardDescription>
            </CardContent>
            </Card>
            <Divider>Job Description</Divider>
            <span>{props.body}</span>
        </Space>
    </Drawer>
}