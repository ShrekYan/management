import React from "react"
import {Breadcrumb} from "antd"

const BreadcrumbPage: React.FC = () => {
    return (
        <>
            <Breadcrumb
                items={
                    [
                        {
                            title:"home"
                        },
                        {
                            title: <a href="">Application Center</a>,
                        },
                        {
                            title: <a href="">Application List</a>,
                        },
                        {
                            title: 'An Application',
                        }
                    ]
                }
            >

            </Breadcrumb>
        </>
    )
};

export default BreadcrumbPage;