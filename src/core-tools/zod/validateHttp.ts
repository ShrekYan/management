import { ZodSchema, ZodError } from "zod";
import type { IResponseData, IOptionsAndUndefined } from "./../http/http";
import http from "./../http/index";

export function validateData<T>(schema: ZodSchema<T>, data: unknown): T {
    try {
        return schema.parse(data);
    } catch (error) {
        if (error instanceof ZodError) {
            // 记录详细的验证错误信息
            console.error("Zod 验证失败:");
            console.error("Schema:", schema);
            console.error("错误详情:", error.errors);
            console.error("输入参数:", data);
        }
        throw error;
    }
}

/**
 * 创建验证的http api
 * @param schema
 * @param url
 * @param httpMethod
 * @param options
 * @returns
 */
export const createValidatedApiFunction = <TRequest, TResponse>(
    schema: ZodSchema<TRequest>,
    url: string,
    httpMethod: "post" | "get"
) => {
    return async (
        params: TRequest,
        options?: IOptionsAndUndefined
    ): Promise<IResponseData<TResponse>> => {
        try {
            const validateParams = validateData(schema, params);
            switch (httpMethod) {
                case "post":
                    return http.post<TRequest, TResponse>(url, validateParams, options);
                case "get":
                    return http.get(url, { data: validateData }, options);
            }
        } catch (error) {
            if (error instanceof ZodError) {
                return Promise.reject({
                    code: "VALIDATION_ERROR",
                    message: "请求参数验证失败",
                    details: error.errors
                });
            }
            return Promise.reject(error);
        }
    };
};
