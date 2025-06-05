import React, {useEffect} from "react"
import http from "@/core-tools/http/index"
import {Input} from "antd"

const Home = () => {

    useEffect(() => {
        http.post("/product/selectFund/querySelectResult", {
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
            console.log(data);
        });
    }, []);

    return (
        <Input/>
    )
};

export default Home;