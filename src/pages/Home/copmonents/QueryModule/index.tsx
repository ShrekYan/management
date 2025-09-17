import React from "react";
import { Form,Input } from "antd";
import QueryFilterModule from "@components/Common/Appearance/QueryFilterModule";

/**
 * 查询模块
 * @returns  React.FC
 */
const QueryModule: React.FC = () => {
    return (
        <QueryFilterModule>
            <Form.Item label="基金名称">
                <Input/>
            </Form.Item>
        </QueryFilterModule>
    );
};

export default QueryModule;
