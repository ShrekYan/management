import React from "react"
import  {Card,Space} from "antd"

const SpacePage:React.FC = ()=>{
    return (
        <Space direction="vertical" size="middle" style={{display:"flex"}}>
            <Card title="card" size="small">
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="card" size="small">
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <Card title="card" size="small">
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </Space>
    )
};

export default SpacePage;