import React, { useRef, useEffect } from "react";
import { Modal, Form, Input, InputNumber, message } from "antd";
import type { QuerySelectResultResponse } from "@/types/responses/product/querySelectResult";
import type { FormInstance } from "antd";
import { validateFormData } from "@/core-tools/zod/zodHelp";
import { z } from "zod";

interface FormInstanceType {
    productId: number;
    productName: string;
    fundId: string;
    fundTypeDesc: string;
}

const FormSchema = z.object({
    productId: z.number(),
    productName: z.string(),
    fundId: z.string(),
    fundTypeDesc: z.string()
});

const ProductDetailModal: React.FC<{
    visible: boolean;
    selectedData: QuerySelectResultResponse["productList"][number] | undefined;
    onCancel: () => void;
    onFinish: () => void;
    title: string;
}> = ({ title, visible, selectedData, onCancel, onFinish }) => {
    //form ref
    const formRef = useRef<FormInstance<FormInstanceType>>(null);
    //是否为修改状态
    const isUpdate = Object.keys(selectedData || {}).length > 0;

    useEffect(() => {
        if (selectedData && visible) {
            formRef?.current?.setFieldsValue({
                ...selectedData
            });
        } else {
            formRef?.current?.resetFields();
        }
    }, [visible, selectedData]);

    /**
     * 弹窗确认
     */
    const handleModalOk = async () => {
        formRef?.current?.validateFields().then(async (data) => {
            //验证"运行时"字段的有效性
            const [err, validatedData] = await validateFormData(FormSchema, data);
            if (!err) {
                console.log(validatedData);
                message.success(isUpdate ? "修改成功" : "新增成功");
                onFinish?.();
            } else {
                message.error("字段验证失败");
            }
        });
    };

    /**
     * 弹窗取消
     */
    const handleOnCancel = () => {
        onCancel?.();
    };

    const formItemCol = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 }
    };

    return (
        <Modal
            title={title}
            open={visible}
            okText="确认"
            cancelText="取消"
            width={800}
            onOk={handleModalOk}
            onCancel={handleOnCancel}
        >
            <Form ref={formRef}>
                <Form.Item
                    {...formItemCol}
                    rules={[{ required: true, message: "请输入产品id" }]}
                    label="产品id"
                    name="productId"
                >
                    <InputNumber style={{ width: "100%" }} placeholder="请输入产品id" />
                </Form.Item>
                <Form.Item
                    {...formItemCol}
                    label="基金名称"
                    name="productName"
                    rules={[{ required: true, message: "请输入基金名称" }]}
                >
                    <Input placeholder="请输入基金名称" />
                </Form.Item>
                <Form.Item
                    {...formItemCol}
                    name="fundId"
                    label="基金代码"
                    rules={[{ required: true, message: "请输入基金代码" }]}
                >
                    <Input placeholder="请输入基金代码" />
                </Form.Item>
                <Form.Item
                    {...formItemCol}
                    label="基金类型"
                    name="fundTypeDesc"
                    rules={[{ required: true, message: "情输入基金类型" }]}
                >
                    <Input placeholder="情输入基金类型" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ProductDetailModal;
