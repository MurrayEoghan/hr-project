import React from 'react'
import {Space, Input} from 'antd'
import { SmileOutlined, UserOutlined, KeyOutlined, RobotOutlined, ShopOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons'
import './styles.scss'

interface SignUpProps {
    handlePasswordCheck: (e: any, variation: string) => void,
    handleSignUpFieldChange: (e: any) => void
}

export default function SignUp(props: SignUpProps) {

    const handlePasswordChange = (e: any, variation: string) => {
        if(variation === 'pass') {
            props.handlePasswordCheck(e, 'pass')
        } else {
            props.handlePasswordCheck(e, 'passConfirm')
        }
        props.handleSignUpFieldChange(e)

    }

    return (
        <Space direction='vertical' className='signup-wrapper'>
            <Space direction='horizontal'>
                <Input className='small-fields-left' onChange={props.handleSignUpFieldChange} id='fname' prefix={<SmileOutlined />} required size='large' placeholder='First name'/>
                <Input className='small-fields-right' onChange={props.handleSignUpFieldChange} id='lname' required prefix={<SmileOutlined />} size='large' placeholder='Last name'/>
            </Space>
            <Input placeholder='Username' className='full-fields' id='username' onChange={props.handleSignUpFieldChange} size='large' prefix={<UserOutlined />}/>
            <Space direction='horizontal'>
                <Input id='password' onChange={(e) => handlePasswordChange(e, 'pass')} className='small-fields-left' placeholder='Password' size='large' prefix={<KeyOutlined />}/> 
                <Input className='small-fields-right' onChange={(e) => handlePasswordChange(e, 'passConfirm')} id='passwordConfirm' placeholder=' Re-enter Password' size='large' prefix={<KeyOutlined />}/>
            </Space>
            <Input id='email' className='full-fields' size='large' placeholder='Email' onChange={props.handleSignUpFieldChange} prefix={<MailOutlined />} />
            <Input id='jobTitle' className='full-fields' placeholder='Job title' size='large' onChange={props.handleSignUpFieldChange} prefix={<RobotOutlined />} />
            <Input id='company' className='full-fields' placeholder='Company' size='large' onChange={props.handleSignUpFieldChange} prefix={<ShopOutlined />} />
            <Input id='phone' className='full-fields' placeholder='Phone' size='large' onChange={props.handleSignUpFieldChange} prefix={<PhoneOutlined />} />
        </Space>
    )
}