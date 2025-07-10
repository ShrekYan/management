import {HomeOutlined, UserOutlined} from "@ant-design/icons"
import {MenuDataItem} from "@umijs/route-utils";


const Handler = {
    "HomeOutlined": <HomeOutlined/>,
    "UserOutlined": <UserOutlined/>
};

/**
 * 服务器上动态显示菜单上的Icon
 * @param routeList
 */
export const loopMenuItemIcon = (routeList: MenuDataItem[] | undefined = []): MenuDataItem[] => {
    return routeList.map(({icon, routes, ...item}) => ({
        ...item,
        icon: icon && Handler[icon as keyof typeof Handler],
        routes: routes && loopMenuItemIcon(routes),
    }));
};

/**
 *
 * 生成菜单数据
 * @param routeList
 * @param initialIndex
 * @return
 * [
 *     {
 *         key: "1",
 *         label: "首页",
 *         icon: <HomeOutlined/>,
 *         path: "/"
 *     },
 *     {
 *         key: "2",
 *         label: "用户管理",
 *         icon: <UserOutlined/>,
 *         path: "/users"
 *     },
 *     {
 *         key: "3",
 *         label: "账户设置",
 *         path: "/account",
 *         children: [
 *             {
 *                 key: "3.1",
 *                 label: "我的资料",
 *                 path: "/account/myInfo"
 *             }
 *         ]
 *     }
 * ]
 */
export const generateMenuData = (routeList: MenuDataItem[], initialIndex = 0) => {
    if (!routeList) return null;

    return routeList.map((routeItem: MenuDataItem, i) => {
        const currentIndex = initialIndex + i + 1; // 创建新变量

        routeItem.children = routeItem.routes;
        routeItem.label = routeItem.name;
        routeItem.key = currentIndex.toString();
        routeItem.hidden = !!routeItem.redirect || routeItem.hidden;

        if (routeItem.routes) {
            generateMenuData(routeItem.routes, currentIndex);
        }
        return routeItem;
    });
};

/**
 * 获取面包屑名称
 * @param menus
 * @param path
 */
export const getBreadcrumbName = (menus: MenuDataItem[] | undefined = [], path: string) => {
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].path === path) {
            return menus[i].name;
        }
        if (menus[i].children) {
            getBreadcrumbName(menus[i].children, path);
        }
    }
    return null;
};

/**
 * 查找菜单对象
 * @param menus
 * @param key
 */
export const findMenuData = (menus:MenuDataItem[] | undefined = [],key:string):MenuDataItem | null =>{
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].key === key) {
            return menus[i];
        }
        if (menus[i].children) {
           return findMenuData(menus[i].children, key);
        }
    }
    return null;
};
/**
 * 查找菜单对象
 * @param menus
 * @param path
 */
export const findMenuDataByPath = (menus:MenuDataItem[] | undefined = [],path:string):MenuDataItem | null =>{
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].path === path) {
            return menus[i];
        }
        if (menus[i].children) {
            return findMenuDataByPath(menus[i].children, path);
        }
    }
    return null;
};


