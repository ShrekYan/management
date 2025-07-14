import React from "react"
import {Breadcrumb, Flex, Layout, Menu} from "antd"
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const {Header, Footer, Sider, Content} = Layout;


const Layouts: React.FC = () => {

    const headerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        height: 64,
        paddingInline: 48,
        lineHeight: '64px',
        backgroundColor: '#4096ff',
    };

    const contentStyle: React.CSSProperties = {
        textAlign: 'center',
        minHeight: 120,
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#0958d9',
    };

    const siderStyle: React.CSSProperties = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#1677ff',
    };

    const footerStyle: React.CSSProperties = {
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
    };

    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        width: 'calc(50% - 8px)',
        maxWidth: 'calc(50% - 8px)',
    };
    return (
        <>
            <Flex gap="middle" wrap>
                <Layout style={layoutStyle}>
                    <Header style={headerStyle}>Header</Header>
                    <Content style={contentStyle}>Content</Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
                <Layout style={layoutStyle}>
                    <Header style={headerStyle}>Header</Header>
                    <Layout>
                        <Sider width="25%" style={siderStyle}>
                            Sider
                        </Sider>
                        <Content style={contentStyle}>Content</Content>
                    </Layout>
                    <Footer style={footerStyle}>Footer</Footer>
                </Layout>
                <Layout style={layoutStyle}>
                    <Sider width="25%" style={siderStyle}>
                        Sider
                    </Sider>
                    <Layout>
                        <Header style={headerStyle}>Header</Header>
                        <Content style={contentStyle}>Content</Content>
                        <Footer style={footerStyle}>Footer</Footer>
                    </Layout>
                </Layout>
            </Flex>
            <Layout>
                <Header style={{display: "flex", alignItems: "center"}}>
                    <div className="demo-logo" style={{height:"40px",width:100,background:"#fff"}}></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        items={
                            Array.from({length: 15}).map((_, index) => ({
                                key: index + 1,
                                label: `nav ${index + 1}`,
                            }))
                        }
                        style={{flex: 1, minWidth: 0}}
                    />
                </Header>
                <Content style={{padding: "0 48px"}}>
                    <Breadcrumb
                        style={{margin: '16px 0'}}
                        items={[{title: 'Home'}, {title: 'List'}, {title: 'App'}]}
                    />
                    <div>
                        Content
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
            <Layout>
                <Header style={{display: 'flex', alignItems: 'center'}}>
                    <div className="demo-logo" style={{height: "30px", width: 100, background: "#fff"}}></div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={['1', '2', '3'].map((key) => ({
                            key,
                            label: `nav ${key}`,
                        }))}
                        style={{flex: 1, minWidth: 0}}
                    />
                </Header>
                <Layout>
                    <Sider width={200}>
                    <Menu mode="inline" defaultSelectedKeys={['1']}
                              defaultOpenKeys={['sub1']}
                              style={{ height: '100%', borderRight: 0 }}
                              items={
                                  [UserOutlined, LaptopOutlined, NotificationOutlined].map(
                                      (icon, index) => {
                                          const key = String(index + 1);

                                          return {
                                              key: `sub${key}`,
                                              icon: React.createElement(icon),
                                              label: `subnav ${key}`,
                                              children: Array.from({ length: 4 }).map((_, j) => {
                                                  const subKey = index * 4 + j + 1;
                                                  return {
                                                      key: subKey,
                                                      label: `option${subKey}`,
                                                  };
                                              }),
                                          };
                                      },
                                  )
                              }
                        />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb
                            items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
                            style={{ margin: '16px 0' }}
                        />
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: "#fff",
                            }}
                        >
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    )
};

export default Layouts;