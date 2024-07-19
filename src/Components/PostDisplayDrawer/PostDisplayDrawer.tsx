import React, {useState} from 'react'
import {Drawer} from 'antd'
import type {DrawerProps} from 'antd'

interface PostDisplayProps {
    title: string,
    body?: string,
    applicants?: number,
    closeDrawer: any,
    isOpen: boolean
}

export default function PostDisplayDrawer(props: PostDisplayProps) {
    return <Drawer title={props.title} size={'large'} placement='right' open={props.isOpen} onClose={props.closeDrawer}>
        {props.body}
    </Drawer>
}