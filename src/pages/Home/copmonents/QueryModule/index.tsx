import React, { useRef } from "react";
import { Form, Input } from "antd";
import type { FormInstance } from "antd";
import QueryFilterModule from "@components/Common/Appearance/QueryFilterModule";
import AffixContent from "@components/Common/Appearance/QueryFilterModule/components/AffixContent";
import useStore from "./../../useStore";

interface QueryFilterForm {
    productName: string;
}
/**
 * 查询模块
 * @returns  React.FC
 */
const QueryModule: React.FC = () => {
    const { getProductList, reset } = useStore();
    const formRef = useRef<FormInstance<QueryFilterForm>>();

    /**
     * 查询
     */
    const handleFinish = () => {
        getProductList({
            needRedemptionRate: false,
            pageNo: 1,
            pageSize: 200,
            productSort: "latest_year_rate",
            productSortsType: "desc",
            parseTypeCode: "16",
            onlyCount: false,
            fundTypeCode: "100"
        });
    };

    /**
     * 重置
     */
    const handleReset = () => {
        reset();
    };

    return (
        <AffixContent>
            <QueryFilterModule<QueryFilterForm>
                onFinish={handleFinish}
                formRef={formRef}
                onReset={handleReset}
            >
                <Form.Item label="基金名称">
                    <Input placeholder="请输入基金名称" />
                </Form.Item>
            </QueryFilterModule>
        </AffixContent>
    );
};

export default QueryModule;
