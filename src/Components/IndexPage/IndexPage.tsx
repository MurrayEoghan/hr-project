import React, {useState, useEffect} from 'react'
import {Card, CardContent, Icon} from 'semantic-ui-react'
import {Button, Pagination} from 'antd'
import type { PaginationProps } from 'antd'
import _ from 'lodash'
import "../../theme.scss"
import "./style.scss"
import PostDisplayDrawer from '../PostDisplayDrawer/PostDisplayDrawer'
import axios from 'axios'

export default function IndexPage() {
    const [open, setOpen] = useState<boolean>(false)
    const [selectedJob, setSelectedJob] = useState<any>({})
    const [listings, setListings] = useState<any>([])

    useEffect(() => {
        axios.get('http://localhost:3001/listings').then(res => {
            setListings(res.data)
        })
    }, [])

    const handleOpen = (state) => {
        setSelectedJob(state)
        setOpen(true)
    }

    const handlePaginationChange = (e: any) => {
        console.log(e)
    }
    
    return <>
            <div className='listing-container'>
                {_.map(listings, (v) => (
                    <Card fluid className='job-listing' key={v.ID}>
                        <CardContent header={v.title}/>
                        <CardContent description={v.desc} />
                        <CardContent extra>
                            <span className='applicant-count-text'><Icon name='tasks'/> Applicants: {v.appcount} </span><Button className='apply-button' onClick={() => handleOpen(v)}>Apply</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <PostDisplayDrawer key={selectedJob.id} closeDrawer={() => setOpen(false)} isOpen={open} applicants={selectedJob.appcount} authorId={selectedJob.author} title={selectedJob.title} body={selectedJob.desc} />
            <Pagination 
                showSizeChanger
                className='pagination'
                defaultCurrent={1}
                onShowSizeChange={handlePaginationChange}
                total={500}
            />
    </>
}