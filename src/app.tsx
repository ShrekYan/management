import type { RequestConfig } from 'umi';

export const request: RequestConfig = {
    timeout: 1000,
    // other axios options you want
    errorConfig: {
        errorHandler(){
        },
        errorThrower(){
        }
    },
    requestInterceptors: [],
    responseInterceptors: []
};