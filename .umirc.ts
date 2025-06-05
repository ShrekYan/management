import {defineConfig} from "@umijs/max";
import routes from "./config/routes/index"

//"@umijs/plugins/dist/keepalive"
export default defineConfig({
    plugins: [ "umi-plugin-keep-alive"],
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
    routes:routes,
    npmClient: 'pnpm',
});
