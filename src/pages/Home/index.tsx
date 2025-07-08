import React, {useEffect, useState} from "react"
import {useActivate,useUnactivate} from "umi"
import http from "@core-tools/http/index"
import Login from "@page/Login/index"

const Home = () => {
    const [productList, setProductList] = useState<any[]>([]);

    console.log("进入Home页面");
    useActivate(()=>{
        console.log("进入Home页面");
    });
    useUnactivate(()=>{
        console.log("离开Home页面");
    });
    useEffect(() => {
        console.log("123");
        http.post<any, any>("/v1/product/selectFund/querySelectResult", {
            "needRedemptionRate": false,
            "pageNo": 1,
            "pageSize": 10,
            "productSort": "latest_year_rate",
            "productSortsType": "desc",
            "parseTypeCode": "16",
            "onlyCount": false,
            "conditionListVo": [],
            "fundTypeCode": "100",
            "source": "H",
            "guid": "cb8d45a9e134ffecd6e56aeb187efd07",
            "version": "5.0.0",
            "appSource": "",
            "appVersion": "",
            "fraudTokenId": "eyJ2IjoiL01SWGxaaG5ibWdwcGVqR1IyWThGajJNV29oT01wand1Qkt4YytJSEs3TmQ0RkFkSnFJRGJLYURPY1hPQTRQaSIsIm9zIjoid2ViIiwiaXQiOjEyMTAsInQiOiJpOFhPMFlVYmZQeHVlVW1BTEVIcEhSd0FtL0VpTlZ4SWViT2VxYlNrRHZlZm9xRXVTWnRhdU1QWURPbzRjdTZKM2xKWWJqdmxLQWFPdU1ObStONzAwUT09In0="
        }).then((data) => {
            setProductList(data.data.productList)
        });
        // console.log(ENV_TYPE);
        // console.log("123123");
    }, []);

    return (
        <React.Fragment>
            {
                productList?.map((productItem,index)=>{
                    return (
                        <div key={index}>{productItem.productName}</div>
                    )
                })
            }
            <Login/>
        </React.Fragment>

    )
};

export default Home;