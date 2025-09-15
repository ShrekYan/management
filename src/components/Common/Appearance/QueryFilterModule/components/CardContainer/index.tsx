import React from 'react'
import {Card} from 'antd'

const CardContainer: React.FC<React.PropsWithChildren<{title:string}>> = ({title,children})=>{
    return (
        <Card title={title}>
            {children}
        </Card>
    )
};

export default CardContainer;