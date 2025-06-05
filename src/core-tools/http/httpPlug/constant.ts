export const PARAMS_CONFIG = {
    SOURCE: "H",
    VERSION: "5.0.0"
};
/**
 * 网络错误
 * @type {{errorMsg: string}}
 */
export const NETWORK = {
    ERROR_MSG: "网络不好，请稍后重试",
    SYS_MSG: "系统繁忙或出错，请联系客服人员"
};

/**
 * 用户自定义报错信息
 * @type {{}}
 */
export const CUSTOM_ERRORS: Record<string, string> = {
};

/**
 * 接口返回类型
 * @type {{SUCCESS: string, SESSION_TIMEOUT: string}}
 */
export const RESPONSE_CODE = {
    SUCCESS: "000000",
    SESSION_TIMEOUT: "000029"
};
