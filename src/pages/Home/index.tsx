import { useEffect } from "react";
import TableResult from "./copmonents/TableResult.tsx";
import QueryModule from "./copmonents/QueryModule/index";
import useStore from "./useStore";
import styles from "./index.module.less";

const Home = () => {
    const { productList, getProductList } = useStore();

    useEffect(() => {
        getProductList({
            needRedemptionRate: false,
            pageNo: 1,
            pageSize: 10,
            productSort: "latest_year_rate",
            productSortsType: "desc",
            parseTypeCode: "16",
            onlyCount: false,
            fundTypeCode: "100"
        });
    }, []);
    return (
        <div className={styles.homeContainer}>
            <QueryModule />
            <TableResult productList={productList} />
        </div>
    );
};

export default Home;
