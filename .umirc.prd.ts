import {defineConfig} from "@umijs/max";

export default defineConfig({
    define: {
        request_url:"https://mobile.qiangungun.com"
    },
     proxy:{
        "/api": {
            logLevel: "debug",
            secure:false,
            target: "https://mobile.qiangungun.com",
            changeOrigin: true,
            pathRewrite: {"^/api": ""},
            onProxyReq: (proxyReq) => {
                proxyReq.setHeader("origin", "https://mobile.qiangungun.com")
            }
        }
    }
});
