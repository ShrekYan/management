import { debounce } from "es-toolkit";
import {message} from 'antd'

export default function () {
    const debouncedLog = debounce((errorMsg) => {
        message.error(errorMsg);
    }, 300);
    return debouncedLog;
}
