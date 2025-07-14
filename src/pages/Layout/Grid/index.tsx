import React from "react"
import {Col, Row} from "antd"

const GridPage: React.FC = () => {
    return (
        <>
            <div>
                <Row>
                    <Col span={24}>col</Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8} offset={8}>
                        col-8
                    </Col>
                </Row>
                <Row>
                    <Col span={6} offset={6}>
                        col-6 col-offset-6
                    </Col>
                    <Col span={6} offset={6}>
                        col-6 col-offset-6
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        col-12 col-offset-6
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col flex={2}>2/5</Col>
                    <Col flex={3}>3/5</Col>
                </Row>
                <Row>
                    <Col flex="100px">100px</Col>
                    <Col flex="auto">Fill Rest</Col>
                </Row>
            </div>
        </>
    )
};

export default GridPage;