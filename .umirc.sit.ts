import {defineConfig} from "@umijs/max";

export default defineConfig({
    define: {
        request_url:"https://sit-mobile.qiangungun.com"
    },
     proxy:{
        "/api": {
            logLevel: "debug",
            secure:false,
            target: "https://sit-mobile.qiangungun.com",
            changeOrigin: true,
            pathRewrite: {"^/api": ""},
            onProxyReq: (proxyReq) => {
                proxyReq.removeHeader("origin")
            }
        }
    }
});
