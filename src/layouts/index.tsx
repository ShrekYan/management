import React,{useState} from "react"
import {Layout, Menu} from "antd"
import {Outlet, Link} from "umi"
import {PieChartOutlined, UserOutlined} from '@ant-design/icons';

const {Header, Sider, Content, Footer} = Layout;

const Index: React.FC = () => {
    const [collapsed,setCollapsed] = useState(false);

    const menuItems =[
        { key: '1', icon: <PieChartOutlined />, label: <Link to="/">首页</Link> },
        { key: '2', icon: <UserOutlined />, label: <Link to="/docs">用户管理</Link> }
    ];

    return (
        <Layout style={{minHeight:"100vh"}}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="logo">umi 4</div>
                <Menu theme="dark" items={menuItems}></Menu>
            </Sider>
            <Layout>
                <Header style={{background:"#fff",padding:0}}>
                    <Content style={{margin:"16px"}}>
                        <Outlet/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>© 2025 Umi 实战</Footer>
                </Header>
            </Layout>
        </Layout>
    )
};

export default Index;