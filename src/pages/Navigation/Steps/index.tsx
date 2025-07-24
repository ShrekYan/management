import React from "react"
import {Steps} from "antd"

const StepsPage = ()=>{
    const description = 'This is a description.';
    return (
        <Steps
            current={1}
            percent={50}
            items={[
                {
                    title:"Finished",
                    description
                },
                {
                    title:"In progress",
                    description,
                    subTitle:"Left 00:00:08",
                    status:"finish"
                },
                {
                    title:"waiting",
                    description,
                    status:"finish"
                }
            ]}
        />
    )
};

export default StepsPage;