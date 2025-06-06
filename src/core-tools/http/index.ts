import httpEnhancer from "./httpEnhancer";
import parameter from "./httpPlug/parameter";
import response from "./httpPlug/response";
import responseError from "./httpPlug/responseError";
import session from "./httpPlug/session";
import networkError from "./httpPlug/networkError";

//根据不同的环境设置不同的服务器环境
const serverUrlPrefix = "https://mobile.qiangungun.com/v1";

const http = new httpEnhancer(serverUrlPrefix, "http://dev-yapi.gungunqian.cn:3000/mock/37");

http.addBeforePlug(parameter)
    .addAfterPlug(response)
    .addAfterPlug(responseError)
    .addAfterPlug(session)
    .addErrorPlug(networkError)

export default http;