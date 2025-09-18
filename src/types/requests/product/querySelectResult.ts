export interface QuerySelectResultRequest {
    pageNo: number;
    pageSize: number;
    productSort: string;
    productSortsType: string;
    needRedemptionRate: boolean;
    parseTypeCode: string;
    onlyCount: boolean;
    fundTypeCode: string;
}
