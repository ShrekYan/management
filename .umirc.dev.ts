import {defineConfig} from "@umijs/max";

export default defineConfig({
    define: {
        request_url:"https://dev-mobile.qiangungun.com"
    },
    proxy:{
        "/api": {
            logLevel: "debug",
            secure:false,
            target: "https://dev-mobile.qiangungun.com",
            changeOrigin: true,
            pathRewrite: {'^/api': ''},
            onProxyReq: (proxyReq) => {
                proxyReq.removeHeader("origin")
            }
        }
    }
});
