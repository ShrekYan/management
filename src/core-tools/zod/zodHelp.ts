import { ZodSchema, ZodError } from "zod";

/**
 * await-to-js 验证表单
 * @param schema 
 * @param data 
 * @returns 
 */
export const validateFormData = <T>(schema: ZodSchema<T>, data: unknown) => {
    try {
        const result = schema.parse(data);
        return Promise.resolve([null, result]);
    } catch (error) {
        if (error instanceof ZodError) {
            // 记录详细的验证错误信息
            console.error("Zod 验证失败:");
            console.error("Schema:", schema);
            console.error("错误详情:", error.errors);
            console.error("输入参数:", data);
        }
        return Promise.resolve([error, null]);
    }
};

