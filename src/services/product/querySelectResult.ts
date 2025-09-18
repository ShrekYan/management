import http from "@/core-tools/http";
import type { QuerySelectResultRequest } from "@/types/requests/product/querySelectResult";
import type { QuerySelectResultResponse } from "@/types/responses/product/querySelectResult";

const querySelectResult = (params: QuerySelectResultRequest) => {
    return http.post<QuerySelectResultRequest, QuerySelectResultResponse>(
        "/v1/product/selectFund/querySelectResult",
        params
    );
};

export default querySelectResult;
