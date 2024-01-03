import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiAmazonec2,
    SiKubernetes,
    SiAwslambda,
    SiAmazondynamodb,
    SiAmazonapigateway,
    SiAmazoncloudwatch,
} from "react-icons/si";
import {
    DiGit,
  } from "react-icons/di";
import {
    FaJira,
    FaDocker,
} from "react-icons/fa";
import {
    VscAzureDevops,
} from "react-icons/vsc";


function Librarystack() {
return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
        <DiGit />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <FaJira />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <VscAzureDevops />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <FaDocker />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiAmazondynamodb />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiAmazonapigateway />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiAmazoncloudwatch />
    </Col>
    </Row>
);
}

export default Librarystack;