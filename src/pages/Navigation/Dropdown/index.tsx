import React from "react"
import {DownOutlined, SmileOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Dropdown, Space} from 'antd';

const DropdownPage: React.FC = () => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            ),
            icon: <SmileOutlined/>,
            disabled: true,
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: '4',
            danger: true,
            label: 'a danger item',
        }
    ];

    const items2: MenuProps['items'] = [
        {
            key: '1',
            type: 'group',
            label: 'Group title',
            children: [
                {
                    key: '1-1',
                    label: '1st menu item',
                },
                {
                    key: '1-2',
                    label: '2nd menu item',
                },
            ],
        },
        {
            key: '2',
            label: 'sub menu',
            children: [
                {
                    key: '2-1',
                    label: '3rd menu item',
                },
                {
                    key: '2-2',
                    label: '4th menu item',
                },
            ],
        },
        {
            key: '3',
            label: 'disabled sub menu',
            disabled: true,
            children: [
                {
                    key: '3-1',
                    label: '5d menu item',
                },
                {
                    key: '3-2',
                    label: '6th menu item',
                },
            ],
        },
    ];
    return (
        <>
            <Space direction={"vertical"}>
                <Dropdown menu={{items}} arrow={true}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Hover me
                            <DownOutlined/>
                        </Space>
                    </a>
                </Dropdown>
                <Dropdown menu={{items: items2}}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            Cascading menu
                            <DownOutlined/>
                        </Space>
                    </a>
                </Dropdown>
            </Space>
        </>
    )
};

export default DropdownPage;