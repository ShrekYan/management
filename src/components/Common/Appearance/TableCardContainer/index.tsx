import React from 'react';
import {Card} from 'antd';

const TableCardWrap: React.FC<React.PropsWithChildren<{ title?: string, extra?: React.ReactElement, cardStyle?: React.CSSProperties }>> = (
  {
    title,
    extra,
    children,
    cardStyle
  }
): React.ReactElement => {
  return (
    <Card
      title={title || "查询结果"}
      style={cardStyle}
      extra={extra}
    >
      {children}
    </Card>

  );
};
export default TableCardWrap;
