import React from "react";
import { Form, Select } from "antd";
import QueryFilterModule from "@components/Common/Appearance/QueryFilterModule";

/**
 * 查询模块
 * @returns  React.FC
 */
const QueryModule: React.FC = () => {
    return (
        <QueryFilterModule>
            <Form.Item>
                <Select/>
            </Form.Item>
        </QueryFilterModule>
    );
};

export default QueryModule;
