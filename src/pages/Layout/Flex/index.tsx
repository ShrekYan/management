import React, {useState} from "react"
import {Flex, Radio,Button,Card,Typography} from "antd"

const FlexPage: React.FC = () => {
    const [value,setValue] = useState<string>("horizontal");

    const baseStyle:React.CSSProperties = {
        width:"25%",
        height:54
    };

    const cardStyle:React.CSSProperties = {
        width:620
    };

    const imgStyle:React.CSSProperties = {
        display:'block',
        width:273
    };

    return (
        <>
            <Flex gap="middle" vertical>
                <Radio.Group value={value} onChange={(e)=>{setValue(e.target.value)}}>
                    <Radio value="horizontal">horizontal</Radio>
                    <Radio value="vertical">vertical</Radio>
                </Radio.Group>
                <Flex vertical={value ==="vertical"}>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
                    ))}
                </Flex>
            </Flex>
            <Flex wrap gap="small">
                {Array.from({length:24},(_,i)=>{
                    return (
                        <Button key={i} type="primary">Button</Button>
                    )
                })}
            </Flex>
            <Flex justify="center" align="center">
                <Button type="primary">Primary</Button>
                <Button type="primary">Primary</Button>
                <Button type="primary">Primary</Button>
                <Button type="primary">Primary</Button>
            </Flex>
            <Card hoverable style={cardStyle} styles={{body:{padding:0,overflow:"hidden"}}}>
                <Flex justify="space-between">
                    <img alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={imgStyle} />
                    
                </Flex>
                <Flex vertical align="flex-end" justify="space-beteen" style={{padding:32}}>
                    <Typography.Title level={3}>
                         “antd is an enterprise-class UI design language and React UI library.”
                    </Typography.Title>
                     <Button type="primary" href="https://ant.design" target="_blank">
                        Get Started
                    </Button>
                </Flex>
            </Card>
        </>
    )
};

export default FlexPage;