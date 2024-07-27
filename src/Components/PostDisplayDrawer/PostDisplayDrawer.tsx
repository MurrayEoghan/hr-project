import React, {useEffect, useState} from 'react'
import {Drawer, Space, Divider, Typography, Button} from 'antd'
import {  
    CardMeta,
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image
} from 'semantic-ui-react'
import './style.scss'
import axios from 'axios'
import steve from '../../Assets/Images/steve.jpg'
import moment from 'moment'

interface PostDisplayProps {
    title: string,
    body?: string,
    applicants?: number,
    closeDrawer: any,
    authorId?: number,
    isOpen: boolean,
    company: string
}

const {Title, Text} = Typography

export default function PostDisplayDrawer(props: PostDisplayProps) {
    const [author, setAuthor] = useState<any>({})

    useEffect(() => {
        if(props.authorId !== undefined) {
            axios({
                method: 'post',
                url: 'http://localhost:3001/user',
                data: {userId: props.authorId}
            }).then((res) => {
                setAuthor(res.data[0])
            })
        }
    }, [props.authorId])

    return <Drawer size={'large'} placement='right' open={props.isOpen} onClose={props.closeDrawer}>
        <Space direction='vertical' size='large' style={{display: 'flex', height: '100%'}}>
            <Title level={2} className='job-title'>{props.title}</Title>
            <Title level={4} className='job-company'>{props.company}</Title>

            <Divider>Job Poster</Divider>
            <Card
                link
                fluid
            >
            <CardContent>
                <Image
                    floated='right'
                    size='mini'
                    circular
                    src={steve}
                />
                <CardHeader>{author.fname} {author.lname}</CardHeader>
                <CardMeta>Member since {moment(new Date(author.joined)).year()}</CardMeta>
                <CardDescription>
                    {author.jobtitle} @ {author.company}
                </CardDescription>
            </CardContent>
            </Card>
            <Divider>Job Description</Divider>
            <span>{props.body}</span>
        </Space>
        <Button block className='apply-button'>Apply</Button>
    </Drawer>
}