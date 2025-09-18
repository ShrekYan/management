import type { ColumnProps } from "antd/lib/table";

export const getTableConfig = (): ColumnProps<any>[] => {
    const columns: ColumnProps<any>[] = [
        {
            title: "产品ID",
            dataIndex: "productId",
            align: "center",
            fixed: "left"
        },
        {
            title: "产品名称",
            width: 250,
            dataIndex: "productName",
            align: "center"
        },
        {
            title: "基金代码",
            dataIndex: "fundId",
            align: "center"
        },
        {
            title: "基金类型",
            dataIndex: "fundTypeDesc",
            align: "center"
        },
        {
            title: "日涨幅",
            dataIndex: "dailyRate",
            align: "center"
        },
        {
            title: "近一周",
            dataIndex: "latestWeekRate",
            align: "center"
        },
        {
            title: "近一月",
            dataIndex: "latestMonthRate",
            align: "center"
        },
        {
            title: "近三月",
            dataIndex: "latestThreeYearRate",
            align: "center"
        },
        {
            title: "近半年",
            dataIndex: "latestThreeYearRate",
            align: "center"
        },
        {
            title: "近一年",
            dataIndex: "latestYearRate",
            align: "center"
        },
        {
            title: "近两年",
            dataIndex: "latestTwoYearRate",
            align: "center"
        },
        {
            title: "近三年",
            dataIndex: "latestThreeYearRate",
            align: "center"
        },
        {
            title: "近五年",
            dataIndex: "latestFiveYearRate",
            align: "center"
        },
        {
            title: "成立以来",
            dataIndex: "totalRate",
            align: "center"
        }
    ];
    return columns;
};
