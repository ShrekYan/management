import {defineConfig} from "umi";

//"@umijs/plugins/dist/keepalive"
export default defineConfig({
    plugins: ["@umijs/plugins/dist/antd", "@umijs/plugins/dist/dva"],
    base:"/",
    history:{
        type :"hash"
    },
    autoprefixer:{ flexbox: 'no-2009' },
    cacheDirectoryPath:"node_modules/.cache",
    mock: false,
    copy:[],
    antd: {
        import: false,
        style: "less",
        dark: false,
        compact: true
    },
    //打包成es5
    jsMinifier: "terser",
    cssMinifier: "cssnano",
    cssPublicPath:"./",
    define:{

    },
    favicons:[],
    inlineLimit:10000,
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
