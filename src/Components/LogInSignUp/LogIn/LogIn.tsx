import React, {useState} from 'react'
import {Input, Divider, Space} from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import './styles.scss'

interface LogInProps {
    handleUsernameChange: (e: any) => void,
    handlePasswordChange: (e: any) => void
}

export default function LogIn(props: LogInProps) {
    const [visiblePass, setVisiblePass] = useState<boolean>(false)
    return (
        <div className='login-wrapper'>
            <Input size='large' placeholder='Username' prefix={<UserOutlined />} onChange={props.handleUsernameChange}/>
            <Divider />
            <Input.Password
                placeholder="Password"
                size='large'
                onChange={props.handlePasswordChange}
                visibilityToggle={{ visible: visiblePass, onVisibleChange: () => setVisiblePass(!visiblePass) }}
                prefix={<KeyOutlined />}
            />
        </div>
    )
}