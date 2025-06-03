import {defineConfig} from "umi";

//"@umijs/plugins/dist/keepalive"
export default defineConfig({
    plugins: ["@umijs/plugins/dist/antd", "@umijs/plugins/dist/dva", "umi-plugin-keep-alive"],
    base: "/",
    history: {
        type: "hash"
    },
    autoprefixer: {flexbox: 'no-2009'},
    cacheDirectoryPath: "node_modules/.cache",
    mock: false,
    copy: [],
    antd: {
        import: false,
        style: "less",
        dark: false,
        compact: true
    },
    //打包成es5
    jsMinifier: "terser",
    cssMinifier: "cssnano",
    cssPublicPath: "./",
    define: {},
    favicons: [],
    inlineLimit: 10000,
    routes: [
        {
            path: "/",
            component: "@/layouts/BasicLayout.tsx",
            routes:[
                {
                    path:"/",
                    component:"@/pages/Home/index",
                },
                {
                    path:"/users",
                    component:"@/pages/Users/index"
                }
            ]
        }
    ],
    npmClient: 'pnpm',
});
