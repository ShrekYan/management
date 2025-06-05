import { debounce } from "es-toolkit";

export default function () {
    const debouncedLog = debounce((errorMsg) => {
        console.log(errorMsg);
        // Toast.show({
        //     content: errorMsg,
        //     position: "top"
        // });
    }, 300);
    return debouncedLog;
}
