export default [
    {
        path: "/",
        component: "@/layouts/BasicLayout.tsx",
        name: "BasicLayout",
        routes: [
            {
                path: "/",
                name: "首页",
                icon: "HomeOutlined",
                component: "@/pages/Home/index"
            },
            {
                path: "/users",
                icon: "UserOutlined",
                name: "用户管理",
                component: "@/pages/Users/index"
            },
            {
                path: "/common",
                icon: "UserOutlined",
                name: "通用",
                routes: [
                    {
                        path: "/common/button",
                        name: "button",
                        component: "@/pages/Common/Button/index"
                    },
                    {
                        path: "/common/typography",
                        name: "typography",
                        component: "@/pages/Common/Typography/index"
                    }
                ]
            },
            {
                path: "/layout",
                icon: "UserOutlined",
                name: "布局",
                routes: [
                    {
                        path: "/layout/divider",
                        name: "Divider",
                        component: "@/pages/Layout/Divider/index"
                    },
                    {
                        path:"/layout/flex",
                        name:"flex",
                        component: "@/pages/Layout/Flex/index"
                    },
                   {
                        path:"/layout/grid",
                        name:"grid",
                        component: "@/pages/Layout/Grid/index"
                    },
                    {
                        path:"/layout/list",
                        name:"layoutList",
                        component:"@/pages/Layout/Layouts/index"
                    },
                    {
                        path:"/layout/space",
                        name:"space",
                        component: "@/pages/Layout/Space/index"
                    },
                    {
                        path:"/layout/splitter",
                        name:"splitter",
                        component:"@/pages/Layout/Splitter/index"
                    }
                ]
            },
            {
                path:"/nav",
                icon: "UserOutlined",
                name:"导航",
                routes:[
                    {
                        path:"/nav/anchor",
                        name:"anchor",
                        component: "@/pages/Navigation/Anchor/index"
                    },
                    {
                        path:"/nav/breadcrumb",
                        name:"breadcrumb",
                        component: "@/pages/Navigation/Breadcrumb/index"
                    },
                    {
                        path:"/nav/dropdown",
                        name:"dropdown",
                        component: "@/pages/Navigation/Dropdown/index"
                    },
                    {
                        path:"/nav/menu",
                        name:"menu",
                        component: "@/pages/Navigation/Menu/index"
                    },
                    {
                        path:"/nav/pagination",
                        name:"pagination",
                        component: "@/pages/Navigation/Pagination/index"
                    },
                    {
                        path:"/nav/steps",
                        name:"steps",
                        component: "@/pages/Navigation/Steps/index"
                    },
                    {
                        path:"/nav/tabs",
                        name:"tabs",
                        component: "@/pages/Navigation/Tabs/index"
                    }
                ]
            },
            {
                path: "*",
                hidden: true,
                component: "@/pages/404"
            }
        ]
    },
    {
        path: "/404",
        layout: false,
        name: "404",
        component: "@/pages/404",
    },
    {
        path: "/login",
        component: "@/pages/Login/index",
        layout: false,
        name: "登陆页面"
    },
];