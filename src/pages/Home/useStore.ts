import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import services from "@services/index";
import type { QuerySelectResultRequest } from "@/types/requests/product/querySelectResult";
import type { QuerySelectResultResponse } from "@/types/responses/product/querySelectResult";
import localforage from "localforage";

// 定义初始化参数类型
interface StoreInitialState {
    isLoading?: boolean;
    initialProductList?: QuerySelectResultResponse["productList"];
}

// 定义状态类型
type State = {
    productList: any[]; // 建议替换为具体类型，如 Product[]
    loading: boolean;
};

// 定义动作类型
type Action = {
    getProductList: (params: QuerySelectResultRequest) => Promise<void>;
    reset: () => void;
    initialize: (initState?: StoreInitialState) => void; // 新增初始化方法
};

// 合并状态和动作类型
type StoreState = State & Action;

// 持久化配置类型
type PersistStoreState = Omit<StoreState, "getProductList" | "initialize">; // 排除函数类型

const useStore = create<StoreState>()(
    persist(
        (set, get, store) => ({
            // 产品列表
            productList: [],
            loading: false,
            /**
             * 初始化方法 - 安全设置初始状态
             */
            initialize: (initState = {}) => {
                // 只在状态未初始化时设置
                if (get().productList.length === 0 && !get().loading) {
                    set({
                        productList: initState.initialProductList || [],
                        loading: initState.isLoading ?? false
                    });
                }
            },
            /**
             * 获取产品列表
             */
            getProductList: async (params) => {
                try {
                    set({ loading: true });
                    const responseData = await services.product.querySelectResult(params);
                    set({ productList: responseData.data.productList });
                } catch (e) {
                    set({ productList: [] });
                } finally {
                    set({ loading: false });
                }
            },
            reset: () => {
                set(store.getInitialState());
            }
        }),
        {
            name: "product-store",
            // 只持久化状态数据，排除函数
            partialize: (state) => ({
                productList: state.productList,
                loading: state.loading
            }),
            storage: {
                getItem: (name) => {
                    return localforage.getItem(name);
                },
                setItem: (name, value) => {
                    localforage.setItem(name, value);
                },
                removeItem: (name) => {
                    localforage.removeItem(name);
                }
            }
        } as PersistOptions<StoreState, PersistStoreState>
    )
);

export default useStore;
