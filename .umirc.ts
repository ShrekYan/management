import {defineConfig} from "umi";

export default defineConfig({
    //关闭mock服务
    mock: false,
    plugins: ["@umijs/plugins/dist/antd", "@umijs/plugins/dist/dva"],
    antd: {
        import: false,
        style: "less",
        dark: false,
        compact: true
    },
    //打包成es5
    jsMinifier: "terser",
    cssMinifier: "cssnano",
    routes: [
        {path: "/", component: "index"},
        {path: "/docs", component: "docs"},
        {
            path: "/test",
            component: "@/layouts/test/index",
            layout: false,
            routes: [
                {
                    path: "/test/list",
                    component: "@/layouts/test/list",
                }
            ]
        }
    ],
    npmClient: 'pnpm',
});
