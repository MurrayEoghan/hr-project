import React, {useState, useEffect} from 'react'
import {Card, CardContent, Icon} from 'semantic-ui-react'
import {Button, Pagination, Empty} from 'antd'
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
    const [limit, setLimit] = useState<number>(10)
    const [offset, setOffset] = useState<number>(0)

    useEffect(() => {
        const getPaginatedListings = async () => {
            try {
                await axios({
                    method: 'post',
                    url: 'http://localhost:3001/listings',
                    data: {limit, offset}
                }).then((res) => {
                    setListings(res.data)
                })
            } catch (error) {
                setListings([])
            }
        }
        getPaginatedListings()
    }, [limit, offset])

    const handleOpen = (state) => {
        setSelectedJob(state)
        setOpen(true)
    }

    const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
        setLimit(pageSize)
    }

    const onPaginationPageChange: PaginationProps['onChange'] = (page) => {
        setOffset((page-1)*10)
    }
    
    return <div>
            {listings['listings'] !== undefined ?
            <>
                <div className='listing-container'>
                    {_.map(listings['listings'], (v) => {
                        console.log(v)
                    let title = `${v.title} @ ${v.company}`
                    console.log(title)
                    return (
                        <Card fluid className='job-listing' key={v.ID} color='olive'>
                            <CardContent header={<div><span className='header-jobtitle'>{v.title}</span> <span className='header-company'>{v.company}</span></div>}/>
                            <CardContent description={v.desc} />
                            <CardContent extra>
                                <span className='applicant-count-text'><Icon name='tasks'/> Applicants: {v.appcount} </span><Button className='apply-button' onClick={() => handleOpen(v)}>Apply</Button>
                            </CardContent>
                        </Card>
                    )})}
                </div>
                <PostDisplayDrawer company={selectedJob.company} key={selectedJob.id} closeDrawer={() => setOpen(false)} isOpen={open} applicants={selectedJob.appcount} authorId={selectedJob.author} title={selectedJob.title} body={selectedJob.desc} />
                <Pagination 
                    showSizeChanger
                    className='pagination'
                    defaultCurrent={1}
                    onShowSizeChange={onShowSizeChange}
                    onChange={onPaginationPageChange}
                    total={listings['count']}
                />
            </> : <Empty className='empty-container'/>}
    </div>
}