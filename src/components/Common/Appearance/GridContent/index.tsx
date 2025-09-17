import React from "react";
import { Row, Col } from "antd";
import type { RowProps } from "antd/lib/row";
import type { ColProps } from "antd/lib/col";

interface IGridContent {
    rowGrid?: RowProps;
    colGrid?: ColProps;
}

/**
 * 自适应组件
 * @param children
 * @param colGrid
 * @param rowGrid
 * @constructor
 */
const GridContentWrap: React.FC<React.PropsWithChildren<IGridContent>> = ({
    children,
    colGrid = {},
    rowGrid = {}
}): React.ReactElement => {
    const { xs, sm, md, lg, xl, xxl, span, ...restColProps } = colGrid;

    const { gutter, ...restRowProps } = rowGrid;

    let tempXs = xs;
    let tempSm = sm;
    let tempMd = md;
    let tempLg = lg;
    let tempXl = xl;
    let tempXxl = xxl;

    if (span) {
        tempXs = undefined;
        tempSm = undefined;
        tempMd = undefined;
        tempLg = undefined;
        tempXl = undefined;
        tempXxl = undefined;
    } else {
        tempXs = xs || 24;
        tempSm = sm || 24;
        tempMd = md || 12;
        tempLg = lg || 12;
        tempXl = xl || 8;
        tempXxl = xxl || 12;
    }

    // colGrid.span
    //组件自动添加row和col 珊瑚格模式
    const newChild: React.ReactElement[] | null | undefined = React.Children.map(
        children,
        (childItem: any) => {
            const childItemColGrid: ColProps = childItem.props["data-colgrid"];

            //组件中设置colGrid属性
            if (childItemColGrid) {
                const { span: childColItemSpan, ...resetChildColItemProps } = childItemColGrid;
                return (
                    <Col span={childColItemSpan || span} {...resetChildColItemProps}>
                        {childItem}
                    </Col>
                );
            } else {
                return (
                    <Col
                        xs={tempXs}
                        sm={tempSm}
                        md={tempMd}
                        lg={tempLg}
                        xl={tempXl}
                        xxl={tempXxl}
                        span={span}
                        {...restColProps}
                    >
                        {childItem}
                    </Col>
                );
            }
        }
    );

    return (
        <Row gutter={gutter || 16} {...restRowProps}>
            {newChild}
        </Row>
    );
};

export default GridContentWrap;
