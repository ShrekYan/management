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
export const getGenerateMenuData = () => {
    let currentIndex = 0;
    const generateMenuData = (routeList: MenuDataItem[]) => {
        if (!routeList) return null;

        return routeList.map((routeItem: MenuDataItem) => {
            currentIndex += 1; //菜单的key
            routeItem.children = routeItem.routes;
            routeItem.label = routeItem.name;
            routeItem.key = currentIndex.toString();
            routeItem.hidden = !!routeItem.redirect || routeItem.hidden;

            if (routeItem.routes) {
                generateMenuData(routeItem.routes);
            }
            return routeItem;
        });
    }
    return generateMenuData;
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
 * 查找菜单对象 by key
 * @param menus
 * @param key
 */
export const findMenuData = (menus: MenuDataItem[] | undefined = [], key: string): MenuDataItem | null  => {
    let _temp: MenuDataItem | null = null;
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].key === key) {
            _temp = menus[i];
        }
        if (menus[i].children) {
            _temp = findMenuData(menus[i].children, key);
        }
    }
    return _temp;
};

/**
 * 查找菜单对象 by path
 * @param menus
 * @param path
 */
export const findMenuDataByPath = (menus: MenuDataItem[] | undefined = [], path: string): MenuDataItem | null => {
    let _temp: MenuDataItem | null = null;
    for (let i = 0; i < menus.length; i++) {
        if (menus[i].path === path) {
            _temp =  menus[i];
        }
        if (menus[i].children) {
            _temp =  findMenuDataByPath(menus[i].children, path);
        }
    }
    return _temp;
};


