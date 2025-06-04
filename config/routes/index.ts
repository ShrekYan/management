export default [
    {
        path: "/",
        component: "@/layouts/BasicLayout.tsx",
        name:"BasicLayout",
        routes: [
            {
                path: "/",
                name:"首页",
                icon:"HomeOutlined",
                component: "@/pages/Home/index",
            },
            {
                path: "/users",
                icon:"UserOutlined",
                name:"用户管理",
                component: "@/pages/Users/index"
            }
        ]
    },
    {
        path:"/login",
        component: "@/pages/Login/index",
        layout:false
    }
];