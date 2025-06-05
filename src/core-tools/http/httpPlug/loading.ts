import type { HttpPluginOptions } from "../http.ts";
import loadingUtil from "./loadingUtil";

export const openLoading = ({ options }: Partial<HttpPluginOptions>) => {
    let _options = options || {};
    if (_options.isLoading) {
        loadingUtil.showLoading();
    }
};

export const closeLoading = ({ options }: Partial<HttpPluginOptions>) => {
    //延迟300毫秒关闭loading,否则会出现一闪而过的效果体验性不是很友好。
    let _options = options || {};
    // const delayTime = 300;
    if (_options.isLoading) {
        loadingUtil.removeLoading();
    }
};
