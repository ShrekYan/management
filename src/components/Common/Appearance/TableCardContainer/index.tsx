import React from "react";
import { Card } from "antd";

const TableCardWrap: React.FC<
    React.PropsWithChildren<{
        title?: string;
        extra?: React.ReactElement;
        cardStyle?: React.CSSProperties;
    }>
> = ({ title, extra, children, cardStyle }): React.ReactElement => {
    return (
        <Card
            size="default"
            title={title || "查询结果"}
            style={cardStyle || { marginTop: 20 }}
            extra={extra}
            variant="borderless"
        >
            {children}
        </Card>
    );
};
export default TableCardWrap;
