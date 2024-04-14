"use client";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  SendOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Space } from "antd";
import Link from "next/link";

const Footer = () => {
  return (
    <section
      style={{
        maxHeight: "427px",
        backgroundColor: "#3498db",
        padding: "50px",
      }}
    >
      <Row justify="space-evenly">
        <Col style={{ maxWidth: "240px", margin: "10px" }}>
          <span
            style={{ fontSize: "36px", color: "#BFD2F8", fontWeight: "bold" }}
          >
            SKINSIGHT
          </span>
          <br />
          <span style={{ fontSize: "18px", color: "#FCFEFE" }}>
            Leading the Way in Medical Execellence, Trusted Care.
          </span>
        </Col>
        <Col style={{ maxWidth: "240px", margin: "10px" }}>
          <span style={{ fontSize: "18px", color: "#FCFEFE" }}>
            Important Links
          </span>
          <ul>
            <li>
              <Link
                href="/diagnosis"
                style={{ fontSize: "16px", color: "#FCFEFE" }}
              >
                Diagnosis
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                style={{ fontSize: "16px", color: "#FCFEFE" }}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/resource"
                style={{ fontSize: "16px", color: "#FCFEFE" }}
              >
                Resource
              </Link>
            </li>
            <li>
              <Link
                href="/about_us"
                style={{ fontSize: "16px", color: "#FCFEFE" }}
              >
                About Us
              </Link>
            </li>
          </ul>
        </Col>

        <Col style={{ maxWidth: "240px", margin: "10px" }}>
          <span style={{ fontSize: "18px", color: "#FCFEFE" }}>Contact Us</span>
          <ul style={{ fontSize: "16px", color: "#FCFEFE" }}>
            <li>Call: (237) 681-812-255</li>
            <li>Email: fildineesoe@gmail.com</li>
            <li>Address: 0123 Some place</li>
            <li>Some country</li>
          </ul>
        </Col>
        <Col style={{ maxWidth: "240px", margin: "10px" }}>
          <span style={{ fontSize: "18px", color: "#FCFEFE" }}>Newsletter</span>
          <br />
          <br />
          <Button icon={<SendOutlined />}>Enter your email address</Button>
        </Col>
      </Row>
      <hr />
      <br />
      <Row justify="space-between">
        <Col>
          <span style={{ fontSize: "16px", color: "#FCFEFE" }}>
            © 2024 SkinSight All Rights Reserved by PNTEC-LTD
          </span>
        </Col>
        <Col>
          <Space>
            <Link href="/">
              <LinkedinFilled style={{ fontSize: "25px" }} />
            </Link>
            <Link href="/">
              <FacebookFilled style={{ fontSize: "25px" }} />
            </Link>
            <Link href="/">
              <InstagramFilled style={{ fontSize: "25px" }} />
            </Link>
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;
