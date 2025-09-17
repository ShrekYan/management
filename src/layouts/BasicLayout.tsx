import React, { useEffect, useState } from "react";
import type { GetProp, MenuProps } from "antd";
import { Avatar, Breadcrumb, Dropdown, Layout, Menu, Modal, Tabs } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { KeepAlive, Link, useLocation, useNavigate, useOutlet } from "umi";
import type { MenuDataItem } from "@umijs/route-utils";
import routes from "./../../config/routes/index";
import {
    findMenuData,
    findMenuDataByPath,
    getGenerateMenuData,
    getBreadcrumbName,
    loopMenuItemIcon
} from "./handler";
import { RIGHT_MENU, RightMenuItems } from "./constant";
import "./BasicLayout.less";

const { Header, Sider, Content, Footer } = Layout;

// 定义的路由数据
const _routes = loopMenuItemIcon(routes[0].routes);
const generateMenuData = getGenerateMenuData();
// 菜单数据
const menuDataItems: MenuDataItem[] = generateMenuData(_routes, 0) || [];

const BasicLayout: React.FC<{ children: React.ReactElement }> = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeKey, setActiveKey] = useState<string>("");
    const [openKey, setOpenKey] = useState<string[]>([]);
    //登陆状态
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const outlet = useOutlet();

    const [tabs, setTabs] = useState<
        { key: string; label: string; path: string; closable: boolean }[]
    >([]);
    const [cachedOutlets, setCachedOutlets] = useState<Record<string, React.ReactNode>>({});

    /**
     * 生成面包屑导航项
     */
    const getBreadcrumbItems = () => {
        const pathSnippets = location.pathname.split("/").filter((i) => i);
        const _breadcrumbItems = [
            {
                title: <Link to="/">首页</Link>
            }
        ];
        let currentPath = "";
        pathSnippets.forEach((snippet) => {
            currentPath += `/${snippet}`;
            //const isLast = index === pathSnippets.length - 1;
            const routeName = getBreadcrumbName(menuDataItems, currentPath) || snippet;
            _breadcrumbItems.push({
                // title: isLast ? <span>{routeName}</span> : <Link to={currentPath}>{routeName}</Link>
                title: <span>{routeName}</span>
            });
        });

        return _breadcrumbItems;
    };

    useEffect(() => {
        //已登陆状态
        const loggedIn = true;
        setIsLoggedIn(loggedIn);

        if (!loggedIn && location.pathname !== "/login") {
            navigate("/login", { replace: true });
            return;
        }
    }, [location.pathname]);

    // 监听路由变化，自动创建/激活标签页
    useEffect(() => {
        //如果未登陆，不处理标签页逻辑
        if (!isLoggedIn) return;

        const currentPath = location.pathname;
        const existingTab = tabs.find((tab) => tab.path === currentPath);
        const menuItem = findMenuDataByPath(menuDataItems, currentPath);

        //跳转到404页面
        if (!menuItem) {
            navigate("/404");
            return;
        }

        // 关键修复：每次路由变化都更新缓存
        setCachedOutlets((prev) => ({
            ...prev,
            [currentPath]: outlet
        }));

        if (!existingTab) {
            if (menuItem) {
                setTabs((prev) => [
                    ...prev,
                    {
                        key: menuItem.key as string,
                        label: menuItem.label,
                        path: currentPath,
                        closable: tabs?.length > 0 ? true : false
                    }
                ]);
                setActiveKey(menuItem.key as string);
                setOpenKey(menuItem.paths);
            }
        } else {
            setActiveKey(existingTab.key);
        }
    }, [location.pathname, isLoggedIn]);

    /**
     * 添加标签页
     * @param label
     * @param path
     * @param key
     */
    const addTab = (label: string, path: string, key: string) => {
        const existingTab = tabs.find((tab) => tab.path === path);
        if (existingTab) {
            setActiveKey(existingTab.key);
            navigate(path);
            return;
        }

        setTabs((prev) => [
            ...prev,
            {
                key: key,
                label,
                path,
                closable: true
            }
        ]);
        setActiveKey(key);
        navigate(path);
    };

    /**
     * 菜单点击事件
     * @param data
     */
    const handleMenuItemClick: MenuProps["onClick"] = (data) => {
        const findData = findMenuData(menuDataItems, data.key);
        if (findData && findData.path) {
            addTab(findData.label, findData.path, findData.key as string);
        }
    };

    /**
     * 标签切换事件
     * @param key
     */
    const handleTabChange = (key: string) => {
        const findData = tabs.find((item) => {
            return item.key === key;
        });
        setActiveKey(key);
        if (findData) {
            navigate(findData.path);
        }
    };

    /**
     * 标签删除事件
     * @param targetKey
     */
    const handleTabRemove = (targetKey: string) => {
        const findIndex = tabs.findIndex((tabItem) => {
            return tabItem.key === targetKey;
        });
        const prevData = tabs[findIndex - 1];

        const filterData = tabs.filter((tabItem) => {
            return tabItem.key !== targetKey;
        });

        setTabs(filterData);

        if (targetKey === activeKey) {
            setActiveKey(prevData.key);
            navigate(prevData.path);
        }
    };

    /**
     * 右侧下拉框点击事件
     * @param key
     */
    const handleDropdownClick: MenuProps["onClick"] = ({ key }) => {
        if (key === RIGHT_MENU.ACCOUNT) {
            // 账户管理逻辑
        }
        if (key === RIGHT_MENU.LOGO_OUT) {
            Modal.confirm({
                content: "是否确认退出？",
                cancelText: "取消",
                centered: true,
                okText: "确定",
                onOk: () => {
                    navigate("/login");
                }
            });
        }
    };

    const tabsItems = tabs.map((tab) => ({
        key: tab.key,
        label: tab.label,
        closable: tab.closable,
        children: (
            <KeepAlive
                name={tab.path} // 使用路径作为唯一标识
                saveScrollPosition="screen"
                when={() => true} // 始终缓存
            >
                <div className="page-content">{cachedOutlets[tab.path] || outlet}</div>
            </KeepAlive>
        )
    }));

    //如果tab没有数据则不渲染主框架
    if (tabsItems.length === 0) {
        return null;
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={setCollapsed}
                breakpoint="lg"
                theme="light"
                width={250}
                collapsedWidth={80}
            >
                <div
                    className="logo"
                    style={{
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#002140",
                        color: "white",
                        fontSize: collapsed ? 14 : 18
                    }}
                >
                    {collapsed ? "LOGO" : "中欧财富"}
                </div>
                <Menu
                    onClick={handleMenuItemClick}
                    items={menuDataItems as GetProp<MenuProps, "items">}
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[activeKey]}
                    selectedKeys={[activeKey]}
                    defaultOpenKeys={openKey}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        padding: "0 24px",
                        background: "#fff",
                        boxShadow: "0 1px 4px rgba(0,21,41,0.08)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Breadcrumb items={getBreadcrumbItems()} style={{ flex: 1 }} />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Dropdown
                            menu={{ items: RightMenuItems, onClick: handleDropdownClick }}
                            trigger={["click"]}
                        >
                            <div
                                style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
                            >
                                <Avatar
                                    style={{ backgroundColor: "#1890ff", marginRight: 8 }}
                                    size="small"
                                >
                                    管
                                </Avatar>
                                <span>管理员</span>
                                <DownOutlined style={{ marginLeft: 8 }} />
                            </div>
                        </Dropdown>
                    </div>
                </Header>
                <Content style={{ margin: "16px 16px 0" }}>
                    <div className="content-container">
                        {/* 关键修复：添加key属性强制刷新Tabs组件 [1,2](@ref) */}
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
                            key={location.pathname} // 强制刷新Tabs
                        />
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: "center",
                        padding: "16px 50px",
                        background: "#fff",
                        borderTop: "1px solid #e8e8e8"
                    }}
                >
                    © 2025 企业管理系统 - 技术支持
                </Footer>
            </Layout>
        </Layout>
    );
};

export default BasicLayout;
