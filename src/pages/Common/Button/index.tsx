import React from "react"
import {Button, Dropdown, Flex, Tooltip} from "antd"
import {SearchOutlined} from "@ant-design/icons";

const ButtonTest: React.FC = () => {
    return (
        <React.Fragment>
            <Flex gap="small" wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">link Button</Button>
            </Flex>
            <Flex gap="small" wrap>
                <Button color="default" variant="solid"> solid</Button>
                <Button color="primary" variant="outlined">outlined</Button>
                <Button color="danger" variant="dashed">dashed</Button>
                <Button color="pink" variant="filled">filled</Button>
                <Button color="purple" variant="text">text</Button>
                <Button color="cyan" variant="link">link</Button>
            </Flex>
            <Flex gap="small" wrap>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined/>}/>
                </Tooltip>
                <Button type="primary" icon={<SearchOutlined/>}>
                    Search
                </Button>
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined/>}/>
                </Tooltip>
            </Flex>
            <Flex gap="small">
                <Button type="primary" loading iconPosition="start">loading</Button>
            </Flex>
            <Flex gap="small">
                <Button disabled>Default (disabled)</Button>
            </Flex>
            <Flex gap="small">
                <Button block>Default</Button>
                <Button danger> Default (danger)</Button>
            </Flex>
            <Flex gap="small" wrap>
                <Dropdown.Button menu={{
                    items: [
                        {
                            key:"1",
                            label:"1st item"
                        },
                        {
                            key:"2",
                            label:"2nd item"
                        }
                    ]
                }}>
                    Actions
                </Dropdown.Button>
                <Button type="primary" autoInsertSpace>确定</Button>
            </Flex>
        </React.Fragment>
    )
};

export default ButtonTest;