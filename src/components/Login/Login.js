import React from 'react';
import 'antd/dist/antd.css';
import './Login.css';
import {Space, Input, Button, Radio} from 'antd'

function toAdmin()
{
  
  document.getElementById("admin").style.display = "block";
  document.getElementById("reg").style.display = "none";
  document.getElementById("log").style.display = "none";
}

const Login = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1 className='logoTitle'>Cmps.</h1>
      <div className='loginContainer'>
        <Space direction='vertical'>
          <Input placeholder="Username" />
          <Input.Password placeholder="Password" />
          <Radio.Group style={{marginBottom: '1rem', marginTop:'1rem'}} defaultValue="" buttonStyle="solid">
                <Radio value="a">Student</Radio>
                <Radio value="b">Stuff</Radio>
                <Radio value="c">Security</Radio>
            </Radio.Group>
          <Button type="primary" onClick={toAdmin}>
            Login
          </Button>
        </Space>
      </div>
    </div>

  )
}

export default Login