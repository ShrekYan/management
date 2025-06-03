import React, {useEffect, useState} from "react"
import type {MenuProps} from "antd"
import {Avatar, Button, Dropdown, Layout, Menu, Tabs} from "antd"
import {DownOutlined, HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons"
import {KeepAlive, useOutlet, useLocation, useNavigate} from "umi"
import "./BasicLayout.less"


const {Header, Sider, Content, Footer} = Layout;

const items = [
    {key: '1', label: '账户设置'},
    {key: '2', label: '退出'}
];

type MenuItem = Required<MenuProps>["items"][number] & { path: string, label: string };

const menuDataItems: MenuItem[] = [
    {
        key: "1",
        label: "首页",
        icon: <HomeOutlined/>,
        path: "/"
    },
    {
        key: "2",
        label: "用户管理",
        icon: <UserOutlined/>,
        path: "/users"
    }
]


//https://yuanbao.tencent.com/chat/naQivTmsDa/3b1942a1-ea7b-4e16-9675-725d131485eb
const BasicLayout: React.FC<{ children: React.ReactElement }> = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeKey, setActiveKey] = useState<string>("");
    const location = useLocation();
    const navigate = useNavigate();
    const outlet = useOutlet();

    const [tabs, setTabs] = useState<{ key: string, label: string, path: string, closable: boolean }[]>([]);
    const [cachedOutlets, setCachedOutlets] = useState<Record<string, React.ReactNode>>({});

    // 监听路由变化，自动创建/激活标签页
    useEffect(() => {
        const currentPath = location.pathname;
        const existingTab = tabs.find(tab => tab.path === currentPath);

        if (!existingTab) {
            const menuItem = menuDataItems.find(m => m.path === currentPath);
            if (menuItem) {
                const newKey = `${Date.now()}`;
                setTabs(prev => [...prev, {
                    key: newKey,
                    label: menuItem.label,
                    path: currentPath,
                    closable: true
                }]);
                setActiveKey(newKey);

                // 缓存当前Outlet
                setCachedOutlets(prev => ({
                    ...prev,
                    [currentPath]: outlet
                }));
            }
        } else {
            setActiveKey(existingTab.key);
        }
    }, [location.pathname]);

    // 添加标签页
    const addTab = (label: string, path: string, key: string) => {
        const existingTab = tabs.find(tab => tab.path === path);
        if (existingTab) {
            setActiveKey(existingTab.key);
            navigate(path);
            return;
        }

        setTabs(prev => [...prev, {
            key: key,
            label,
            path,
            closable: true
        }]);
        setActiveKey(key);
        navigate(path);

        // 缓存当前Outlet
        setCachedOutlets(prev => ({
            ...prev,
            [path]: outlet
        }));
    };

    const handleMenuItemClick: MenuProps["onClick"] = (data) => {
        //console.log(data);
        const findData = menuDataItems.find((menuItem) => {
            return menuItem.key === data.key;
        });
        if (findData) {
            addTab(findData.label, findData.path, findData.key as string);
        }
    };

    const handleTabChange = (key: string) => {
        const findData = tabs.find((item) => {
            return item.key === key;
        });
        setActiveKey(key);
        if (findData) {
            navigate(findData.path);
        }
    };

    const handleTabRemove = (targetKey: string) => {
        const findIndex = tabs.findIndex((tabItem) => {
            return tabItem.key === targetKey
        });
        const prevData = tabs[findIndex - 1];

        const filterData = tabs.filter((tabItem) => {
            return tabItem.key !== targetKey
        });

        setTabs(filterData);

        if (targetKey === activeKey) {

            setActiveKey(prevData.key);
            navigate(prevData.path);
        }
    };

    const tabsItems = tabs.map(tab => ({
        key: tab.key,
        label: tab.label,
        closable: tab.closable,
        children: (
            <KeepAlive
                name={tab.path}  // 使用路径作为唯一标识
                saveScrollPosition="screen"
                when={() => true} // 始终缓存
            >
                <div className="page-content">
                    {cachedOutlets[tab.path] || outlet}
                </div>
            </KeepAlive>
        )
    }));

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={setCollapsed}
                breakpoint="lg"
                theme="light"
                width={250}
                collapsedWidth={80}
            >
                <div className="logo" style={{
                    height: 64,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#002140",
                    color: "white",
                    fontSize: collapsed ? 14 : 18
                }}>
                    {collapsed ? "LOGO" : "企业管理系统"}
                </div>
                <Menu onClick={handleMenuItemClick} items={menuDataItems} theme="light" mode="inline"
                      defaultSelectedKeys={[activeKey]} selectedKeys={[activeKey]}/>
            </Sider>
            <Layout className="site-layout">
                <Header style={{
                    padding: '0 24px',
                    background: '#fff',
                    boxShadow: '0 1px 4px rgba(0,21,41,0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{fontSize: '16px', width: 64, height: 64}}
                    />
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Dropdown menu={{items}} trigger={['click']}>
                            <div style={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
                                <Avatar
                                    style={{backgroundColor: '#1890ff', marginRight: 8}}
                                    size="small"
                                >
                                    管
                                </Avatar>
                                <span>管理员</span>
                                <DownOutlined style={{marginLeft: 8}}/>
                            </div>
                        </Dropdown>
                    </div>
                </Header>
                <Content style={{margin: "16px 16px 0"}}>
                    <div className="content-container">
                        <Tabs
                            activeKey={activeKey}
                            onChange={handleTabChange}
                            type="editable-card"
                            onEdit={(targetKey, action) => {
                                if (action === "remove") {
                                    handleTabRemove(targetKey as string);
                                }
                            }}
                            hideAdd={true}
                            items={tabsItems}
                        />
                    </div>
                </Content>
                <Footer style={{
                    textAlign: 'center',
                    padding: '16px 50px',
                    background: '#fff',
                    borderTop: '1px solid #e8e8e8'
                }}>
                    © 2025 企业管理系统 - 技术支持
                </Footer>
            </Layout>
        </Layout>
    )
}

export default BasicLayout;
