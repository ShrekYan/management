import {defineConfig} from "@umijs/max";

export default defineConfig({
    define: {
        request_url:"https://mobilepre.qiangungun.com"
    },
     proxy:{
        "/api": {
            logLevel: "debug",
            secure:false,
            target: "https://mobilepre.qiangungun.com",
            changeOrigin: true,
            pathRewrite: {"^/api": ""},
            onProxyReq: (proxyReq) => {
                proxyReq.setHeader("origin", "https://mobilepre.qiangungun.com")
            }
        }
    }
});
