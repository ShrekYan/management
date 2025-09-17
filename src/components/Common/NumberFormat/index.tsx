import React from "react";
import numeral from "numeral";

interface NumberFormatType {
    value?: number | string;
    openThousands?: boolean;
    decimalScale?: number;
}

/**
 * 数字处理
 * @param props 
 * @returns 
 */
const NumberFormat: React.FC<NumberFormatType> = (props) => {
    const { value, openThousands = true, decimalScale = 2 } = props;
    /**
     * 格式化
     * @param value
     * @param format
     * @returns {string}
     */
    const numberFormat = () => {
        if (value) {
            let _format = "0";

            if (openThousands) {
                _format += ",0";
            }

            if (decimalScale && decimalScale > 0) {
                _format += ".";
                for (let i = 0; i < decimalScale; i++) {
                    _format += "0";
                }
            }
            return numeral(value).format(_format);
        }
        return "--";
    };

    return numberFormat();
};

export default NumberFormat;
