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