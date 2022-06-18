import React from 'react'
import './Registration.css'
import {Space, Input, Button, Dropdown, Menu, Radio} from 'antd'
import 'antd/dist/antd.css';

function regToLog()
{
  document.getElementById("log").style.display = "block";
  document.getElementById("reg").style.display = "none";
}

const Registration = () => {
  return (
    <div style={{textAlign: "center"}}>
      <h1 className='regTitle'>Registration</h1>
      <div className='loginContainer'>
        <Space id='loginSpace' direction='vertical'>
            <Input placeholder="Name" />
            <Input placeholder="Surname" />
            <Input type={'mail'} placeholder="Mail" />
            <Input placeholder="ID Number" />
            <Input placeholder="Phone Number" />
            <Input.Password placeholder="New Password" />
            <Input.Password placeholder="Repeat Password" />
            <Radio.Group style={{marginBottom: '1rem', marginTop:'1rem'}} defaultValue="a" buttonStyle="solid">
                <Radio value="a">Student</Radio>
                <Radio value="b">Staff</Radio>
            </Radio.Group>
            <Button type="primary" onClick={regToLog}>
                Register
            </Button>
        </Space>
      </div>
    </div>

  )
}

export default Registration