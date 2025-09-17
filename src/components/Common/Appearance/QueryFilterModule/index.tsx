import React, { useState, useRef, MutableRefObject } from "react";
import { Form, Button, Row, Col, Space } from "antd";
import type { FormProps, FormInstance } from "antd/es/form/Form";
import CardContainer from "./components/CardContainer/index";
import { useMount } from "ahooks";
import type { ColProps } from "antd/lib/col";

export interface ISearchFormProps<T> {
    title?: string;
    onFinish?: (fieldsValue: T) => Promise<any> | void;
    onReset?: () => Promise<any> | void;
    formProps?: FormProps;
    children: React.ReactElement<T> | React.ReactElement<T>[];
    formRef?: MutableRefObject<FormInstance<T> | undefined>;
    optionRender?: () => React.ReactElement;
}

const SearchFrom = <T,>({
    onFinish,
    onReset,
    formProps,
    children,
    formRef,
    optionRender,
    title
}: ISearchFormProps<T>): React.ReactElement => {
    //form引用
    const [form] = Form.useForm();
    //珊瑚格最大数量24
    const gridCount = 24;
    //默认每一列占有8
    const defaultColSpan = (() => {
        if (window.document.body.clientWidth > 1200) {
            return 8;
        } else if (
            window.document.body.clientWidth < 1200 &&
            window.document.body.clientWidth > 700
        ) {
            return 12;
        } else {
            return 24;
        }
    })();

    //显示展开/收起字段行数
    const showExpandRowNumber = 3;
    //是否展示收起/展开字段
    const isShowExpandText = useRef<boolean>(
        (React.Children.count(children) * defaultColSpan) / gridCount >= showExpandRowNumber
    );
    //最小保留行数
    const minRowsNumber = 2;
    //最小保留数量
    const minColNumber = (gridCount / defaultColSpan) * minRowsNumber;
    //展开/收起
    const [expand, setExpand] = useState<boolean>(true);

    useMount(() => {
        if (formRef) {
            formRef.current = form;
        }
    });
    
    /**
     * 触发表单完成事件
     * @param values
     */
    const handleFinish = (values: T) => {
        if (onFinish) {
            onFinish(values);
        }
    };

    /**
     * 重置事件
     */
    const handleReset = () => {
        form.resetFields();
        if (onReset) {
            onReset();
        }
    };

    /**
     * 展开/收起事件
     */
    const handleExpand = () => {
        setExpand(!expand);
    };

    /**
     * children element splice
     * @param newChildArray
     */
    const handleSpliceData = (newChildArray: React.ReactElement[]) => {
        let tempNewChildArray: React.ReactElement[] = newChildArray;
        if (isShowExpandText.current) {
            if (!expand) {
                tempNewChildArray = tempNewChildArray.splice(0, minColNumber);
            }
        }
        return tempNewChildArray;
    };

    /**
     * 重新渲染
     */
    const renderItem = () => {
        let totalColSpan = 0;
        let newChildArray = [];

        if (Array.isArray(children)) {
            newChildArray = [...children];
        } else {
            newChildArray = [children];
        }
        //根据收起/展开截取数据
        newChildArray = handleSpliceData(newChildArray);

        const newFormItems = newChildArray.map((elementItem, index) => {
            const childItemColGrid: ColProps = elementItem?.props["data-colgrid"] || {};

            const { span: childColItemSpan, ...resetChildColItemProps } = childItemColGrid;

            const colSpan = defaultColSpan;
            totalColSpan += (childColItemSpan as number) || colSpan;

            if (totalColSpan > gridCount) {
                totalColSpan = (childColItemSpan as number) || colSpan;
            }
            return (
                <Col span={childColItemSpan || colSpan} {...resetChildColItemProps} key={index}>
                    {elementItem}
                </Col>
            );
        });

        //是否为单行
        const isOneLine = totalColSpan + defaultColSpan > gridCount;
        //计算按钮区域剩余占有位置
        const result = gridCount - totalColSpan;

        newFormItems.push(
            <Col
                key="btnList"
                span={isOneLine ? gridCount : result}
                style={{
                    textAlign: "right"
                }}
            >
                {/*自定义检索区*/}
                {optionRender ? (
                    optionRender()
                ) : (
                    <Space>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                        <Button onClick={handleReset}>重置</Button>
                    </Space>
                )}
                {isShowExpandText.current && (
                    <a style={{ marginLeft: 10 }} onClick={handleExpand}>
                        {expand ? "收起" : "展开"}
                    </a>
                )}
            </Col>
        );
        return newFormItems;
    };

    return (
        <CardContainer title={title || "查询条件"}>
            <Form form={form} onFinish={handleFinish} {...formProps}>
                <Row gutter={24}>{renderItem()}</Row>
            </Form>
        </CardContainer>
    );
};

export default SearchFrom;
