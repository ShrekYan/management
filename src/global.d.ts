declare const request_url: string;
declare const __IS_DEV__: boolean;
declare const __IS_PROD__: boolean;
declare module "*.module.less" {
    const classes: { readonly [key: string]: string };
    export default classes;
}
