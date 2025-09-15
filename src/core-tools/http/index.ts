import httpEnhancer from "./httpEnhancer";
import parameter from "./httpPlug/parameter";
import response from "./httpPlug/response";
import responseError from "./httpPlug/responseError";
import session from "./httpPlug/session";
import networkError from "./httpPlug/networkError";

const http = new httpEnhancer(__IS_PROD__ ? request_url : "/api", "http://dev-yapi.gungunqian.cn:3000/mock/37");

http.addBeforePlug(parameter)
    .addAfterPlug(response)
    .addAfterPlug(responseError)
    .addAfterPlug(session)
    .addErrorPlug(networkError)

export default http;