//import showErrorToastFn from "./showErrorToast";
import type { HttpPluginOptions } from "../http.ts";
import { NETWORK } from "./constant";
import showErrorToastFn from "@/core-tools/http/httpPlug/showErrorToast";

const showErrorToast = showErrorToastFn();

export default ({ options }: HttpPluginOptions) => {
    if (!options.backupMockData) {
        showErrorToast(NETWORK.ERROR_MSG);
    }
};
