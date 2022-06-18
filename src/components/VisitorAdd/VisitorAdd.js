
import {Space, Input, Button, Dropdown, Menu, Radio} from 'antd'
import 'antd/dist/antd.css';
import React, { useState } from "react";

function showcar()
{
    document.getElementById("carnum").style.display = "block";
    
}
function hidecar()
{
    document.getElementById("carnum").style.display = "none";
    
}

function remove()
{
    document.getElementById("visitorAdd").style.display = "none";
    document.getElementById("visitorInfo").style.display = "block";
    document.getElementById("addButton").style.display = "block";
}

const VisitorAdd = () => {
    const [chkValue, setChkValue] = useState(false);

  return (
    <div style={{textAlign: "center"}}>
      <h1 className='regTitle'>Registration</h1>
      <div className='loginContainer'>
        <Space id='loginSpace' direction='vertical'>
            <Input placeholder="Name" />
            <Input placeholder="Surname" />
            <Input placeholder="ID Number" />
            <Input placeholder="Phone Number" />
            <h3>Location</h3>
            <Radio.Group style={{marginBottom: '1rem', marginTop:'1rem'}} defaultValue="" buttonStyle="solid">
                <Radio value="a">General</Radio>
                <Radio value="b">Academic</Radio>
                <Radio value="c">Residence</Radio>
            </Radio.Group>
            <h3>Duration</h3>
            <Radio.Group style={{marginBottom: '1rem', marginTop:'1rem'}} defaultValue="" buttonStyle="solid">
                <Radio value="a">One Full Day</Radio>
                <Radio value="b">Multiple Days</Radio>
            </Radio.Group>
            <Radio.Group style={{marginBottom: '1rem', marginTop:'1rem'}} defaultValue="" buttonStyle="solid">
                <Radio value="a" onClick={showcar}>Yes</Radio>
                <Radio value="b"onClick={hidecar}>No</Radio>
            </Radio.Group>
            <Input id='carnum' style={{display: "none"}} placeholder="Car Number" />

            <Button type="primary" onClick={remove}>
                Add Visitor
            </Button>
        </Space>
      </div>
    </div>

  )
}

export default VisitorAdd