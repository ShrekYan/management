import React from "react";
import { Space, Table, Button } from "antd";
import { getTableConfig } from "./tableConfig";
import type { ColumnProps } from "antd/es/table";
import TableCardContainer from "@components/Common/Appearance/TableCardContainer";
import type { QuerySelectResultResponse } from "@/types/responses/product/querySelectResult";
import useStore from "./../../useStore";

interface TableResultProps {
    productList: QuerySelectResultResponse["productList"];
}

const TableResult: React.FC<TableResultProps> = ({ productList }) => {
    const loading = useStore((state) => {
        return state.loading;
    });
    const tableColumns = getTableConfig();

    /**
     * 修改事件
     * @param record
     */
    const handleEdit = (record: QuerySelectResultResponse["productList"][number]) => {
        console.log(record);
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

    return (
        <TableCardContainer
            extra={
                <Space>
                    <Button type="primary">新增</Button>
                </Space>
            }
        >
            {renderTableList()}
        </TableCardContainer>
    );
};

export default TableResult;
