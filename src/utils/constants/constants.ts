export const BOSS_CONFIG = "boss_config";

//增删改查枚举
export enum CRUD {
    "create" = "create", //新增
    "retrieve" = "retrieve", //详情||查询
    "update" = "update", //修改||编辑||更新
    "delete" = "delete", //删除
    "copy" = "copy", // 复制
    "other" = "other" // 当逻辑信息复用（非复制、非编辑、非新增）单独处理数据反显
}

//增删改查描述类型
export enum CRUD_TYPE {
    "create" = "新增", //新增
    "retrieve" = "详情", //详情||查询
    "update" = "编辑", //修改||编辑||更新
    "delete" = "删除", //删除
    "copy" = "复制" // 复制
}
