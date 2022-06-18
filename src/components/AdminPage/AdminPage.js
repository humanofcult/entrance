import { FileOutlined, PieChartOutlined, UserOutlined, PlusOutlined , DesktopOutlined, TeamOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button } from 'antd';
import { useState } from 'react';
import VisitorAdd from '../VisitorAdd/VisitorAdd';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}


function add()
{
    document.getElementById("visitorAdd").style.display = "block";
    document.getElementById("visitorInfo").style.display = "none";
    document.getElementById("addButton").style.display = "none";
}

const items = [
  getItem('Students', 'sub1', <UserOutlined />, [
    getItem('Elguja Zaalishvili', '1'),
    getItem('Luka Balakhadze', '2'),
    getItem('Anna Tabuashvili', '3'),
    getItem('Davit Ramishvili', '4'),
  ]),

  getItem('Visitors', 'sub2', <UsergroupAddOutlined />, [
    getItem('Mom', '1'),
    getItem('Dad', '2'),
    getItem('Brother', '3'),
    getItem('Sister', '4'),
  ]),
];

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content 
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Visitors</Breadcrumb.Item>
            <Breadcrumb.Item>Someone's mom</Breadcrumb.Item>
          </Breadcrumb>
          <div
            id='visitorInfo'
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h3>Name: <span style={{color:"blue"}}>Lali</span></h3>
            <h3>Surname: <span style={{color:"blue"}}>Tavartqiladze</span></h3>
            <h3>ID: <span style={{color:"blue"}}>0641651605</span></h3>
            <h3>Location: <span style={{color:"blue"}}>F Block</span></h3>
            <h3>Duration: <span style={{color:"blue"}}>2 Hours</span></h3>
          </div>
            
            <div id='addButton' style={{width:"100%", textAlign:"center"}}>
                <Button type="primary" onClick={add} shape="circle" icon={<PlusOutlined />} size={'large'} />
            </div>

            <div id='visitorAdd'>
                <VisitorAdd/>
            </div>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Kutaisi International University ©2022 Created by Students
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminPage;