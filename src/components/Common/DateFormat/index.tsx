import React from "react";
import dayjs from "dayjs";

interface DateFormatProps {
    value?: string;
    originalFmt?: string;
    format?: string;
}

/**
 * 日期处理
 * @param param0 
 * @returns 
 */
const DateFormat: React.FC<DateFormatProps> = ({
    value = "",
    originalFmt = "YYYYMMDDHHmmss",
    format = "YYYY-MM-DD"
}) => {
    if (!value) {
        return "--";
    }
    return dayjs(value, originalFmt).format(format);
};

export default DateFormat;
