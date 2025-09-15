import { RESPONSE_CODE } from "./constant";
import type { HttpPluginOptions } from "../http.ts";
import { createBrowserHistory } from "history";

export default ({ options, resp }: HttpPluginOptions) => {
    const history = createBrowserHistory();
    //session过期处理
    if (resp.data.code === RESPONSE_CODE.SESSION_TIMEOUT && options.openExpire) {
        history.push('/login');
    }
};
