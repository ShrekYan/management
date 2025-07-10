import React from "react"
import {Button, Flex} from "antd"

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

        </React.Fragment>
    )
};

export default ButtonTest;