import type { QuerySelectResultRequest } from "@/types/requests/product/querySelectResult";
import type { QuerySelectResultResponse } from "@/types/responses/product/querySelectResult";
import {createValidatedApiFunction} from "@/core-tools/zod/validateHttp"
import { z } from "zod";

const QuerySelectResultSchema = z.object({
    pageNo: z.number(),
    pageSize: z.number(),
    productSort: z.string(),
    productSortsType: z.string(),
    needRedemptionRate: z.boolean(),
    parseTypeCode: z.string(),
    onlyCount: z.boolean(),
    fundTypeCode: z.string()
});

const querySelectResult = (params: QuerySelectResultRequest) => {
    const post = createValidatedApiFunction<QuerySelectResultRequest, QuerySelectResultResponse>(
        QuerySelectResultSchema,
        "/v1/product/selectFund/querySelectResult",
        "post"
    );
    return post(params);
    //     普通调用方式
    //     return http.post<QuerySelectResultRequest, QuerySelectResultResponse>(
    //         "/v1/product/selectFund/querySelectResult",
    //         validated
    //     );
};

export default querySelectResult;
