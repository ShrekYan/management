import React, { useState, useRef } from "react";
import { Space, Table, Button } from "antd";
import { getTableConfig } from "./tableConfig";
import type { ColumnProps } from "antd/es/table";
import TableCardContainer from "@components/Common/Appearance/TableCardContainer";
import type { QuerySelectResultResponse } from "@/types/responses/product/querySelectResult";
import ProductDetailModal from "./copmonents/ProductDetailModal";
import { CRUD_TYPE, CRUD } from "@utils/constants/constants";
import useStore from "./../../useStore";

interface TableResultProps {
    productList: QuerySelectResultResponse["productList"];
}

const TableResult: React.FC<TableResultProps> = ({ productList }) => {
    const loading = useStore((state) => {
        return state.loading;
    });
    const [oprType, setOprType] = useState<keyof typeof CRUD>(CRUD.create);
    //选中的数据
    const selectedData = useRef<QuerySelectResultResponse["productList"][number]>(null);
    const [showModal, setShowModal] = useState(false);
    const tableColumns = getTableConfig();

    /**
     * 修改事件
     * @param record
     */
    const handleEdit = (record: QuerySelectResultResponse["productList"][number]) => {
        //开启弹窗
        setShowModal(true);
        selectedData.current = record;
        setOprType(CRUD.update);
    };

    /**
     * 扩展表格对象
     * @returns ColumnProps[]
     */
    const exteraTableColumnRender = () => {
        const extraColumns: ColumnProps<QuerySelectResultResponse["productList"][number]>[] = [
            {
                title: "操作",
                width: 150,
                align: "center",
                fixed: "right",
                render(value, record) {
                    return (
                        <Space>
                            <a
                                onClick={() => {
                                    handleEdit(record);
                                }}
                            >
                                修改
                            </a>
                        </Space>
                    );
                }
            }
        ];
        return extraColumns;
    };

    const renderTableList = () => {
        const newTableColumns = [...tableColumns, ...exteraTableColumnRender()];
        return (
            <Table<QuerySelectResultResponse["productList"][number]>
                bordered
                size="large"
                dataSource={productList}
                columns={newTableColumns}
                pagination={false}
                loading={loading}
                rowKey="productId"
                scroll={{ x: 1500 }}
            />
        );
    };

    /**
     * 开启弹窗
     */
    const handleOpenModal = () => {
        setShowModal(true);
        selectedData.current = null;
        setOprType(CRUD.create);
    };

    /**
     * 弹窗取消
     */
    const handleModalCancel = () => {
        setShowModal(false);
        selectedData.current = null;
    };

    /**
     * 弹窗完成
     */
    const handleModalFinish = () => {
        setShowModal(false);
        selectedData.current = null;
    };

    return (
        <React.Fragment>
            {/* 表格 */}
            <TableCardContainer
                extra={
                    <Space>
                        <Button type="primary" onClick={handleOpenModal}>
                            新增
                        </Button>
                    </Space>
                }
            >
                {renderTableList()}
            </TableCardContainer>
            {/* 弹窗 */}
            <ProductDetailModal
                selectedData={selectedData.current}
                title={`${CRUD_TYPE[oprType as keyof typeof CRUD_TYPE]}详情`}
                visible={showModal}
                onCancel={handleModalCancel}
                onFinish={handleModalFinish}
            />
        </React.Fragment>
    );
};

export default TableResult;
