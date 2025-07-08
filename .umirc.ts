import {defineConfig} from "@umijs/max";
import routes from "./config/routes/index"
import path from "path";

//"@umijs/plugins/dist/keepalive"
export default defineConfig({
    plugins: [ "umi-plugin-keep-alive"],
    outputPath:"dist",
    alias:{
        "@": path.resolve(__dirname, "./src"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@business": path.resolve(__dirname, "./src/business"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@core-tools": path.resolve(__dirname, "./src/core-tools"),
        "@page": path.resolve(__dirname, "./src/pages"),
        "@routes": path.resolve(__dirname, "./src/routes"),
        "@local-types": path.resolve(__dirname, "./src/types"),
        "@utils": path.resolve(__dirname, "./src/utils")
    },
    autoprefixer: {flexbox: 'no-2009'},
    base: "/",
    cacheDirectoryPath: "node_modules/.cache",
    history: {
        type: "hash"
    },
    mock: false,
    copy: [],
    dva:{
    },
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
    favicons:[],
    links:[],
    metas:[],
    inlineLimit: 10000,

    routes:routes,
    npmClient: 'pnpm'
});
